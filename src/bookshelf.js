import React from "react"

import SearchBar from "./searchBar.js"
import Book from "./book.js"


// function Bookshelf (props) {
//     console.log(props);
//     const books = props.books.map((book) => {
//             return (
// 				<div className="bookshelf">
//                     <li>
//                         <Book title={book.title} url={book.url} tags={book.tags}/>
//                     </li>
// 				</div>
//             )
//         })
    
//     return (
//         // <div className="bookshelf">
//         <ol>
//             {books}
//         </ol>                
//         // </div>
//     )
// }

class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.states = {
            query: "",
            books: []
        }
        this.updatedQuery = this.updatedQuery.bind(this)    
        
    }
    
    updatedQuery(query) {
        this.setState({query: query.trim()});
    }

    render() {
        const {submitQuery, books} = this.props
        const {query} = this.state

        const books = props.books.map((book) => {
                        return (
                            <div className="bookshelf">
                                <li>
                                    <Book title={book.title} url={book.url} tags={book.tags}/>
                                </li>
                            </div>
                        )
                    })
                
        return (
            <div className="search-bar-container">
                <SearchBar submitQuery={submitQuery} query={query}/>
            </div>
            // <div className="search-results">
            //     <ol>
            //         {books}
            //     </ol>
            // </div>
        )
    }
}

export default Bookshelf;
