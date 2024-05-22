import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider as ReduxProvider} from "react-redux";
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from "react-native";
import OfferFeed from "./src/screens/offerFeed/OfferFeed";
import OfferDetails from "./src/screens/offerDetails/OfferDetails";
import store from "./src/store";
import {useFetchOffers} from "./src/hooks/useFetchOffers";

const MainContent = () => {
  useFetchOffers();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Offer Feed" component={OfferFeed} />
        <Stack.Screen name="OfferDetails" component={OfferDetails} options={{ title: 'Offer Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StatusBar />
      <MainContent />
    </ReduxProvider>
  );
}
