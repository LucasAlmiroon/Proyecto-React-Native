
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./AuthStack"
import { useState } from 'react'
import TabNavigator from './TabNavigator'

const MainNavigation = () => {
    const [user, setUser] = useState('a')
    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigation