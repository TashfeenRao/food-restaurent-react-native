import React, { useState, useEffect } from "react";
import { Text, FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const RestaurentScreen = ({ navigation }) => {
  const [restaurent, setRestaurent] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    getRestaurent(id);
  }, []);

  const getRestaurent = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurent(response.data);
  };

  if (!restaurent) return null;
  return (
    <>
      <Text>{restaurent.name}</Text>
      <FlatList
        data={restaurent.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurentScreen;
