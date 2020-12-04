import React from "react"


class SearchBar extends React.Component {
    constructor(props) {
       super(props); 
    }

    render() {
        return (
            <input type="text" id="search-bar" placeholder="book name, author, or any #tag!"></input>
        )
    }
}


export default SearchBar;
