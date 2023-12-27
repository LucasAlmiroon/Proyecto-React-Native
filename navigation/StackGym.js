import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import Home from "../components/Home"
import Cronometro from "../components/Cronometro"
import Imc from "../components/Imc"
import Asistencia from '../components/Asistencia'
import Rutina from '../components/Rutina'
import PesosyRepeticiones from '../components/PesosyRepeticiones'
import Sugerencias from '../components/Sugerencias'
import EditProfile from '../components/EditProfile'
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
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    )
}

export default StackGym

const styles = StyleSheet.create({})