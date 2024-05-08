const Search = () => {
  return (
    <>
      <form role="search">
        <div className="search">
          <span className="fa fa-search"></span>
          <input
            className="form-control"
            type="search"
            placeholder="Search for a country"
            aria-label="Search"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
