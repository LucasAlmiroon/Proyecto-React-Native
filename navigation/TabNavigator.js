import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackGym from './StackGym'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../components/Profile';
import { Fontisto } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar
        }}
      >
        <Tab.Screen
          name="Menu Principal"
          component={StackGym}
          options={{
            tabBarIcon: () => <Fontisto name="home" color={"white"} size={40} />
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: () => <Fontisto name="person" color={"white"} size={40} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "orange",
    elevation: 4,
    position: 'absolute',
    left: 25,
    right: 25,
    bottom: 40,
    borderRadius: 15,
    height: 90
  }
})