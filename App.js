import { StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import Navigator from "./navigation/Navigator"


const App = () => {
  return (
    <>
      <StatusBar />
      <Navigator />
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