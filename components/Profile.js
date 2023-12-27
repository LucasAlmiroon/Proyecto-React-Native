import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {

    const nombre = useSelector((state) => state.profile.nombre)
    const apellido = useSelector((state) => state.profile.apellido)
    return (
        <View style={styles.container}>
            <Image
                style={
                    styles.img
                }
                source={{
                    uri: 'https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg',
                }}
            />
            <Text style={styles.texto}> {nombre} {apellido} </Text>
            <Pressable style={styles.presionable} onPress={() => navigation.navigate('EditProfile')}><Text style={styles.texto}>Editar perfil</Text></Pressable>
            <Pressable style={styles.presionable}><Text style={styles.texto}>Preferencias</Text></Pressable>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200
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