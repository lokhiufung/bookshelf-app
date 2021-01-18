import React from "react"
// import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom'

// import SearchBar from "./searchBar.js"
import Bookshelf from "./bookshelf.js"
import AddBook from "./addBook.js"
import {search} from "./bookApi.js"

import "./style.css"


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		// this.handleAddBook = this.handleAddBook.bind(this);
		this.state = {
			books: [],
			searchValue: ""
		}
	}
	
	async handleSearch(event) {

		const searchValue = event.target.value;
		this.setState({searchValue: searchValue});
		// temp: tags search only
		let bookFilter = {
			tags: [],
		}
		if (this.state.searchValue.includes("#")) {
			const tags = this.state.searchValue.split(/\s+/).filter(tag => tag);
			const hashtags = tags.map(tag => (tag.charAt(0) === "#") ? tag:`#${tag}`);
			bookFilter.tags = hashtags;
		}
		console.log(bookFilter);
		
		const searchResults = await search(bookFilter);
		// console.log(searchResults);
		this.setState((state) => ({books: searchResults}));
	}

	// async handleAddBook(event) {
	// 	const bookToAdd = event.target.value;

	// 	console.log(bookToAdd);
	// 	// const addBookResults = await create(bookToAdd);
	// }

	render() {
		// console.log(this.state);
		const {books, searchValue} = this.state;

		return (
			<div className="app">
				{/* <h1>Book Shelf</h1> */}
				{/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
				<Switch>
					<Route exact path="/" render={({history})=>(
						// <SearchBar query={searchValue} ={this.handleSearch}/>
						<Bookshelf query={searchValue} submitQuery={this.handleSearch} books={books}/>
					)}/>
					<Route exact path="/addBook" render={({history})=>(
						// <SearchBar query={searchValue} ={this.handleSearch}/>
						<AddBook />
					)}/>
				</Switch>
				{/* </BrowserRouter> */}
			</div>
		)
		
	}
}

export default App;
