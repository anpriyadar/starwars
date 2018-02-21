import { TabNavigator, StackNavigator } from "react-navigation";
import Login from "../src/components/screen/login";
import Search from "../src/components/screen/search";
import Details from "../src/components/screen/Details";

const navigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Search"
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Details"
    }
  }
});

export default navigator;
