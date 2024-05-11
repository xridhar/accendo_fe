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

  return (
    <div className="container">
      <div className="row" style={{ paddingBottom: "1rem" }}>
        <Link
          className="link"
          to={{
            pathname: "/",
          }}
        >
          <button className="btn btn-primary">
            <span className="fa fa-arrow-left"></span>&nbsp; Back
          </button>
        </Link>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            src={countries?.flags?.png}
            className="card-img-top"
            width={"auto"}
            height={"200px"}
            alt={countries?.name}
            style={{ top: "0px" }}
          ></img>
        </div>
        <div className="col-9">
          <h2>{countries?.name?.common}</h2>
          <div className="row">
            <div className="col-6">
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

            <div className="col-6">
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
                    {Object.keys(countries?.languages || {}).map((keys) => {
                      return countries?.languages[keys] + " ";
                    })}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>Border Countries: {countries?.borders}</li>
              {/* <li>
                {countries?.borders((num, i) => {
                  num[i];
                })}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  //   }
};

export default CountryDetail;
