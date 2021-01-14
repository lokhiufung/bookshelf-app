// import dotenv from 'dotenv'

// const bookUrl = "http://localhost:8000";
const bookUrl = process.env.REACT_APP_BOOK_URL;

let token = localStorage.token
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const search = (bookFilter) =>
    fetch(`${bookUrl}/book`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookFilter)
    }).then(res => res.json()).then(data => data.books)

    
export const create = (bookList) =>
    fetch(`${bookUrl}/book/bulk`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookList)
    }).then(res => res.json())


export const update = (bookFilter, book) =>
    fetch(`${bookUrl}/book`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookFilter, book})
    }).then(res => res.json())


export const remove = (bookFilter) => 
    fetch(`${bookUrl}/book`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookFilter})
    }).then(res => res.json())