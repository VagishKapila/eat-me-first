import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: 'var(--spacing-edge-desktop)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow" style={{ marginBottom: '24px' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--color-on-surface)', marginBottom: '16px' }}>
          This ritual doesn't exist.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--color-on-surface-variant)', marginBottom: '40px' }}>
          The page you're looking for has wandered off.
        </p>
        <Button variant="ivory" size="lg" asChild>
          <Link to="/collection">Return to the Collection</Link>
        </Button>
      </motion.div>
    </div>
  )
}
