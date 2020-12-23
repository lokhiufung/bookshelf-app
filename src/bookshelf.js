import React from "react"

import Book from "./book.js"


class Bookshelf extends React.Component {
    constructor(props) {
       super(props);
       this.books = props.books
    }

    render() {
        const books = this.books.map((step, book) => {
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
}


export default Bookshelf;
