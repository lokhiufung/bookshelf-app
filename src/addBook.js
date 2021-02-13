import React from "react"
import { Link } from 'react-router-dom'
import {create} from "./bookApi.js"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import "./style.css"


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '25ch',
//     },
//   }));


class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            tags: [],
            description: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    // multiple inputs: https://zh-hant.reactjs.org/docs/forms.html
    handleInputChange(event) {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        // const classes = useStyles();
        const {title, url, tags, descriptions} = this.state;

        return (
            <div className="add-book-container">
                <h1>Add a book</h1>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                        <div>
                            <TextField label="Title" type="text" name="title" placeholder="e.g Attention is all your need" onChange={this.handleInputChange} value={title}/>
                        </div>
                        <div>
                            <TextField label="Url" type="url" name="url" placeholder="e.g https://arxiv.org/pdf/1706.03762.pdf" onChange={this.handleInputChange} value={url}/>
                        </div>
                        <div>
                            <TextField label="Tags" type="text" name="tags" placeholder="#Attention" onChange={this.handleInputChange} value={tags}/>
                        </div>
                        <div>
                            <TextField label="Descriptions" type="text" name="descriptions" multiline onChange={this.handleInputChange} value={descriptions}/>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" type="submit">Add</Button>
                        </div>
                    </Grid>
                </form>
            </div>
        )
    }
}


// class AddBook extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             url: "",
//             tags: [],
//             description: "",
//         }
//         this.handleChange = this.handleChange.bind(this);
//         // this.handleTitleChange = this.handleTitleChange.bind(this);
//         // this.handleUrlChange = this.handleUrlChange.bind(this);
//         // this.handleTagsChange = this.handleTagsChange.bind(this);
//         // this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
//         this.handleAddBook = this.handleAddBook.bind(this);
//     }

//     async handleAddBook(event) {
//         event.preventDefault();
        
//         const tags = this.state.tags.trim().split(/\s+/).filter(tag => tag);
//         const hashtags = tags.map(tag => (tag.charAt(0) === "#") ? tag:`#${tag}`);

//         const bookToAdd = {
//             title: this.state.title.trim(),
//             tags: hashtags,
//             url: this.state.url.trim(),
//             description: this.state.description.trim(),
//         }
//         const addBookResults = await create([bookToAdd]);
        
//         // reset states
//         this.setState({
//             title: "",
//             url: "",
//             tags: "",
//             description: "",
//         })
        
// 	}

//     handleChange(event) {
//         let name = event.target.name;
//         let value = event.target.value;
//         this.setState({[name]: value});
//     }
//     // handleTitleChange(event) {
//     //     this.setState({title: event.target.value.trim()})
//     // }

//     // handleUrlChange(event) {
//     //     this.setState({url: event.target.value.trim()})
//     // }

//     // handleTagsChange(event) {
//     //     const tags = event.target.value.trim().split(/\s+/).filter(tag => tag);
//     //     const hashtags = tags.map(tag => (tag.charAt(0) === "#") ? tag:`#${tag}`);
//     //     this.setState({tags: hashtags})
//     //     console.log(this.state)
//     // }

//     // handleDescriptionChange(event) {
//     //     this.setState({description: event.target.value.trim()})
//     // }

//     render() {
//         return (
//             <div className="add-book-container">
//                 <h1>Add a new book</h1>
//                 <form onSubmit={this.handleAddBook}>
//                 {/* <div className="form"> */}
//                     <span>
//                         <div className="label">Title</div>
//                         <div className="input">
//                             <input name="title" type="text" id="title" placeholder="e.g Attention is all your need" onChange={this.handleChange}  value={this.state.title} required></input>
//                         </div>
//                     </span>
//                     <span>
//                         <div className="url">URL</div>
//                         <div className="input">
//                             <input name="url" type="url" id="url" placeholder="e.g https://arxiv.org/pdf/1706.03762.pdf" onChange={this.handleChange} value={this.state.url} required></input>
//                         </div>
//                     </span>
//                     <span>
//                         <div className="tags">Tags</div>
//                         <div className="input">
//                             <input name="tags" type="text" id="tags" placeholder="#Transformer #Attention" onChange={this.handleChange} value={this.state.tags} required></input>
//                         </div> 
//                     </span>
//                     <span>
//                         <div className="description">Description</div>
//                         <div className="input">
//                             <input name="description" type="text" id="description" placeholder="e.g This is for your attention~" onChange={this.handleChange} value={this.state.description} required></input>
//                         </div> 
//                     </span>
//                     <span>
//                         <div className="add-button">
//                             <button type="submit">Add</button>
//                         </div>
//                     </span>
//                 {/* </div> */}
//                 </form>
//                 <div className="open-search">
//                     {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
//                     <Link to="/">back to search</Link>
//                     {/* </BrowserRouter> */}
//                 </div>
//             </div>
//         )
//     }
// }

export default AddBook;
