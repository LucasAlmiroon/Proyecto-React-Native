import { StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import TabNavigator from "./navigation/TabNavigator"
import { store } from './app/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <TabNavigator />
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