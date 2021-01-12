// import dotenv from 'dotenv'

const URL = "http://localhost:8000";

let token = localStorage.token
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const search = (bookFilter) =>
    fetch(`${URL}/book`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookFilter)
    }).then(res => res.json()).then(data => data.books)

    
export const create = (bookList) =>
    fetch(`${URL}/book/bulk`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookList)
    }).then(res => res.json())


export const update = (bookFilter, book) =>
    fetch(`${URL}/book`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookFilter, book})
    }).then(res => res.json())


export const remove = (bookFilter) => 
    fetch(`${URL}/book`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookFilter})
    }).then(res => res.json())