
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./AuthStack"
import TabNavigator from './TabNavigator'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchSession } from '../db'
import { setToken } from '../features/profile/profileSlice'

const MainNavigation = () => {
    const idToken = useSelector((state) => state.profile.token)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                console.log(session);
                if (session && session._array && session._array.length > 0) {
                    const user = session._array[0];
                    dispatch(setToken(user.idToken));
                }
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);


    return (
        <NavigationContainer>
            {idToken ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigation