import APICard from '@/components/dashboard/APICard'
import { dummyAPIs } from '@/lib/dummy-apis'
import styles from './api-catalog.module.scss'

export default async function APICatalog() {
    return (
        <>
            <h1 className="mb-4">API Catalog</h1>
            <div className={styles.catalogContainer}>
                <div className={styles.grid}>
                    {dummyAPIs.map((api) => (
                        <APICard key={api.id} api={api} />
                    ))}
                </div>
            </div>
        </>
    )
}