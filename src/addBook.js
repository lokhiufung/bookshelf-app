import React from "react"
import { Link, BrowserRouter } from 'react-router-dom'
import {create} from "./bookApi.js"
import "./style.css"


class AddBook extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            tags: [],
            description: "",
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    async handleAddBook() {

        const bookToAdd = {
            title: this.state.title,
            tags: this.state.tags,
            url: this.state.url,
            description: this.state.description,
        }
        const addBookResults = await create([bookToAdd]);
	}

    handleTitleChange(event) {
        this.setState({title: event.target.value.trim()})
    }

    handleUrlChange(event) {
        this.setState({url: event.target.value.trim()})
    }

    handleTagsChange(event) {
        const tags = event.target.value.trim().split(/\s+/).filter(tag => tag);
        const hashtags = tags.map(tag => (tag.charAt(0) === "#") ? tag:`#${tag}`);
        this.setState({tags: hashtags})
        console.log(this.state)
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value.trim()})
    }

    render() {
        return (
            <div className="add-book-container">
                <h1>Add a new book</h1>
                <form>
                    <span>
                        <div className="label">Title</div>
                        <div className="input">
                            <input type="text" id="title" placeholder="e.g Attention is all your need" onChange={this.handleTitleChange} required></input>
                        </div>
                    </span>
                    <span>
                        <div className="url">URL</div>
                        <div className="input">
                            <input type="url" id="url" placeholder="e.g https://arxiv.org/pdf/1706.03762.pdf" onChange={this.handleUrlChange} required></input>
                        </div>
                    </span>
                    <span>
                        <div className="tags">Tags</div>
                        <div className="input">
                            <input type="text" id="tags" placeholder="#Transformer #Attention" onChange={this.handleTagsChange} required></input>
                        </div> 
                    </span>
                    <span>
                        <div className="description">Description</div>
                        <div className="input">
                            <input type="text" id="description" placeholder="e.g This is for your attention~" onChange={this.handleDescriptionChange} required></input>
                        </div> 
                    </span>
                    <span>
                        <div className="add-button">
                            <button type="submit" onClick={this.handleAddBook}>Add</button>
                        </div>
                    </span>
                </form>
                <div className="open-search">
                    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
                    <Link to="/">back to search</Link>
                    {/* </BrowserRouter> */}
                </div>
            </div>
        )
    }
}

export default AddBook;
