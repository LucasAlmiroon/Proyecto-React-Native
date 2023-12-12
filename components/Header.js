import { Text, View, StyleSheet, Pressable } from 'react-native'

const Header = ({ title, setMenu, menu }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{title}</Text>
            {menu != '' ?
                <Pressable style={styles.boton} onPress={() => { setMenu('') }}><Text>Back to home</Text></Pressable>
                : null}
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
        marginTop: 20,
        fontSize: 30
    }
})

export default Header