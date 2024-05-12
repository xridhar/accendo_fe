import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CountryDetail.css";

const baseURL = "https://restcountries.com/v3.1/";

const CountryDetail = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    fetch(`${baseURL}name/${searchParams.get("name")}?fullText=true`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="container">error</div>;
  } else if (!isLoaded) {
    return <div className="container">loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="row" style={{ paddingBottom: "1rem" }}>
          <Link
            style={{ width: "7rem" }}
            to={{
              pathname: "/",
            }}
          >
            <button className="btn btn-outline-dark">
              <span className="fa fa-arrow-left"></span>&nbsp; Back
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <img
              src={countries?.flags?.png}
              className="card-img-top"
              width={"auto"}
              height={"250px"}
              alt={countries?.name}
              style={{ top: "0px" }}
            ></img>
          </div>
          <div className="col-lg-8 col-sm-12">
            <h2>{countries?.name?.common}</h2>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <ul>
                  <li>
                    Native Name:
                    <span>{countries?.name?.nativeName?.eng?.official}</span>
                  </li>
                  <li>
                    Population:
                    <span>{countries?.population?.toLocaleString()}</span>
                  </li>
                  <li>
                    Region:
                    <span>{countries?.region}</span>
                  </li>
                  <li>
                    Sub Region:
                    <span>{countries?.subregion}</span>
                  </li>
                  <li>
                    Capital:
                    <span>{countries?.capital}</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-12">
                <ul>
                  <li>
                    Top Level Domain: <span>{countries?.tld}</span>
                  </li>
                  <li>
                    Currencies:
                    <span>
                      {Object.keys(countries?.currencies || {}).map((keys) => {
                        return countries?.currencies[keys].symbol + keys + " ";
                      })}
                    </span>
                  </li>
                  <li>
                    Languages:
                    <span>
                      {Object.keys(countries?.languages || {}).map(
                        (keys, index) => {
                          return (
                            (index ? ", " : "") + countries?.languages[keys]
                          );
                        }
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <ul>
                <li>
                  Border Countries:
                  {Object.keys(countries?.borders || {}).map((keys, index) => {
                    return (
                      <span
                        key={countries.name.common + index}
                        className="badge fw-normal country_list"
                      >
                        {(index ? " " : " ") + countries?.borders[keys]}
                      </span>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CountryDetail;
