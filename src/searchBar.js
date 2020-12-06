import React from "react";
// import InputBase from "@material-ui/core/InputBase";



class SearchBar extends React.Component {
    constructor(props) {
       super(props); 
    }

    render() {
        return (
            <input type="text" id="search-bar" placeholder="book name, author, or any #tag!"></input>
            // <InputBase />
        )
    }
}


export default SearchBar;
