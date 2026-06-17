export default async function ApiTransaction({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container-fluid py-4">
            {/* Header */}
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="display-5 fw-bold mb-2">API Transaction Monitoring</h1>
                    <p className="text-muted">Monitor API calls, latency, and success rates</p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 bg-dark p-3">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <select className="form-select form-select-sm bg-secondary text-white border-0">
                                    <option selected>All Tenants</option>
                                    <option>Tenant A</option>
                                    <option>Tenant B</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <select className="form-select form-select-sm bg-secondary text-white border-0">
                                    <option selected>All APIs</option>
                                    <option>API 1</option>
                                    <option>API 2</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <select className="form-select form-select-sm bg-secondary text-white border-0">
                                    <option selected>Status: All</option>
                                    <option>Success</option>
                                    <option>Error</option>
                                    <option>Warning</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="row mb-4 g-3">
                <div className="col-12 col-sm-6 col-lg">
                    <div className="card border border-secondary bg-dark text-white h-100">
                        <div className="card-body">
                            <p className="card-text text-muted small mb-2">Total Requests</p>
                            <h3 className="display-6 fw-bold">124.5K</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg">
                    <div className="card border border-secondary bg-dark text-white h-100">
                        <div className="card-body">
                            <p className="card-text text-muted small mb-2">Success Rate</p>
                            <h3 className="display-6 fw-bold text-success">99.8%</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg">
                    <div className="card border border-secondary bg-dark text-white h-100">
                        <div className="card-body">
                            <p className="card-text text-muted small mb-2">Error Rate</p>
                            <h3 className="display-6 fw-bold text-danger">0.2%</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg">
                    <div className="card border border-secondary bg-dark text-white h-100">
                        <div className="card-body">
                            <p className="card-text text-muted small mb-2">Avg Backend Latency</p>
                            <h3 className="display-6 fw-bold">142ms</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg">
                    <div className="card border border-secondary bg-dark text-white h-100">
                        <div className="card-body">
                            <p className="card-text text-muted small mb-2">Avg Mediation Latency</p>
                            <h3 className="display-6 fw-bold">41ms</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts and Failed Endpoints */}
            <div className="row mb-4 g-3">
                {/* Latency Trend Chart */}
                <div className="col-12 col-lg-8">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Latency Trend (Backend vs Mediation)</h5>
                            <div style={{
                                background: 'linear-gradient(180deg, rgba(255,193,7,0.1) 0%, transparent 100%)',
                                borderRadius: '8px',
                                padding: '20px',
                                minHeight: '300px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-around',
                                gap: '10px'
                            }}>
                                {[
                                    {height: '40%', label: '09:00'},
                                    {height: '42%', label: '09:15'},
                                    {height: '45%', label: '09:30'},
                                    {height: '65%', label: '09:45'},
                                    {height: '90%', label: '10:00'},
                                    {height: '70%', label: '10:15'},
                                    {height: '50%', label: '10:30'},
                                    {height: '38%', label: '10:45'}
                                ].map((bar, idx) => (
                                    <div key={idx} className="text-center flex-grow-1">
                                        <div style={{
                                            height: bar.height,
                                            background: 'linear-gradient(180deg, #ffc107 0%, #ff8c00 100%)',
                                            borderRadius: '4px 4px 0 0',
                                            marginBottom: '8px'
                                        }}></div>
                                        <small className="text-muted d-block">{bar.label}</small>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Failed Endpoints */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 bg-dark text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Top Failed Endpoints</h5>
                            <div className="d-flex flex-column gap-3">
                                {[
                                    {endpoint: '/v1/population/check', errors: '245 err'},
                                    {endpoint: '/auth/token', errors: '112 err'},
                                    {endpoint: '/api/v2/sync', errors: '89 err'}
                                ].map((item, idx) => (
                                    <div key={idx} className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3">
                                        <span className="text-muted">{item.endpoint}</span>
                                        <span className="badge bg-danger">{item.errors}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live API Transactions Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 bg-dark text-white">
                        <div className="card-header border-0 bg-dark">
                            <h5 className="mb-0">Live API Transactions</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr className="border-bottom border-secondary">
                                            <th className="text-uppercase text-muted small fw-semibold">API Name</th>
                                            <th className="text-uppercase text-muted small fw-semibold">Tenant</th>
                                            <th className="text-uppercase text-muted small fw-semibold">Endpoint</th>
                                            <th className="text-uppercase text-muted small fw-semibold">Status</th>
                                            <th className="text-uppercase text-muted small fw-semibold">Latency</th>
                                            <th className="text-uppercase text-muted small fw-semibold">Trace ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                name: 'Population API',
                                                tenant: 'Provinsi DKI Jakarta',
                                                endpoint: 'POST /check',
                                                status: {code: '200', color: 'success'},
                                                latency: '180ms',
                                                traceId: 'trc-001'
                                            },
                                            {
                                                name: 'Health Record',
                                                tenant: 'BPJS Kesehatan',
                                                endpoint: 'GET /patient/12',
                                                status: {code: '500', color: 'danger'},
                                                latency: '1200ms',
                                                traceId: 'trc-002'
                                            },
                                            {
                                                name: 'Tax API',
                                                tenant: 'Provinsi Jawa Tengah',
                                                endpoint: 'GET /status',
                                                status: {code: '429', color: 'warning'},
                                                latency: '45ms',
                                                traceId: 'trc-003'
                                            }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-bottom border-secondary">
                                                <td className="py-3">{row.name}</td>
                                                <td className="py-3">{row.tenant}</td>
                                                <td className="py-3"><code className="text-info small">{row.endpoint}</code></td>
                                                <td className="py-3">
                                                    <span className={`badge bg-${row.status.color}`}>{row.status.code}</span>
                                                </td>
                                                <td className="py-3">{row.latency}</td>
                                                <td className="py-3"><a href="#" className="text-info text-decoration-none small">{row.traceId}</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}