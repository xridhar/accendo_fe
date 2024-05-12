import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <tr
        key={data.name.common}
        onClick={() => navigate(`detail?name=${data?.name.common}`)}
        style={{
          height: "3rem",
          borderBottom: "1px solid #ccc",
          fontSize: "12px",
        }}
      >
        <td>
          <img
            src={data.flags?.png}
            style={{ borderRadius: "5px", padding: "0px" }}
            width={"40px"}
            height={"25px"}
            alt={data.name}
          ></img>
        </td>
        <td>{data.population.toLocaleString()}</td>
        <td>{data.region}</td>
        <td>{data.capital}</td>
        <td>{data.name.common}</td>
        <td>
          {Object.keys(data?.currencies || {}).map((keys, val) => {
            return (
              <>
                <span className="badge badge-secondary fw-bolder">
                  {data?.currencies[keys].symbol + keys}
                </span>
                <span
                  className="fw-light"
                  style={{
                    backgroundColor: "transparent",
                    paddingRight: "0px",
                  }}
                >
                  &nbsp;
                </span>
              </>
            );
          })}
        </td>
      </tr>
    </>
  );
};

export default Table;
