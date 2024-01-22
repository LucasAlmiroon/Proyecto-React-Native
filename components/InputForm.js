import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputForm = ({ label, value, onChangeText, placeholder }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.inputText}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            >
            </TextInput>
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    label: {
        color: 'orange',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },
    inputText: {
        margin: 10,
        padding: 10,
        width: '90%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 25
    }
})