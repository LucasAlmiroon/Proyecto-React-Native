import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../app/services/authApi'
import { setToken } from '../features/profile/profileSlice'
import { insertSession } from '../db'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, { data, error, isSuccess, isError, isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data.idToken))
            insertSession({
                email: data.email,
                localId: data.localId,
                idToken: data.idToken
            })
        }
        if (isError) {
            console.log('Error al iniciar sesión:', error);
        }
    }, [isSuccess, isError, error, navigation]);

    const onSubmit = () => {
        triggerLogin({ email, password })
    }


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
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    placeholder='Email' />
                <InputForm
                    label='Contraseña'
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    placeholder='Contraseña' />
                <SubmitButton
                    onPress={() => { onSubmit() }}
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