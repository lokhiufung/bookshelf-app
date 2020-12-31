import React from "react"

import Book from "./book.js"


function Bookshelf (props) {
    console.log(props);
    const books = props.books.map((book) => {
            return (
                <li>
                    <Book title={book.title} url={book.url} tags={book.tags}/>
                </li>
            )
        })
    
    return (
        <div className="bookshelf">
        <ol>
            {books}
        </ol>                
        </div>
    )
}


export default Bookshelf;
