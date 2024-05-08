import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState({});
  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(res.data);
  };

  useEffect(() => {
    fetchCountries()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const renderedCountries = Object.values(countries).map((country) => {
    return (
      <div
        className="card col-3"
        style={{
          width: "18rem",
          margin: "1rem",
          padding: "0px",
          boxShadow: "0px 0px 15px 10px #ccc",
          display: "flex",
          height: "22rem",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        key={country.name.common}
      >
        <img
          src={country.flags?.png}
          className="card-img-top"
          width={"auto"}
          height={"200px"}
          alt={country.name}
          style={{ position: "absolute", top: "0px" }}
        ></img>
        <div>
          <div className="card-content" style={{ marginBottom: "0rem" }}>
            <h5 className="card-name">{country.name.common}</h5>
            <ol className="card-list">
              <li>
                Population: <span>{country.population.toLocaleString()}</span>
              </li>

              <li>
                Region: <span>{country.region}</span>
              </li>

              <li>
                Capital: <span>{country?.capital}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{renderedCountries}</div>;
};

export default Card;
