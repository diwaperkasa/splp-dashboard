import { NextRequest, NextResponse } from "next/server"
import axios from 'axios';
import { getToken } from "@/lib/apim/session"
import https from "https"

export async function POST(req: NextRequest) {
    const body = await req.json()

    const formData = {
        name: body.apiName,
        description: body.description,
        policies: [
            body.apiPackage
        ],
        gatewayType: "wso2/synapse",
        context: body.contextPath,
        version: body.apiVersion,
        provider: "admin",
        // visibility: body.dataClassification,
        // lifeCycleStatus: "PUBLISHED",
        endpointConfig: {
            endpoint_type: body.apiType.toLowerCase(),
            sandbox_endpoints: {
                url: body.sandboxUrl
            },
            production_endpoints: {
                url: body.productionUrl
            }
        },
        apiThrottlingPolicy: body.apiPackage,
        operations: [
            {
                target: "/",
                verb: body.httpMethod,
                authType: "Application & Application User",
                throttlingPolicy: body.apiPackage,
                scopes: []
            }
        ]
    }

    try {
        console.log('Form Data to be sent to WSO2 API Manager:', formData)
        const token = await getToken();
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
          })

        const response = await axios.post(`${process.env.WSO2_APIM_BASE_URL}/api/am/publisher/v4/apis?openAPIVersion=v3`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const revisionResponse = await axios.post(`${process.env.WSO2_APIM_BASE_URL}/api/am/publisher/v4/apis/${response.data.id}/revisions`, {
            description: "Initial revision",
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const deployRevisionResponse = await axios.post(`${process.env.WSO2_APIM_BASE_URL}/api/am/publisher/v4/apis/${response.data.id}/deploy-revision?revisionId=${revisionResponse.data.id}`, [
            {
                displayOnDevportal : true,
                name : "Default",
                vhost : "localhost"
            }
        ], {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const changeLifecycleResponse = await axios.post(`${process.env.WSO2_APIM_BASE_URL}/api/am/publisher/v4/apis/change-lifecycle?action=Publish&apiId=${response.data.id}`, {
            action: "Publish",
            apiId: response.data.id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { message: "success"},
        { status: 200 }
    );
}