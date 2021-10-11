export const SearchButton = (props) => {
    return (
        <button className="search-button" onClick={(e) => props.handleSearch(e)}>🔍</button>
    )
}