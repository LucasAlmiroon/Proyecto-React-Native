import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useSignUpMutation } from '../app/services/authApi'
import { useDispatch } from 'react-redux'
import { setToken } from '../features/profile/profileSlice'

const Signup = ({ navigate }) => {
    const [nombreInput, setNombreInput] = useState('');
    const [apellidoInput, setApellidoInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const dispatch = useDispatch();
    const [triggerSignup, { data, error, isLoading }] = useSignUpMutation();

    useEffect(() => {
        if (data) {
            dispatch(setToken(data.token));
            navigate('Home');
        }
        if (error) {
            console.log('Error al registrarse:', error);
        }
    }, [data, error, dispatch, navigate]);

    const onSubmit = () => {
        triggerSignup({ emailInput, passwordInput });
    };


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
                    placeholder='Contraseña'
                    secureTextEntry={true} />
                <InputForm
                    label='Repetir contraseña'
                    value={passwordInput}
                    onChangeText={(t) => setPasswordInput(t)}
                    placeholder='Contraseña'
                    secureTextEntry={true} />
                <SubmitButton
                    onPress={() => { onSubmit() }}
                    texto="Crear Cuenta"
                    disabled={isLoading}
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