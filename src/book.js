import React from "react"


class Book extends React.Component {
    constructor(props) {
       super(props);
    }

    render() {
        const book = this.props
        return (
            <li>
                <div className="book">
        <div className="book-title">{book.title}</div>
                </div>
            </li>
        )
    }
}


export default book;
