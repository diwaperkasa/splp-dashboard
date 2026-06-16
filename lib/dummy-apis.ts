export interface API {
    id: string
    title: string
    status: 'PUBLISHED' | 'DRAFT' | 'DEPRECATED'
    tier: 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE'
    type: 'REST API' | 'Data Product' | 'WebSocket API' | 'SOAP'
    version: string
    owner: string
    verified: boolean
    verifiedBy?: string
    description: string
    tags: string[]
    score: number
    category: 'Personal Data' | 'Public' | 'Internal'
    statusRate: number
    hasSecurityReview?: boolean
    hasSLA?: boolean
}

export const dummyAPIs: API[] = [
    {
        id: 'api-001',
        title: 'Data Kependudukan NIK',
        status: 'PUBLISHED',
        tier: 'PLATINUM',
        type: 'REST API',
        version: 'v2.1',
        owner: 'Ditjen Dukcapil',
        verified: true,
        verifiedBy: 'KOMDIGI',
        description: 'API untuk verifikasi data kependudukan berdasarkan NIK dari database kependudukan nasional.',
        tags: ['STABLE', 'SLA AVAILABLE', 'SECURITY REVIEWED'],
        score: 95,
        category: 'Personal Data',
        statusRate: 99.8,
        hasSecurityReview: true,
        hasSLA: true,
    },
    {
        id: 'api-002',
        title: 'Data Wilayah Administratif',
        status: 'PUBLISHED',
        tier: 'GOLD',
        type: 'Data Product',
        version: 'v1.5',
        owner: 'Kemendagri',
        verified: true,
        verifiedBy: 'KOMDIGI',
        description: 'Layanan data master provinsi, kabupaten, kecamatan, dan desa untuk keperluan administrasi pemerintahan.',
        tags: ['VERIFIED'],
        score: 88,
        category: 'Public',
        statusRate: 98.2,
    },
    {
        id: 'api-003',
        title: 'Update Gempa Bumi Realtime',
        status: 'PUBLISHED',
        tier: 'GOLD',
        type: 'WebSocket API',
        version: 'v3.0',
        owner: 'BMKG',
        verified: true,
        verifiedBy: 'KOMDIGI',
        description: 'Informasi peringatan dini gempa bumi realtime dari Badan Meteorologi, Klimatologi, dan Geofisika.',
        tags: ['HIGH USAGE API'],
        score: 92,
        category: 'Public',
        statusRate: 92.5,
    },
    {
        id: 'api-004',
        title: 'Data Pembayaran Pajak dan Retribusi',
        status: 'PUBLISHED',
        tier: 'PLATINUM',
        type: 'REST API',
        version: 'v1.8',
        owner: 'Kemenkeu',
        verified: true,
        verifiedBy: 'KOMDIGI',
        description: 'Sistem integrasi untuk pelaporan dan verifikasi pembayaran pajak dan retribusi daerah secara realtime.',
        tags: ['STABLE', 'SLA AVAILABLE', 'SECURITY REVIEWED'],
        score: 93,
        category: 'Internal',
        statusRate: 99.5,
        hasSecurityReview: true,
        hasSLA: true,
    },
    {
        id: 'api-005',
        title: 'Data Perizinan Usaha Terintegrasi',
        status: 'PUBLISHED',
        tier: 'SILVER',
        type: 'REST API',
        version: 'v2.0',
        owner: 'OSS - Kemenkopolhukam',
        verified: true,
        verifiedBy: 'KOMDIGI',
        description: 'Platform satu pintu untuk penerbitan dan pengelolaan berbagai jenis izin usaha dengan status tracking realtime.',
        tags: ['SLA AVAILABLE'],
        score: 85,
        category: 'Public',
        statusRate: 96.8,
        hasSLA: true,
    },
]
