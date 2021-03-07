import React, { useState } from "react";
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import {create} from "./bookApi.js"
import "./style.css"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
  }));

export default function AddBook() {
    const classes = useStyles();
    const [state, setState] = useState({
        title: "",
        url: "",
        tags: [],
        description: ""
    });
    const handleInputChange = (event) => {
        event.preventDefault();
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const tags = state.tags.trim().split(/\s+/).filter(tag => tag);
        const hashtags = tags.map(tag => (tag.charAt(0) === "#") ? tag:`#${tag}`);

        const bookToAdd = {
            title: state.title.trim(),
            tags: hashtags,
            url: state.url.trim(),
            description: state.description.trim(),
        };
        // const addBookResults = create([bookToAdd]);
        console.log(bookToAdd);
        setState({
            title: "",
            url: "",
            tags: [],
            description: ""
        })
    }

    return (
        <div className="add-book-container">
            <h1>Add a book</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                    <div>
                        <TextField className={classes.textField} label="Title" type="text" name="title" placeholder="e.g Attention is all your need" onChange={handleInputChange} value={state.title}/>
                    </div>
                    <div>
                        <TextField className={classes.textField} label="Url" type="url" name="url" placeholder="e.g https://arxiv.org/pdf/1706.03762.pdf" onChange={handleInputChange} value={state.url}/>
                    </div>
                    <div>
                        <TextField className={classes.textField} label="Tags" type="text" name="tags" placeholder="#Attention" onChange={handleInputChange} value={state.tags}/>
                    </div>
                    <div>
                        <TextField className={classes.textField} label="Description" type="text" name="description" multiline onChange={handleInputChange} value={state.description}/>
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit">Add</Button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}
