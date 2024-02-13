import { StyleSheet, View } from 'react-native'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { reemplazarNombre, reemplazarApellido, reemplazarEdad } from '../features/profile/profileSlice'
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';

const EditProfile = ({ navigation }) => {

    const nombre = useSelector((state) => state.profile.nombre)
    const apellido = useSelector((state) => state.profile.apellido)
    const [nombreInput, setNombreInput] = useState(nombre)
    const [apellidoInput, setApellidoInput] = useState(apellido)
    const dispatch = useDispatch()
    const reemplazar = () => {
        if (nombreInput && apellidoInput != '') {
            dispatch(reemplazarApellido(apellidoInput))
            dispatch(reemplazarNombre(nombreInput))
            navigation.navigate('Perfil')
        } else {
            console.log('Falta un dato')
        }
    }

    return (
        <View>
            <SubmitButton
                onPress={() => navigation.navigate('ImageSelector')}
                texto="Cambiar foto de perfil"
            />
            <InputForm
                label='Cambiar nombre'
                value={nombreInput}
                onChangeText={(t) => setNombreInput(t)}
                placeholder='Nombre' />
            <InputForm
                label='Cambiar apellido'
                value={apellidoInput}
                onChangeText={(t) => setApellidoInput(t)}
                placeholder='Apellido' />
            <SubmitButton
                onPress={() => reemplazar()}
                texto="Aplicar cambios"
            />
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'orange',
        margin: 10,
        padding: 10
    }
})