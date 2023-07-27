'use client'

export default function HeaderButton({ name }: any) {
    const icon =
        name === 'calendar' && 'pi-calendar' ||
        name === 'user' && 'pi-user' ||
        name === 'cog' && 'pi-cog'

    return (
        <button
            type="button"
            className={"btn-header rounded-full ml-4"}
        >
            {''}<i className={"pi " + icon} style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}