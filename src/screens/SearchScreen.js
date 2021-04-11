import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import RestaurentList from "../components/RestaurentList";
import useRestaurents from "../hooks/useRestaurents";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurents, errorMessage, onSearch] = useRestaurents();

  const filterRestaurents = (price) => {
    return restaurents.filter((restaurent) => restaurent.price === price);
  };

  return (
    <>
      <SearchBar onTermChange={setTerm} onTermSubmit={() => onSearch(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurentList
          restaurents={filterRestaurents("$")}
          title="Cost Effective"
        />
        <RestaurentList
          restaurents={filterRestaurents("$$")}
          title="Bit Pricer"
        />
        <RestaurentList
          restaurents={filterRestaurents("$$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
