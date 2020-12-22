import React from "react"


function Book(props) {
    const tags = props.tags.map((step, tag) => {
        <li>{tag}</li>
    })
    return (
        <li>
            <div className="book">
                <div className="book-title" href={props.url}>{props.title}</div>
                <dic className="book-tags">{tags}</dic>
            </div>
        </li>
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
