import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../components/Beer";

function RandomBeersPage() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const randomBeer = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );

      setBeer(response.data);
    };

    randomBeer();
  }, []);

  return <Beer beer={beer} />;
}

export default RandomBeersPage;
