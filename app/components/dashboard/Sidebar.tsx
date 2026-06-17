export default async function Sidebar() {
    return (
        <div className="sidebar sidebar-dark sidebar-fixed border-end" id="sidebar">
            <div className="sidebar-header border-bottom">
                <div className="sidebar-brand me-auto">
                    <img style={{ height: '1.5rem' }} alt="Kementerian Komunikasi dan Digital" className="img-fluid me-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_%282024%29.svg/500px-Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_%282024%29.svg.png" />
                    <span>SPLP Dashboard</span>
                </div>
                <button className="btn-close d-lg-none" type="button" data-coreui-theme="dark" aria-label="Close"></button>
            </div>
            <ul className="sidebar-nav" data-coreui="navigation" data-simplebar>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="var(--ci-primary-color, currentcolor)" d="M425.706 142.294A240 240 0 0 0 16 312v88h144v-32H48v-56c0-114.691 93.309-208 208-208s208 93.309 208 208v56H352v32h144v-88a238.43 238.43 0 0 0-70.294-169.706" className="ci-primary" />
                            <path fill="var(--ci-primary-color, currentcolor)" d="M80 264h32v32H80zm160-136h32v32h-32zm-104 40h32v32h-32zm264 96h32v32h-32zm-102.778 71.1 69.2-144.173-28.85-13.848-69.183 144.135a64.141 64.141 0 1 0 28.833 13.886M256 416a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li className="nav-title">All Menus</li>
                <li className="nav-item">
                    <a className="nav-link" href="/api-catalog">
                        <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="var(--ci-primary-color, currentcolor)" d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z" className="ci-primary"></path>
                            <path fill="var(--ci-primary-color, currentcolor)" d="M480 48H32v416h448Zm-32 384H64V80h384Z" className="ci-primary"></path>
                        </svg>
                        Katalog API
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/api-registration">
                        <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="var(--ci-primary-color, currentcolor)" d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z" className="ci-primary"></path>
                            <path fill="var(--ci-primary-color, currentcolor)" d="M480 48H32v416h448Zm-32 384H64V80h384Z" className="ci-primary"></path>
                        </svg>
                        Registrasi API
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/api-approval">
                        <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="var(--ci-primary-color, currentcolor)" d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z" className="ci-primary"></path>
                            <path fill="var(--ci-primary-color, currentcolor)" d="M480 48H32v416h448Zm-32 384H64V80h384Z" className="ci-primary"></path>
                        </svg>
                        Persetujuan Registrasi API
                    </a>
                </li>
                <li className="nav-group show" aria-expanded="true">
                    <a className="nav-link nav-group-toggle" href="#">
                        <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="var(--ci-primary-color, currentcolor)" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468" className="ci-primary"></path>
                            <path fill="var(--ci-primary-color, currentcolor)" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z" className="ci-primary"></path>
                        </svg>
                        Observability
                    </a>
                    <ul className="nav-group-items compact" style={{ height: 'auto' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/observability/overview">
                                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                Overview
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/observability/api-transaction">
                                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                                API Transaction
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="sidebar-footer border-top d-none d-md-flex">
                <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
            </div>
        </div>
    )
}