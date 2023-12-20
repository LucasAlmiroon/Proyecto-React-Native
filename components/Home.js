import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Feather, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const Home = ({ navigation }) => {

    const iconSize = 50;

    return (
        <>

            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('Cronometro')}><Feather name='clock' size={iconSize} /><Text style={styles.texto}>Cronometro</Text></Pressable>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('Imc')}><AntDesign name='dashboard' size={iconSize} /><Text style={styles.texto}>IMC</Text></Pressable>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('Asistencia')}><FontAwesome5 name='tasks' size={iconSize} /><Text style={styles.texto}>Asistencia</Text></Pressable>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('PesosyRepeticiones')}><FontAwesome5 name='dumbbell' size={iconSize} /><Text style={styles.texto}>Pesos y repeticiones</Text></Pressable>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('Rutina')}><FontAwesome5 name='dumbbell' size={iconSize} /><Text style={styles.texto}>Rutina</Text></Pressable>
                <Pressable style={styles.boton} onPress={() => navigation.navigate('Sugerencias')}><MaterialCommunityIcons name='food-fork-drink' size={iconSize} /><Text style={styles.texto}>Sugerencias</Text></Pressable>
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boton: {
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
        width: "45%",
        height: 150,
        margin: 20,
        borderRadius: 50
    },
    texto: {
        fontFamily: 'Sriracha',
        marginTop: 20,
        fontSize: 20
    }
})