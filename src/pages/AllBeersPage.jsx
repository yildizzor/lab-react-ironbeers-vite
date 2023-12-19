import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllBeersPage.css";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const beers = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      console.log(response.data[0]);
      setAllBeers(response.data);
    };

    beers();
  }, []);

  return (
    <>
      {allBeers.map((beer) => {
        return (
          <div className="beer-card" key={beer._id}>
            <img className="beer-img" src={beer.image_url}></img>
            <div className="beer-text">
              <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AllBeersPage;
