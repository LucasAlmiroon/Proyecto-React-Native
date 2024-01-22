import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import Home from "../screen/Home"
import Cronometro from "../screen/Cronometro"
import Imc from "../screen/Imc"
import Asistencia from '../screen/Asistencia'
import Rutina from '../screen/Rutina'
import PesosyRepeticiones from '../screen/PesosyRepeticiones'
import Sugerencias from '../screen/Sugerencias'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackGym = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                ({ route }) => {
                    return {
                        header: () => {
                            return <Header title={route.name} />
                        }
                    }
                }
            }
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cronometro" component={Cronometro} />
            <Stack.Screen name="Imc" component={Imc} />
            <Stack.Screen name="Asistencia" component={Asistencia} />
            <Stack.Screen name="PesosyRepeticiones" component={PesosyRepeticiones} />
            <Stack.Screen name="Rutina" component={Rutina} />
            <Stack.Screen name="Sugerencias" component={Sugerencias} />
        </Stack.Navigator>
    )
}

export default StackGym

const styles = StyleSheet.create({})