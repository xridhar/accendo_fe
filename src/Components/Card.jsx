import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
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
      key={data?.name.common}
    >
      <Link
        className="link"
        to={{
          pathname: "/detail",
          search: `?name=${data?.name.common}`,
        }}
      >
        <img
          src={data.flags?.png}
          className="card-img-top"
          width={"auto"}
          height={"150px"}
          alt={data.name}
          style={{ position: "absolute", top: "0px" }}
        ></img>
        <div>
          <div
            className="card-content"
            style={{ marginBottom: "0rem", paddingBottom: "2rem" }}
          >
            <h5 className="card-name">{data.name.common}</h5>
            <ol className="card-list">
              <li>
                Population: <span>{data.population.toLocaleString()}</span>
              </li>

              <li>
                Region: <span>{data.region}</span>
              </li>

              <li>
                Capital: <span>{data?.capital}</span>
              </li>
            </ol>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
