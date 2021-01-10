import React from "react"
// import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom'

import SearchBar from "./searchBar.js"
import Bookshelf from "./bookshelf.js"
import {search, create, update, remove} from "./bookApi.js"

import "./style.css"


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
			<div className="app">
				<h1>Book Shelf</h1>
				<Route exact path="/" render={()=>(
					// <SearchBar query={searchValue} ={this.handleSearch}/>
					<Bookshelf query={searhcValue} submitQuery={this.handleSearch} books={books}/>
				)}/>
			</div>
		)
		
	}
}

export default App;
