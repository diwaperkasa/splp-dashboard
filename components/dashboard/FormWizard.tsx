'use client'

import { useState } from 'react'
import styles from './FormWizard.module.scss'
import { useRef } from 'react';
import axios from 'axios';

interface Step {
    id: number
    title: string
    label: string
}

const STEPS: Step[] = [
    { id: 1, title: 'Pengajuan', label: 'Step 1' },
    { id: 2, title: 'Desain API', label: 'Step 2' },
    { id: 3, title: 'Governance', label: 'Step 3' },
]

export default function FormWizard() {
    const formOne = useRef(null);
    const formTwo = useRef(null);
    const formThree = useRef(null);
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Step 1 - Pengajuan
        apiName: '',
        description: '',
        businessUnit: '',
        // Step 2 - Desain API
        apiVersion: '',
        productionUrl: '',
        sandboxUrl: '',
        apiType: '',
        httpMethod: '',
        contextPath: '',
        // Step 3 - Governance
        dataClassification: '',
        apiPackage: '',
        sla: '',
        owner: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = () => {
        switch (currentStep) {
            case 1:
                if (formOne.current) {
                    const form = formOne.current as HTMLFormElement
                    if (form.checkValidity()) {
                        handleNext()
                    } else {
                        form.reportValidity()
                    }
                }
                break
            case 2:
                if (formTwo.current) {
                    const form = formTwo.current as HTMLFormElement
                    if (form.checkValidity()) {
                        handleNext()
                    } else {
                        form.reportValidity()
                    }
                }
                break
            case 3:
                if (formThree.current) {
                    const form = formThree.current as HTMLFormElement
                    if (form.checkValidity()) {
                        handleSubmit(new Event('submit') as unknown as React.FormEvent)
                    } else {
                        form.reportValidity()
                    }
                }
                break
            default:
                break
        }
    }

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        console.log('Form Data Submitted:', formData)

        try {
            const response = await axios.post('/api/wso-apim/catalog-api/create', formData)
            
            setFormData({
                // Step 1 - Pengajuan
                apiName: '',
                description: '',
                businessUnit: '',
                // Step 2 - Desain API
                apiVersion: '',
                productionUrl: '',
                sandboxUrl: '',
                apiType: '',
                httpMethod: '',
                contextPath: '',
                // Step 3 - Governance
                dataClassification: '',
                apiPackage: '',
                sla: '',
                owner: '',
            })

            setCurrentStep(1);
        } catch (error) {}
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="card-body">
                        <h4>Pengajuan API</h4>
                        <form ref={formOne}>
                            <div className="mb-3">
                                <label htmlFor="apiName" className="form-label">
                                    Nama API <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apiName"
                                    name="apiName"
                                    value={formData.apiName}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan nama API"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Deskripsi <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Deskripsi lengkap API"
                                    required
                                ></textarea>
                            </div>
                        </form>
                    </div>
                )

            case 2:
                return (
                    <div className="card-body">
                        <h4>Desain API</h4>
                        <form ref={formTwo}>
                            <div className="mb-3">
                                <label htmlFor="apiVersion" className="form-label">
                                    Versi API <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apiVersion"
                                    name="apiVersion"
                                    value={formData.apiVersion}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 1.0.0"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="productionUrl" className="form-label">
                                    Production URL <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="productionUrl"
                                    name="productionUrl"
                                    value={formData.productionUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://api.example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sandboxUrl" className="form-label">
                                    Sandbox URL <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="sandboxUrl"
                                    name="sandboxUrl"
                                    value={formData.sandboxUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://api.example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="apiType" className="form-label">
                                    Tipe API <span className="text-danger">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="apiType"
                                    name="apiType"
                                    value={formData.apiType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">- Pilih -</option>
                                    <option value="HTTP">REST</option>
                                    <option value="SOAP">SOAP</option>
                                    <option value="GRAPHQL">GraphQL</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="httpMethod" className="form-label">
                                    Metode HTTP <span className="text-danger">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="httpMethod"
                                    name="httpMethod"
                                    value={formData.httpMethod}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">- Pilih -</option>
                                    <option value="GET">GET</option>
                                    <option value="POST">POST</option>
                                    <option value="PUT">PUT</option>
                                    <option value="DELETE">DELETE</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="contextPath" className="form-label">
                                    Context Path <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contextPath"
                                    name="contextPath"
                                    value={formData.contextPath}
                                    onChange={handleInputChange}
                                    placeholder="/resource-api/custom-path"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                )

            case 3:
                return (
                    <div className="card-body">
                        <h4>Governance</h4>
                        <form ref={formThree}>
                            <div className="mb-3">
                                <label htmlFor="dataClassification" className="form-label">
                                    Klasifikasi Data <span className="text-danger">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="dataClassification"
                                    name="dataClassification"
                                    value={formData.dataClassification}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Pilih Klasifikasi Data</option>
                                    <option value="PUBLIC">Public</option>
                                    <option value="PRIVATE">Internal</option>
                                    <option value="RESTRICTED">Restricted</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="apiPackage" className="form-label">
                                    Paket API <span className="text-danger">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="apiPackage"
                                    name="apiPackage"
                                    value={formData.apiPackage}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Pilih Paket API</option>
                                    <option value="Unlimited">Unlimited</option>
                                    <option value="gold">Gold</option>
                                    <option value="silver">Silver</option>
                                    <option value="bronze">Bronze</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="owner" className="form-label">
                                    API Owner <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="owner"
                                    name="owner"
                                    value={formData.owner}
                                    onChange={handleInputChange}
                                    placeholder="Nama API Owner"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div className="container py-4" style={{ maxWidth: '700px' }}>
            {/* Step Indicator */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-start position-relative">
                    {/* Progress Line */}
                    <div
                        className="position-absolute"
                        style={{
                            top: '2rem',
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: '#e0e0e0',
                            zIndex: 0,
                        }}
                    />

                    {/* Steps */}
                    {STEPS.map((step) => (
                        <div key={step.id} className="d-flex flex-column align-items-center position-relative" style={{ flex: 1 }}>
                            <div
                                className={`rounded-circle d-flex align-items-center justify-content-center fw-bold mb-2 ${
                                    currentStep >= step.id
                                        ? 'bg-primary text-white'
                                        : 'bg-light text-muted border'
                                }`}
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    fontSize: '1.2rem',
                                    zIndex: 1,
                                    border: currentStep >= step.id ? 'none' : '2px solid #ddd',
                                    boxShadow: currentStep === step.id ? '0 0 0 4px rgba(13, 110, 253, 0.25)' : 'none',
                                }}
                            >
                                {currentStep > step.id ? '✓' : step.id}
                            </div>
                            <small className="text-center text-muted" style={{ maxWidth: '100px' }}>
                                {step.title}
                            </small>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="card mb-4">
                {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between align-items-center gap-3">
                <button
                    className="btn btn-secondary"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                >
                    ← Sebelumnya
                </button>

                <small className="text-muted fw-bold">
                    Step {currentStep} dari {STEPS.length}
                </small>

                {currentStep === STEPS.length ? (
                    <button
                        className="btn btn-success"
                        onClick={handleFormSubmit}
                    >
                        Selesai & Submit ✓
                    </button>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={handleFormSubmit}
                    >
                        Selanjutnya →
                    </button>
                )}
            </div>
        </div>
    )
}
