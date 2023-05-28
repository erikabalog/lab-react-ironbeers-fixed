import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const style = { maxWidth: "540px" };

function AllBeers() {
  const [beers, setBeers] = useState([]);

  const setSearchBeer = (value) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <label className="form-label">Search Beer:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Search Beer"
          id="formGroupExampleInputSearchBeer"
          name="searchBeer"
          onChange={(e) => setSearchBeer(e.target.value)}
        />
      </div>
      {beers.map((beer) => (
        <div className="card mb-3" style={style} key={beer._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={beer.image_url}
                  className="card-img-left"
                  alt={beer.name}
                />
                <div className="card-body">
                  <h2 className="card-title">{beer.name}</h2>
                  {beer.tagline && <h5>{beer.tagline}</h5>}
                  <h6>Contributed by: {beer.contributed_by}</h6>
                </div>
                <Link to={`/beer/${beer._id}`}>More Details</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
