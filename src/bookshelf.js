import React from "react"
import { Link } from 'react-router-dom'
import Book from "./book.js"
import "./style.css"


function Bookshelf(props) {

    const {query, submitQuery, books} = props;
    const bookGrids = books.map((book) => {
        return (
            <div className="bookshelf">
                <li>
                    <Book title={book.title} url={book.url} tags={book.tags}/>
                </li>
            </div>
        )
    })

    return (
        <div className="bookshelf">
            <h1>Bookshelf</h1>
            <div className="search-bar-container">
                <input type="text" id="search-bar" placeholder="book name, author, or any #tag! (Temp: #tag search only !)" onChange={(event)=>submitQuery(event)} value={query}></input>
                {/* <SearchBar submitQuery={submitQuery} query={query}/> */}
            </div>

            <div className="search-results">
                <ol>
                    {bookGrids}
                </ol>
            </div>
            <div className="open-add-book">
                <Link to="/addBook"><button>Add a book</button></Link>
            </div>
        </div>
    )
}


export default Bookshelf;
