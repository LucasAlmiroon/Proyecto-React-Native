import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal, Pressable } from "react-native"
import Header from "./components/Header"
import Home from "./components/Home"
import Cronometro from "./components/Cronometro"


const App = () => {
  const [menu, setMenu] = useState("")

  return <View>
    <Header title={"My gym"} menu={menu} setMenu={setMenu} />
    {menu === "cronometro" ? <Cronometro /> :
      <Home setMenu={setMenu} />}

  </View>
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