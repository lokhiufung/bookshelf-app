import { Link } from 'react-router-dom'
import "./style.css"


function AddBook(props) {
    const {submitAddBook} = props;
    return (
        <div className="add-book-container">
            <h1>Add a new book</h1>
            <form onSubmit={submitAddBook}>
                <span>
                    <div className="label">Title</div>
                    <div className="input">
                        <input type="text" id="title" placeholder="e.g Attention is all your need" required></input>
                    </div>
                </span>
                <span>
                    <div className="url">URL</div>
                    <div className="input">
                        <input type="url" id="url" placeholder="e.g https://arxiv.org/pdf/1706.03762.pdf" required></input>
                    </div>
                </span>
                <span>
                    <div className="tags">Tags</div>
                    <div className="input">
                        <input type="text" id="tags" placeholder="#Transformer #Attention" required></input>
                    </div> 
                </span>
                <span>
                    <div className="add-button">
                        <button type="submit">Add</button>
                    </div>
                </span>
            </form>
            <div className="open-search">
                <Link to="/">back to search</Link>
            </div>
        </div>
    )
}

export default AddBook;
