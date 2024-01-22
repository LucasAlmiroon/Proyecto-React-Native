import { StyleSheet } from 'react-native'
import Header from "../components/Header"
import Login from "../screen/Login"
import Signup from "../screen/Signup"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'

const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                header: ({ route }) => <Header title='Bienvenido!' />
            }
            }
        >
            <Stack.Screen name="Inicio" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})