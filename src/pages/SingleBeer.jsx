import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const style= { maxWidth: "540px" };

function SingleBeer() {
  const [beer, setBeer] = useState({}); //initial state is an empty object, we use the setBeers to update the state
  const {beerId} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ////fetch the data from API when component mounts or beerId change
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/beer/:id`) // API/:id request
      .then(({ data }) => {
        console.log(data.data);
        setBeer(data); //update beer state
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [beerId]);

  return (
    <div>
      <h1>Single Beer</h1>
    
      {loading && (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && (
        <div className="card" style={style}>
          <img src={beer.image_url} className="card-img-top" alt=" " />
          <div className="card-body">
            <h5 className="card-title">
              {beer.name} {beer.attenuation_level}
            </h5>
            <p className="card-text">
              {beer.tagline} {beer.first_brewed}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{beer.description}</li>
            <li className="list-group-item">{beer.contributed_by}</li>
            <li className="list-group-item">
              <Link to={"/"} className="card-link">
                Home
              </Link>
            </li>
          </ul>
          <div className="card-body"></div>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
