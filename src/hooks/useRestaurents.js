import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurents, setRestaurents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSearch = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "california",
        },
      });
      setRestaurents(response.data.businesses);
    } catch (error) {
      setErrorMessage("Sorry! We could not find your restaurent");
    }
  };

  useEffect(() => {
    onSearch("pizza");
  }, []);
  return [restaurents, errorMessage, onSearch];
};
