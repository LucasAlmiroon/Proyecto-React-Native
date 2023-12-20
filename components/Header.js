import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useFonts } from 'expo-font'

const Header = ({ title, inicio }) => {
    const [fontsLoaded] = useFonts({ Sriracha: require('../assets/fonts/JosefinSans-Bold.ttf') })

    /*{inicio ? <Pressable style={styles.boton} onPress={() => navigation.navigate('Home')}><Text>Back to home</Text></Pressable> : null}*/
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "orange",
        width: "100%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        alignSelf: 'flex-start'
    },
    texto: {
        fontFamily: 'Sriracha',
        marginTop: 20,
        fontSize: 30
    }
})

export default Header