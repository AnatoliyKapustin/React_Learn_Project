
export function apiLogin(email, password) {
    console.log('login action')
    return getUsers().filter(user => user.email === email && user.password === password)[0].uuid;
}

export function getUsers() {
    return [
        {
            uuid: '845c5208-0da7-4b79-b466-c684d9a17d2d',
            name: 'Anatoliy',
            email: 'a.kapustin@infostroy.com.ua',
            password: '12345'
        }
    ]
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}