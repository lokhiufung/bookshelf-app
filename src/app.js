import React from "react"
import SearchBar from "./searchBar.js"
// import SearchResult from ".searchResult.js"


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		}
	}
	
	render() {
		return (
			<div className="App">
				<h1>Book Shelf</h1>
                <div className="search-bar">
                    <SearchBar />
                </div>
				{/* <div className="search-result">
					<SearchResult />
				</div> */}
			</div>
		)
		
	}
}

export default App;
