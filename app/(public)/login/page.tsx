import { isLoggedIn } from "@/lib/auth/session"
import { redirect } from "next/navigation"

export default async function LoginPage({
    children,
}: {
    children: React.ReactNode
}) {
    const auth = await isLoggedIn()

    if (auth) {
        return redirect("/")
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xl-5 col-md-10">
                <div className="card p-4">
                    <div className="card-body d-flex flex-column gap-4">
                        <h2 className="h5 text-center">Login ke akun Anda</h2>
                        <div className="row gap-3">
                            <a href="/auth/login" className="btn btn-primary">Login disini</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}