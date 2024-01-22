import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubmitButton = ({ onPress, texto }) => {
    return (
        <Pressable
            style={styles.boton}
            onPress={onPress}
        >
            <Text
                style={styles.texto}
            >
                {texto}</Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'orange',
        width: '50%',
        margin: 10,
        padding: 20,
        alignSelf: 'center',
        borderRadius: 10
    },
    texto: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 18
    }
})