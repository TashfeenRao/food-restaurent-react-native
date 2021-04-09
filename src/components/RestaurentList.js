import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const RestaurentList = ({ title, restaurents }) => {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        horizontal
        data={restaurents}
        keyExtractor={(restaurent) => restaurent.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default RestaurentList;
