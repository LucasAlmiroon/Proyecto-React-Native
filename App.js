import { StyleSheet, StatusBar } from "react-native"
import { store } from './app/store'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import MainNavigation from "./navigation/MainNavigation"


const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/JosefinSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 70
  }

});

export default App