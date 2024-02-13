import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../features/profile/profileSlice'

const Profile = ({ navigation }) => {

    const nombre = useSelector((state) => state.profile.nombre)
    const apellido = useSelector((state) => state.profile.apellido)
    const foto = useSelector((state) => state.profile.foto)
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(setToken(''))
    }

    return (
        <View style={styles.container}>

            {foto ? (
                <Image
                    style={
                        styles.img
                    }
                    source={{ uri: foto }}
                />
            ) : (
                <Image
                    style={
                        styles.img
                    }
                    source={require('../assets/user-default.jpg')}
                />
            )}

            <Text style={styles.texto}> {nombre} {apellido} </Text>
            <Pressable style={styles.presionable} onPress={() => navigation.navigate('EditProfile')}><Text style={styles.texto}>Editar perfil</Text></Pressable>
            <Pressable style={styles.presionable}><Text style={styles.texto}>Preferencias</Text></Pressable>
            <Pressable style={styles.presionable} onPress={() => cerrarSesion()}><Text style={styles.texto}>Cerrar Sesion</Text></Pressable>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 10
    },
    texto: {
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10
    },
    presionable: {
        borderWidth: 1,
        borderColor: 'black',
        width: '98%'
    }

})