import React from "react"
import SearchBar from "./searchBar.js"
import Bookshelf from "./bookshelf.js"


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
		}
	}

	handleSearch() {
		
	}

	render() {
		return (
			<div className="App">
				<h1>Book Shelf</h1>
                <div className="search-bar">
                    <SearchBar onChange={() => handleSearch()}/>
                </div>
				<div className="search-results">
					<Bookshelf books={this.searchResults}/>
				</div>
			</div>
		)
		
	}
}

export default App;
