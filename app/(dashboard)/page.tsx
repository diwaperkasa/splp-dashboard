export default async function Dashboard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container-fluid p-4">
            {/* Header Section */}
            <div className="mb-5">
                <h1 className="text-white mb-2">Selamat datang, Admin Pemprov DKI (Pemprov DKI Jakarta)</h1>
                <p className="text-muted">Ringkasan aktivitas dan layanan integrasi API Anda saat ini.</p>
            </div>

            {/* Action Buttons */}
            <div className="row mb-4 gap-3">
                <div className="col-auto">
                    <div className="rounded p-3 text-center" style={{ backgroundColor: '#2d3e50', border: '1px solid #444' }}>
                        <div className="text-warning mb-2">◉</div>
                        <div className="text-warning fw-bold">80%</div>
                        <div className="text-muted small">READINESS<br />SCORE</div>
                        <div className="text-muted small mt-1">Butuh Dokumen<br />Hukum</div>
                    </div>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary btn-lg px-4">Jelajahi Katalog API</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-outline-secondary btn-lg px-4">Buat Data Request</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-5">
                <div className="col-md-6 col-lg-3">
                    <div className="rounded p-4 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#1a2940', border: '1px solid #0d6efd' }}>
                        <div>
                            <div className="text-muted small">Total API Tersedia</div>
                            <h2 className="text-white mb-0">245</h2>
                        </div>
                        <div className="text-primary" style={{ fontSize: '2.5rem' }}>📦</div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="rounded p-4 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#1a2940', border: '1px solid #00b894' }}>
                        <div>
                            <div className="text-muted small">Subscription Aktif</div>
                            <h2 className="text-white mb-0">12</h2>
                        </div>
                        <div className="text-success" style={{ fontSize: '2.5rem' }}>🛡️</div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="rounded p-4 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#1a2940', border: '1px solid #7c5cdb' }}>
                        <div>
                            <div className="text-muted small">SLA Keseluruhan</div>
                            <h2 className="text-white mb-0">99.9%</h2>
                        </div>
                        <div style={{ fontSize: '2.5rem', color: '#7c5cdb' }}>📈</div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="rounded p-4 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#1a2940', border: '1px solid #dc3545' }}>
                        <div>
                            <div className="text-muted small">Anomali API</div>
                            <h2 className="text-white mb-0">2</h2>
                        </div>
                        <div className="text-danger" style={{ fontSize: '2.5rem' }}>⚠️</div>
                    </div>
                </div>
            </div>

            {/* Monitoring Section */}
            <div className="row mb-5">
                <div className="col-lg-8">
                    <div className="rounded p-4" style={{ backgroundColor: '#0d1b2a', border: '1px solid #1a3a4a' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-white mb-0">API Paling Sering Diakses</h3>
                            <a href="#" className="text-primary text-decoration-none">Lihat metrik lengkap →</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-muted text-uppercase small">Nama Layanan</th>
                                        <th className="text-muted text-uppercase small">Health</th>
                                        <th className="text-muted text-uppercase small">Avg Latency</th>
                                        <th className="text-muted text-uppercase small">Success Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="text-white">Data Kependudukan NIK API</div>
                                            <div className="text-muted small">Ditjen Dukcapil</div>
                                        </td>
                                        <td><span className="badge bg-success">HEALTHY</span></td>
                                        <td className="text-white">120ms</td>
                                        <td className="text-white">
                                            <div className="progress" style={{ height: '20px', width: '100px' }}>
                                                <div className="progress-bar bg-success" style={{ width: '99.8%' }}></div>
                                            </div>
                                            99.8%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-white">Data Wilayah Administratif</div>
                                            <div className="text-muted small">Kemendagri</div>
                                        </td>
                                        <td><span className="badge bg-success">HEALTHY</span></td>
                                        <td className="text-white">250ms</td>
                                        <td className="text-white">
                                            <div className="progress" style={{ height: '20px', width: '100px' }}>
                                                <div className="progress-bar bg-success" style={{ width: '98.2%' }}></div>
                                            </div>
                                            98.2%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-white">Update Gempa Bumi Terkini</div>
                                            <div className="text-muted small">BMKG</div>
                                        </td>
                                        <td><span className="badge" style={{ backgroundColor: '#f39c12', color: '#000' }}>DEGRADED</span></td>
                                        <td className="text-white">450ms</td>
                                        <td className="text-white">
                                            <div className="progress" style={{ height: '20px', width: '100px' }}>
                                                <div className="progress-bar bg-warning" style={{ width: '92.5%' }}></div>
                                            </div>
                                            92.5%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-white">Data Bantuan Sosial Nasional</div>
                                            <div className="text-muted small">Kemensos</div>
                                        </td>
                                        <td><span className="badge bg-danger">DOWN</span></td>
                                        <td className="text-white">-</td>
                                        <td className="text-white">
                                            <div className="progress" style={{ height: '20px', width: '100px' }}>
                                                <div className="progress-bar bg-danger" style={{ width: '0%' }}></div>
                                            </div>
                                            0%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-lg-4">
                    <div className="row g-3">
                        {/* Permission Notice */}
                        <div className="col-12">
                            <div className="rounded p-4" style={{ backgroundColor: '#1a2b3a', border: '1px solid #0d6efd' }}>
                                <h5 className="text-white mb-3">Permintaan Layanan</h5>
                                <p className="text-muted mb-4">Butuh API yang belum ada di Katalog Nasional? Ajukan tiket request untuk disiaakan oleh Wall Data.</p>
                                <button className="btn btn-primary w-100">Pantau Status Request</button>
                            </div>
                        </div>

                        {/* Security Alert */}
                        <div className="col-12">
                            <div className="rounded p-4" style={{ backgroundColor: '#2a1a1a', border: '1px solid #dc3545' }}>
                                <h5 className="text-danger mb-4">⚠️ Security Alert Center</h5>
                                <div className="mb-3 pb-3" style={{ borderBottom: '1px solid #444' }}>
                                    <div className="text-white small mb-2">Rate Limit Triggered (500/s)</div>
                                    <div className="text-muted small">T: Pemprov DKI | IP: 103.11.22.x</div>
                                    <span className="badge bg-danger mt-2">HIGH</span>
                                </div>
                                <div>
                                    <div className="text-white small mb-2">Unauthorized Pattern Detected</div>
                                    <div className="text-muted small">T: Unknown | IP: 45.33.12.x</div>
                                    <span className="badge bg-danger mt-2">CRITICAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="rounded p-4 mb-5" style={{ backgroundColor: '#0d1b2a', border: '1px solid #1a3a4a' }}>
                <h3 className="text-primary mb-4">
                    📊 REKOMENDASI API UNTUK INSTANSI ANDA
                </h3>
                <p className="text-muted mb-4">Berdasarkan profil dan histori permintaan data yang Anda ajukan, API berikut mungkin relevan untuk diintegrasikan:</p>
                
                <div className="row g-3">
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded p-3" style={{ backgroundColor: '#1a2940', border: '1px solid #1a3a4a' }}>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <h6 className="text-white">Data Kependudukan NIK API</h6>
                                <span className="badge bg-info text-dark">MATCH 98%</span>
                            </div>
                            <p className="text-muted small mb-2">API untuk verifikasi data kependudukan berdasarkan...</p>
                            <div className="d-flex gap-2 flex-wrap">
                                <span className="badge bg-secondary">Ditjen Dukcapil</span>
                                <span className="badge bg-secondary">REST API</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded p-3" style={{ backgroundColor: '#1a2940', border: '1px solid #1a3a4a' }}>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <h6 className="text-white">Data Wilayah Administratif</h6>
                                <span className="badge bg-info text-dark">MATCH 98%</span>
                            </div>
                            <p className="text-muted small mb-2">Layanan data master provinsi, kabupaten, kecamatan,...</p>
                            <div className="d-flex gap-2 flex-wrap">
                                <span className="badge bg-secondary">Kemendagri</span>
                                <span className="badge bg-secondary">Data Product</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="rounded p-3" style={{ backgroundColor: '#1a2940', border: '1px solid #1a3a4a' }}>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <h6 className="text-white">Update Gempa Bumi Terkini</h6>
                                <span className="badge bg-info text-dark">MATCH 98%</span>
                            </div>
                            <p className="text-muted small mb-2">Informasi peringatan dini gempa bumi realtime.</p>
                            <div className="d-flex gap-2 flex-wrap">
                                <span className="badge bg-secondary">BMKG</span>
                                <span className="badge bg-secondary">WebSocket API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}