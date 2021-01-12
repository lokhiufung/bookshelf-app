
function AddBook(props) {
    const {submitAddBook} = props;
    return (
        <form onSubmit={submitAddBook}>
            <label>title</label>
            <input type="text">
            </input>
            <br />
            <label>authur</label>
            <input type="text">
            </input>
            <br />
            <input type="text">
            </input>
            <button type="submit">add</button>
        </form>
    )
}

export default AddBook;
