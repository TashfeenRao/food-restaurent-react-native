import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        onTermChange={(termItem) => setTerm(termItem)}
        onTermSubmit={() => console.log("search completed")}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
