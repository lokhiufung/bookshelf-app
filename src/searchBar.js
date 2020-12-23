import React from "react";
// import InputBase from "@material-ui/core/InputBase";



function SearchBar(props) {
    return (
        <input type="text" id="search-bar" placeholder="book name, author, or any #tag!" onChange={() => props.onChange()}></input>
    )

}


export default SearchBar;
