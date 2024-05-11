const Filter = ({ handle }) => {
  return (
    <div>
      <div className="select">
        <select
          onChange={(e) => {
            handle(e.target.value);
          }}
          className="form-select"
          aria-label="Filter Countries By Region"
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default Filter;
