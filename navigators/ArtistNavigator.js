import { createStackNavigator } from "react-navigation";

import ArtistsScreen from "../screens/ArtistsScreen";
import ArtistScreen from "../screens/ArtistScreen";

export default (ArtistNavigator = createStackNavigator(
  {
    ARTISTS: {
      screen: ArtistsScreen
    },
    ARTIST: {
      screen: ArtistScreen
    }
  },
  {
    headerMode: "none"
  }
));
