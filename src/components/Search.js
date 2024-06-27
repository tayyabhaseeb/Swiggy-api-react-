function Search({ inputValue, setInputValue, setFilteredData, filterArr }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={filterArr}>Search</button>
    </div>
  );
}

export default Search;
