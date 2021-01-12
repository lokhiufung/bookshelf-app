// import React from "react";
import './style.css'
// import InputBase from "@material-ui/core/InputBase";



function SearchBar(props) {

    const {submitQuery, query} = props;
    
    return (
        <input type="text" id="search-bar" placeholder="book name, author, or any #tag!" onChange={(event)=>submitQuery(event.target.value)} value={query}></input>
    )

}


export default SearchBar;
