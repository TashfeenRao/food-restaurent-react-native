import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurentScreen from "./src/screens/RestaurentScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurent: RestaurentScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Bussines Search",
    },
  }
);

export default createAppContainer(navigator);
