export default function NavSection({ children, title }: { children: React.ReactNode, title: string }) {
    const styles = { color: 'var(--surface - 900)' }

    return (
        <li>
            <div className='text-sm font-bold uppercase my-2' style={styles}>{title}</div>
            <ul>{children}</ul>
        </li>
    )
}
