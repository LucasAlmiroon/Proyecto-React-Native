import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'

const Signup = ({ navigate }) => {
    return (
        <>
            <View>
                <Text style={styles.h1}>Sign up</Text>
                <InputForm
                    label='Nombre'
                    value=''
                    onChangeText={() => { }}
                    placeholder='Nombre' />
                <InputForm
                    label='Apellido'
                    value=''
                    onChangeText={() => { }}
                    placeholder='Apellido' />
                <InputForm
                    label='Email'
                    value=''
                    onChangeText={() => { }}
                    placeholder='Email' />
                <InputForm
                    label='Contraseña'
                    value=''
                    onChangeText={() => { }}
                    placeholder='Contraseña' />
                <InputForm
                    label='Repetir contraseña'
                    value=''
                    onChangeText={() => { }}
                    placeholder='Contraseña' />
                <SubmitButton
                    onPress={() => { navigation.navigate('Home') }}
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