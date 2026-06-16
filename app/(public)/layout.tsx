export default async function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                {children}
            </div>
        </main>
    )
}