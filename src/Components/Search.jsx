import React, { useState, useEffect } from "react";

const baseURL = "https://restcountries.com/v3.1/";
import Card from "./Card";
import Filter from "./Filter";
import Table from "./Table";

// Search component to perform the search result based on country capital
const Search = () => {
  const [q, setQ] = useState("");
  const [toggle, setToggle] = useState(true);
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    fetch(baseURL + "all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [toggle]);

  if (!countries) return null;

  const data = Object.values(countries);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      }
    });
  }

  if (error) {
    return <p>error</p>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <>
        <div className="search-wrapper">
          <div className="row">
            {/* Search feature */}
            <div className="col-lg-4 col-sm-12">
              <div className="search">
                <span className="fa fa-search"></span>
                <input
                  className="form-control"
                  type="search"
                  name="search-form"
                  value={q}
                  placeholder="Search for a country capital"
                  aria-label="Search"
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
            </div>

            {/* filter by region feature */}
            <div className="col-lg-2 col-sm-12 mt-3 mt-lg-0 offset-lg-4 justify-content-center">
              <Filter handle={setFilterParam} />
            </div>

            {/* Card and Table view switcher */}
            <div className="col-lg-2 col-sm-12 offset-lg-0 mt-3 mt-lg-2 justify-content-left d-flex">
              <div style={{ display: "inline-block" }}>Table</div>
              <div
                style={{
                  display: "inline-block",
                  padding: "0 0.5rem 0 0.5rem",
                }}
                className="form-check form-switch"
              >
                <input
                  style={{
                    display: "inline-block",
                    marginTop: "0rem",
                    top: "0.2rem",
                    marginLeft: "1px",
                    marginRight: "1px",
                    position: "relative",
                  }}
                  className="form-check-input"
                  type="checkbox"
                  name="toggle"
                  role="switch"
                  onChange={() => setToggle(!toggle)}
                  defaultChecked={toggle}
                />
              </div>
              <div style={{ display: "inline-block" }}>Card</div>
            </div>
          </div>
        </div>

        {/* card view */}
        {toggle ? (
          <div className="row justify-content-left d-flex">
            {search(data).map((country, i) => (
              <>
                <Card data={country} key={country.name.common + i} />
              </>
            ))}
          </div>
        ) : (
          // table view
          <div className="table-responsive">
            <table className="table" style={{ marginTop: "2rem" }}>
              <tr
                style={{
                  fontSize: "12px",
                  height: "30px",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <th scope="col" className="w-20"></th>
                <th scope="col" className="w-20">
                  Population
                </th>
                <th scope="col" className="w-20">
                  Region
                </th>
                <th scope="col" className="w-20">
                  Capital
                </th>
                <th scope="col" className="w-25">
                  Country
                </th>
                <th scope="col" className="w-20">
                  Currency
                </th>
              </tr>

              {search(data).map((country) => (
                <Table data={country} key={country.name.common} />
              ))}
            </table>
          </div>
        )}
      </>
    );
  }
};

export default Search;
