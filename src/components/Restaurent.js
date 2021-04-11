import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Restaurent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    marginTop: 5,
  },
  container: {
    marginLeft: 15,
  },
});
export default Restaurent;
