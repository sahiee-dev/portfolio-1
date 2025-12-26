/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { AnimatedGradient } from "./AnimatedGradient"

/**
 * BentoCard - Animated gradient card for analytics display
 */
export function BentoCard({ title, value, subtitle, colors, delay = 0 }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay + 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.div
            style={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                minHeight: '180px',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            <AnimatedGradient colors={colors} speed={0.02} blur="medium" />
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h3
                    style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                    variants={item}
                >
                    {title}
                </motion.h3>
                <motion.p
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        fontFamily: 'Outfit, sans-serif',
                        lineHeight: 1
                    }}
                    variants={item}
                >
                    {value}
                </motion.p>
                {subtitle && (
                    <motion.p
                        style={{
                            fontSize: '0.875rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            lineHeight: 1.4
                        }}
                        variants={item}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    )
}

/**
 * AnalyticsDashboard - Portfolio metrics bento grid
 */
export function AnalyticsDashboard() {
    return (
        <div style={{ width: '100%' }}>
            <div className="analytics-grid">
                {/* Row 1: 2 cols + 1 col */}
                <div className="analytics-card-wide">
                    <BentoCard
                        title="Total Projects Delivered"
                        value="23+"
                        subtitle="GitHub repos, internships & hackathon projects"
                        colors={["#06b6d4", "#0891b2", "#0e7490"]}
                        delay={0.2}
                    />
                </div>

                <div className="analytics-card">
                    <BentoCard
                        title="Monthly Visitors"
                        value="1.2K"
                        subtitle="Portfolio page views"
                        colors={["#0891b2", "#14b8a6", "#06b6d4"]}
                        delay={0.4}
                    />
                </div>

                {/* Row 2: 1 col + 2 cols */}
                <div className="analytics-card">
                    <BentoCard
                        title="Interaction Rate"
                        value="12.4%"
                        subtitle="Resume & profile clicks"
                        colors={["#f97316", "#fb923c", "#fbbf24"]}
                        delay={0.6}
                    />
                </div>

                <div className="analytics-card-wide">
                    <BentoCard
                        title="Active GitHub Repos"
                        value="22"
                        subtitle="Currently maintained projects"
                        colors={["#06b6d4", "#8b5cf6", "#f97316"]}
                        delay={0.8}
                    />
                </div>

                {/* Row 3: Full width */}
                <div className="analytics-card-full">
                    <BentoCard
                        title="Endorsements & Recognition"
                        value="4.67/5"
                        subtitle="Based on LinkedIn endorsements, GitHub stars, and teammate feedback from hackathons"
                        colors={["#ec4899", "#f472b6", "#06b6d4"]}
                        delay={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsDashboard
