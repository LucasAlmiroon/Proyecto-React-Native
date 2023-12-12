import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Imc = () => {
    return (
        <View>
            <TextInput placeholder='Altura en cm'></TextInput>
            <TextInput placeholder='Peso en gramos'></TextInput>
        </View>
    )
}

export default Imc

const styles = StyleSheet.create({})