import { StyleSheet } from 'react-native'
import Header from "../components/Header"
import Home from "../components/Home"
import Cronometro from "../components/Cronometro"
import Imc from "../components/Imc"
import Asistencia from '../components/Asistencia'
import Rutina from '../components/Rutina'
import PesosyRepeticiones from '../components/PesosyRepeticiones'
import Sugerencias from '../components/Sugerencias'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Navigator() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          ({ route }) => {
            return {
              header: () => {
                return <Header title={route.name} inicio={route.name != 'Home' ? true : false} />
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
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})