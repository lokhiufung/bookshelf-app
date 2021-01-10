import React from "react"
import "./style.css"


function Book(props) {
    const tags = props.tags.map((tag) => {
        return (
        <div>{tag}</div>
        )
    })
    return (
        <div className="book">
            <div className="book-title"><a className="book-url" href={props.url} target="_blank">{props.title}</a></div>
            <div className="book-tags">{tags}</div>
        </div>
    )
}


// class Book extends React.Component {
//     constructor(props) {
//        super(props);
//     }

//     render() {
//         const book = this.props
//         return (
//             <li>
//                 <div className="book">
//         <div className="book-title">{book.title}</div>
//                 </div>
//             </li>
//         )
//     }
// }


export default Book;
