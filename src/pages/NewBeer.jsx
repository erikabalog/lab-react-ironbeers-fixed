import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); //handle form

    const NewBeerBody = {
      //createing newBeer object
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    //sending newBeer to the API
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, NewBeerBody) //passing all data on the body object
      .then(({ data }) => {
        //return <Navigate to="/beers"/>
        console.log("add newBeer"); 
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>New Beer</h1>
      <form className="d-flex" role="search" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInputName" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Beer name"
            id="formGroupExampleInputName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInputTagline" className="form-label">
            Tagline
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Beer tagline"
            id="formGroupExampleInputTagline"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInputDescription"
            className="form-label"
          >
            Description
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Beer description"
            id="formGroupExampleInputDescription"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInputFirstBrewed"
            className="form-label"
          >
            First Brewed
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="First brewed date"
            id="formGroupExampleInputFirstBrewed"
            name="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInputBrewersTips"
            className="form-label"
          >
            Brewers Tips
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Brewers tips"
            id="formGroupExampleInputBrewersTips"
            name="brewers_tips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInputAttenuationLevel"
            className="form-label"
          >
            Attenuation Level
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Attenuation level"
            id="formGroupExampleInputAttenuationLevel"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInputAttenuationLevel"
            className="form-label"
          >
            Contributed By
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Contributed By"
            id="formGroupExampleInputAttenuationLevel"
            name="contributed_by"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add NewBeer</button>
      </form>
    </div>
  );
}

export default NewBeer;
