import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import Restaurent from "./Restaurent";

const RestaurentList = ({ title, restaurents, navigation }) => {
  if (!restaurents.length) return null;
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        data={restaurents}
        keyExtractor={(restaurent) => restaurent.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Restaurent", { id: item.id })}
            >
              <Restaurent item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default withNavigation(RestaurentList);
