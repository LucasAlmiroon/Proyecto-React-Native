import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useSignUpMutation } from '../app/services/authApi'

const Signup = ({ navigate }) => {
    const [nombreInput, setNombreInput] = useState('')
    const [apellidoInput, setApellidoInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [triggerSignup, { data, error, isSuccess, isError, isLoading }] = useSignUpMutation()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        } if (isError) {
            console.log(error)
        }
    }, [data, isError, isSuccess])

    const onSubmit = () => {
        triggerSignup({ emailInput, passwordInput })
    }


    return (
        <>
            <View>
                <Text style={styles.h1}>Sign up</Text>
                <InputForm
                    label='Nombre'
                    value={nombreInput}
                    onChangeText={(t) => setNombreInput(t)}
                    placeholder='Nombre' />
                <InputForm
                    label='Apellido'
                    value={apellidoInput}
                    onChangeText={(t) => setApellidoInput(t)}
                    placeholder='Apellido' />
                <InputForm
                    label='Email'
                    value={emailInput}
                    onChangeText={(t) => setEmailInput(t)}
                    placeholder='Email' />
                <InputForm
                    label='Contraseña'
                    value={passwordInput}
                    onChangeText={(t) => setPasswordInput(t)}
                    placeholder='Contraseña' />
                <InputForm
                    label='Repetir contraseña'
                    value={passwordInput}
                    onChangeText={(t) => setPasswordInput(t)}
                    placeholder='Contraseña' />
                <SubmitButton
                    onPress={() => { onSubmit() }}
                    texto="Crear Cuenta"
                />
            </View>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    },
    h1: {
        textAlign: 'center',
        fontSize: 25
    },
    imagen: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 20,
        width: 150,
        height: 150
    },
    singUp: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10
    }
})