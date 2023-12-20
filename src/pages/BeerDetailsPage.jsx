import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../components/Beer";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const oneBeer = async () => {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      console.log(response.data);

      setBeer(response.data);
    };
    oneBeer();
  }, [beerId]);

  return (
   <Beer beer={beer}/>
  );
}

export default BeerDetailsPage;
