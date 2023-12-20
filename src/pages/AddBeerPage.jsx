import "../pages/AddBeerPage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setbrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributed, setContributed] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributed,
      };
      const { data } = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );

      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="add-beer-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>

        <label htmlFor="tagline">Tagline</label>
        <input
          id="tagline"
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <br></br>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          type="text"
          name="description"
          rows="5"
          cols= "300"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br></br>

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          id="first_brewed"
          type="text"
          name="first_brewed"
          value={firstBrewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />
        <br></br>

        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <input
          id="brewers_tips"
          type="text"
          name="brewers_tips"
          value={brewersTips}
          onChange={(event) => setbrewersTips(event.target.value)}
        />
        <br></br>

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          id="attenuation_level"
          type="number"
          name="attenuation_level"
          value={attenuationLevel}
          onChange={(event) => setAttenuationLevel(event.target.value)}
        />
        <br></br>

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          id="contributed_by"
          type="text"
          name="contributed_by"
          value={contributed}
          onChange={(event) => setContributed(event.target.value)}
        />
        <br></br>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
