import Filter from "../Components/Filter";
import Search from "../Components/Search";
import Card from "../Components/Card";

const ListPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Search />
        </div>

        <div className="col-2 offset-5">
          <Filter />
        </div>
        <div className="col-1 offset-0">
          <div>Table Card</div>
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default ListPage;
