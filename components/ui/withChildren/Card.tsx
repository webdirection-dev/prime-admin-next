export default function Card({ children }: { children: React.ReactNode }) {
    const classes = {
        background: 'var(--surface-card)',
        border: '1px solid var(--surface-border)',
        boxShadow: 'var(--card-shadow)',
    }

    return (
        <div className='p-5 mb-5 border-round-2xl' style={classes}>
            {children}
        </div>
    )
}