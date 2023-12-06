import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, FlatList, Modal } from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./components/ModalDelete"
import AddAlumno from "./components/AddAlumno"
import ListAlumnos from "./components/ListAlumnos"


const App = () => {

  const [newName, setNewName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [alumnos, setAlumnos] = useState([])
  const [alumnoSelected, setAlumnoselected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handlerAddAlumno = () => {

    const newAlumno = {
      id: uuid.v4(),
      name: newName,
      lastName: newLastName
    }

    setAlumnos(current => [...current, newAlumno])
    setNewName("")
    setNewLastName("")
  }

  const handlerModal = (item) => {
    setAlumnoselected(item)
    setModalVisible(true)
  }
  const handlerDeleteAlumno = () => {
    setAlumnos(current => current.filter(alumno => alumno.id !== alumnoSelected.id))
    setModalVisible(false)
  }
  return <View style={styles.container}>
    <AddAlumno
      valueName={newName}
      valueLastName={newLastName}
      onChangeName={setNewName}
      onChangeLastName={setNewLastName}
      addAlumno={handlerAddAlumno}
    />
    <ListAlumnos
      alumnos={alumnos}
      onModal={handlerModal}
    />
    <ModalDelete
      alumno={alumnoSelected}
      visible={modalVisible}
      onModal={handlerModal}
      onDelete={handlerDeleteAlumno}
    />
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