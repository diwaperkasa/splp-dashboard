'use client'

import { API } from '@/lib/dummy-apis'
import styles from './APICard.module.scss'

interface APICardProps {
    api: API
}

export default function APICard({ api }: APICardProps) {
    const getTierColor = (tier: string) => {
        switch (tier) {
            case 'PLATINUM':
                return '#9b59b6'
            case 'GOLD':
                return '#f39c12'
            case 'SILVER':
                return '#bdc3c7'
            case 'BRONZE':
                return '#cd7f32'
            default:
                return '#95a5a6'
        }
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Personal Data':
                return '🔒'
            case 'Public':
                return '🌐'
            case 'Internal':
                return '🏢'
            default:
                return '📋'
        }
    }

    return (
        <div className={styles.card}>
            {/* Header with Badges */}
            <div className={styles.header}>
                <div className={styles.badges}>
                    <span className={`${styles.badge} ${styles.statusBadge}`}>
                        {api.status}
                    </span>
                    <span
                        className={`${styles.badge} ${styles.tierBadge}`}
                        style={{ backgroundColor: getTierColor(api.tier) }}
                    >
                        {api.tier}
                    </span>
                    <span className={`${styles.badge} ${styles.typeBadge}`}>
                        {api.type}
                    </span>
                </div>
                <div className={styles.version}>{api.version}</div>
            </div>

            {/* Title */}
            <h3 className={styles.title}>{api.title}</h3>

            {/* Owner */}
            <div className={styles.owner}>
                <span className={styles.ownerIcon}>👤</span>
                {api.owner}
            </div>

            {/* Verification */}
            {api.verified && (
                <div className={styles.verification}>
                    <span className={styles.checkmark}>✓</span>
                    VERIFIED BY {api.verifiedBy}
                </div>
            )}

            {/* Tags */}
            <div className={styles.tags}>
                {api.hasSecurityReview && (
                    <span className={styles.tag}>SECURITY REVIEWED</span>
                )}
                {api.hasSLA && <span className={styles.tag}>SLA AVAILABLE</span>}
                {api.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Score */}
            <div className={styles.score}>SCORE: {api.score}/100</div>

            {/* Description */}
            <p className={styles.description}>{api.description}</p>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.category}>
                    <span className={styles.icon}>{getCategoryIcon(api.category)}</span>
                    Cat: {api.category}
                </div>
                <div className={styles.statusRate}>
                    <span className={styles.icon}>📊</span>
                    SR: {api.statusRate}%
                </div>
                <button className={styles.viewButton}>View Detail</button>
            </div>
        </div>
    )
}
