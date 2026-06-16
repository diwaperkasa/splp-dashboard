import { Fragment } from "react"
import "@/app/components/dashboard/Sidebar"
import Sidebar from "@/app/components/dashboard/Sidebar"
import Header from "@/app/components/dashboard/Header"
import { isLoggedIn } from "@/lib/auth/session"
import { redirect } from "next/navigation"

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const auth = await isLoggedIn()

    if (!auth) {
        return redirect("/login")
    }

    return (
        <Fragment>
            <Sidebar />
            <main className="wrapper d-flex flex-column min-vh-100">
                <Header />
                <div className="body flex-grow-1">
                    <div className="container-lg px-4">
                        {children}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}