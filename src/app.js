import React from "react"
import SearchBar from "./searchBar.js"
import Bookshelf from "./bookshelf.js"
import {search, create, update, remove} from "./bookApi.js"

// class SearchBooks extends React.Component {
// 	constructor(props) {}

// 	render() {
// 		return (
// 			<input type="text" id="search-bar" placeholder="book name, author, or any #tag!" onChange={() => props.onChange()}></input>
// 		)
// 	}
// }


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this)
		this.state = {
			books: [],
			searchValue: ""
		}
	}
	
	async handleSearch(event) {
		const searchValue = event.target.value;
		this.setState({searchValue: searchValue})

		const bookFilter = {
			title: this.state.searchValue
		}
		const searchResults = await search(bookFilter);
		// console.log(searchResults);
		this.setState((state) => ({books: searchResults}));
	}

	render() {
		const {books, searchValue} = this.state;
		return (
			<div className="App">
				<h1>Book Shelf</h1>
				{/* <SearchBooks /> */}
                <div className="search-bar">
                    <SearchBar value={searchValue} onChange={this.handleSearch}/>
                </div>
				<div className="search-results">
					<Bookshelf books={books}/>
				</div>
			</div>
		)
		
	}
}

export default App;
