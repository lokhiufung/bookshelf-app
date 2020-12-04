import React from "react"
import SearchBar from "./searchBar.js"


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<h1>Book Shelf</h1>
                <div className="search-bar">
                    <SearchBar />
                </div>
			</div>
		)
		
	}
}

export default App;
