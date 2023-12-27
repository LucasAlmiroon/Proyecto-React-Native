import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { reemplazarNombre, reemplazarApellido, reemplazarEdad } from '../features/profile/profileSlice'

const EditProfile = ({ navigation }) => {
    const [nombreInput, setNombreInput] = useState()
    const [apellidoInput, setApellidoInput] = useState()
    const [edadInput, setEdadInput] = useState()
    const dispatch = useDispatch()

    return (
        <View>
            <Text>
                Cambiar Nombre
            </Text>
            <TextInput onChangeText={(t) => setNombreInput(t)}></TextInput>
            <Button title='Aplicar' onPress={() => { dispatch(reemplazarNombre(nombreInput)) }}></Button>
            <Text>
                Cambiar Apellido
            </Text>
            <TextInput onChangeText={(t) => setApellidoInput(t)}></TextInput>
            <Button title='Aplicar' onPress={() => { dispatch(reemplazarApellido(apellidoInput)) }}></Button>
            <Text>
                Cambiar Edad
            </Text>
            <TextInput onChangeText={(t) => setEdadInput(parseInt(t))}></TextInput>
            <Button title='Aplicar' onPress={() => { dispatch(reemplazarEdad(edadInput)) }}></Button>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({


})