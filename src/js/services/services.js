export const postData = async (url, form) => {
    const res = await fetch(url, {
        method: 'POST',
        body: form
    })
    return await res.text()
}