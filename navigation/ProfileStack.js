import Header from "../components/Header"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EditProfile from '../components/EditProfile'
import Profile from '../screen/Profile';
import ImageSelector from '../screen/ImageSelector';

const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Perfil"
            screenOptions={{
                header: ({ route }) => <Header title='Mi perfil' />
            }
            }
        >
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Perfil" component={Profile} />
            <Stack.Screen name="ImageSelector" component={ImageSelector} />
        </Stack.Navigator>
    )
}

export default AuthStack