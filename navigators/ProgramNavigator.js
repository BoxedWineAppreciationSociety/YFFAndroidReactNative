import { createStackNavigator } from "react-navigation";

import ProgramScreen from "../screens/ProgramScreen";
import ArtistScreen from "../screens/ArtistScreen";

export default (ProgramNavigator = createStackNavigator(
  {
    PROGRAM: {
      screen: ProgramScreen
    },
    ARTIST: {
      screen: ArtistScreen
    }
  },
  {
    headerMode: "none"
  }
));
