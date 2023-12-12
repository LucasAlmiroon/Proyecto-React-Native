import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Home = ({ setMenu }) => {
    return (
        <>

            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => setMenu("cronometro")}><Text>Cronometro</Text></Pressable>
                <Pressable style={styles.boton}><Text>IMC</Text></Pressable>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.boton}><Text>Asistencia</Text></Pressable>
                <Pressable style={styles.boton}><Text>Pesos y repeticiones</Text></Pressable>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => { console.log("se apreto") }}><Text>Rutina</Text></Pressable>
                <Pressable style={styles.boton}><Text>Sugerencias</Text></Pressable>
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
        width: "40%",
        height: "100%",
        margin: 10,
        padding: 10
    }
})