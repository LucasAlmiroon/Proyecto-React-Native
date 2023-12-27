import { StyleSheet } from 'react-native'
import Header from "../components/Header"
import EditProfile from '../components/EditProfile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackProfile = () => {

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
        </Stack.Navigator>
    )
}

export default StackProfile

const styles = StyleSheet.create({})