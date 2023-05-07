import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Saved from './Screens/Saved';
import Booking from './Screens/Booking';
import Profile from './Screens/Profile';



import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs(){
    return(
      <Tab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: "goldenrod",
            tabBarStyle: {
              display: "flex"
            }
      }}
>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"Home", headerShown:false, tabBarIcon:({focused})=>focused ?
        (<Entypo name="home" size={27} color="goldenrod" />):
        (<AntDesign name="home" size={27} color="black" />)}} />

        <Tab.Screen name="Saved" component={Saved } options={{tabBarLabel:"Saved", headerShown:false, tabBarIcon:({focused})=>focused ?
        (<FontAwesome name="bookmark" size={27} color="goldenrod" />):
        (<FontAwesome name="bookmark-o" size={27} color="black" />)}} />

        <Tab.Screen name="Booking" component={Booking} options={{tabBarLabel:"Booking", headerShown:false, tabBarIcon:({focused})=>focused ?
        (<Ionicons name="md-notifications-sharp" size={27} color="goldenrod" />):
        (<Ionicons name="md-notifications-outline" size={27} color="black" />)}} />

        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel:"Profile", headerShown:false, tabBarIcon:({focused})=>focused ?
        (<Ionicons name="person-circle-sharp" size={27} color="goldenrod" />):
        (<Ionicons name="person-circle-outline" size={27} color="black" />)}} />

        
      </Tab.Navigator>
    )
  }

    
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})