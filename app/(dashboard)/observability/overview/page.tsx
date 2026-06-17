export default async function Overview({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container-fluid py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="display-5 fw-bold mb-2">Executive Observability Dashboard</h1>
                    <p className="text-muted">Ringkasan kondisi platform Nasional SPLP, API aktif, dan status keamanan real-time.</p>
                </div>
            </div>

            {/* Top Cards Section */}
            <div className="row mb-4 g-3">
                {/* SPLP Health Score */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <p className="card-text text-info fw-semibold mb-3">SPLP HEALTH SCORE</p>
                                    <h2 className="display-4 fw-bold mb-2">92</h2>
                                    <span className="badge bg-success me-2">HEALTHY</span>
                                    <span className="text-success">↗ 2%</span>
                                </div>
                            </div>
                            <p className="card-text small text-muted">National Platform Index</p>
                        </div>
                    </div>
                </div>

                {/* API Nasional */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                <span className="badge bg-info me-2">⚡</span>
                                <p className="card-text text-info fw-semibold mb-0">API NASIONAL</p>
                            </div>
                            <h3 className="display-6 fw-bold mb-3">Normal</h3>
                            <div className="mb-2">
                                <div className="progress mb-2" style={{height: '4px'}}>
                                    <div className="progress-bar bg-success" style={{width: '99.8%'}}></div>
                                </div>
                                <small className="text-muted">Success: 99.8% | Latency: 120ms</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kafka Event */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                <span className="badge bg-warning me-2">🔔</span>
                                <p className="card-text text-warning fw-semibold mb-0">KAFKA EVENT</p>
                            </div>
                            <h3 className="display-6 fw-bold text-warning mb-3">Warning</h3>
                            <small className="text-muted d-block mb-1">Broker: OK | Lag: <span className="text-warning">Moderate</span></small>
                        </div>
                    </div>
                </div>

                {/* SLA Target */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                <span className="badge bg-success me-2">✓</span>
                                <p className="card-text text-success fw-semibold mb-0">SLA TARGET</p>
                            </div>
                            <h3 className="display-6 fw-bold mb-3">On Track</h3>
                            <small className="text-muted d-block">Target: 99.0% | Actual: 99.5%</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Card */}
            <div className="row mb-4">
                <div className="col-12 col-lg-4">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <span className="badge bg-danger me-2">🛡️</span>
                                <p className="card-text text-danger fw-semibold mb-0">SECURITY</p>
                            </div>
                            <h3 className="display-6 fw-bold mb-3">Active</h3>
                            <div className="d-flex gap-2">
                                <span className="badge bg-danger">1 CRIT</span>
                                <span className="badge bg-warning">2 HIGH</span>
                            </div>
                            <p className="card-text small text-muted mt-2">WAF Events: 45</p>
                        </div>
                    </div>
                </div>

                {/* Metrics Row */}
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        <div className="col-6 col-lg-3">
                            <div className="card border-0 bg-dark text-white">
                                <div className="card-body">
                                    <p className="card-text text-muted small">Transaksi API Hari Ini</p>
                                    <h3 className="display-6 fw-bold">4.2M</h3>
                                    <p className="card-text small text-success">+12.5% from yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="card border-0 bg-dark text-white">
                                <div className="card-body">
                                    <p className="card-text text-muted small">Active Tenants / IPPD</p>
                                    <h3 className="display-6 fw-bold">124</h3>
                                    <p className="card-text small text-muted">4 new onboarded this week</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="card border-0 bg-dark text-white">
                                <div className="card-body">
                                    <p className="card-text text-muted small">Avg Latency Nasional</p>
                                    <h3 className="display-6 fw-bold text-success">120ms</h3>
                                    <p className="card-text small text-muted">Inside SLA Target (&lt; 200ms)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="card border-0 bg-dark text-white">
                                <div className="card-body">
                                    <p className="card-text text-muted small">Insiden Aktif</p>
                                    <h3 className="display-6 fw-bold text-danger">2</h3>
                                    <p className="card-text small">
                                        <span className="badge bg-danger">1 Investigating</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Critical Layers Section */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 bg-dark text-white">
                        <div className="card-header border-0 bg-dark">
                            <h5 className="mb-0">Top Layanan Kritikal</h5>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                {[
                                    {
                                        name: 'API Kependudukan Kementerian Dalam Negeri',
                                        ministry: 'KEMENDAGRI',
                                        req: '1.2M',
                                        err: '0.1%',
                                        status: 'HEALTHY',
                                        statusBg: 'bg-success'
                                    },
                                    {
                                        name: 'Sistem Informasi Nakes',
                                        ministry: 'KEMENTERIAN KESEHATAN',
                                        req: '850K',
                                        err: '1.8%',
                                        status: 'WARNING',
                                        statusBg: 'bg-warning'
                                    },
                                    {
                                        name: 'Integrasi Kementerian Keuangan Daerah',
                                        ministry: 'PROVINSI DKI JAKARTA',
                                        req: '420K',
                                        err: '0.0%',
                                        status: 'HEALTHY',
                                        statusBg: 'bg-success'
                                    },
                                    {
                                        name: 'Pencarian Rekam Medis (Kafka)',
                                        ministry: 'KEMENTERIAN KESEHATAN',
                                        req: '280K',
                                        err: '0.5%',
                                        status: 'HEALTHY',
                                        statusBg: 'bg-success'
                                    },
                                    {
                                        name: 'Validasi Izin Usaha',
                                        ministry: 'KEMENTERIAN INVESTASI',
                                        req: '195K',
                                        err: '0.2%',
                                        status: 'HEALTHY',
                                        statusBg: 'bg-success'
                                    }
                                ].map((service, idx) => (
                                    <div key={idx} className="col-12">
                                        <div className="d-flex justify-content-between align-items-center p-3 border border-secondary rounded">
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-bold">{service.name}</h6>
                                                <small className="text-muted">{service.ministry}</small>
                                            </div>
                                            <div className="text-end ms-3">
                                                <div className="mb-2">
                                                    <small className="text-muted d-block">{service.req} Req</small>
                                                    <small className="text-muted d-block">Err: {service.err}</small>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <span className={`badge ${service.statusBg} text-white`}>{service.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}