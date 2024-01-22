import { Text, View, StyleSheet, Pressable } from 'react-native'

const Header = ({ title }) => {
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
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        alignSelf: 'flex-start'
    },
    texto: {
        fontFamily: 'Inter-Black',
        fontSize: 30
    }
})

export default Header