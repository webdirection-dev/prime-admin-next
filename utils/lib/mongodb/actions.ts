const baseUrl = process.env.BASE_URL

export async function updateUserAction(body: any) {
    const updated = await fetch('api/user', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    // .finally(() => console.log('finally'))

    return { ...updated }
}

export async function findOneUserAction() {
    const data = await fetch(baseUrl + '/api/user')
    // const data = await fetch(baseUrl + '/api/user', { cache: 'no-store', next: { tags: ['collection'] } })
    const user = await data.json()
    return { ...user }
}