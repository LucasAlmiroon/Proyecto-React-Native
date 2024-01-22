import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'

const Login = ({ navigation }) => {

    const [emailInput, setEmailInput] = useState('')
    const [contrasenaInput, setContrasenaInput] = useState('')

    return (
        <>
            <View>
                <Image
                    style={styles.imagen}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.h1}>Sign in</Text>
                <InputForm
                    label='Email'
                    value=''
                    onChangeText={(t) => setEmailInput(t)}
                    placeholder='Email' />
                <InputForm
                    label='Contraseña'
                    value=''
                    onChangeText={(t) => setContrasenaInput(t)}
                    placeholder='Contraseña' />
                <SubmitButton
                    onPress={() => { navigation.navigate('Home') }}
                    texto="Ingresar"
                />
                <View style={styles.singUp}>
                    <Pressable><Text>Olvidaste tu contraseña?</Text></Pressable>
                    <Pressable onPress={() => { navigation.navigate('SignUp') }}><Text>Crear cuenta nueva</Text></Pressable>
                </View>
            </View>
        </>
    )
}

export default Login

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