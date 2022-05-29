import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Business from './pages/business'
import Entertain from './pages/entertainment'
import Sport from './pages/sport'
import Tech from './pages/technology'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false ,tabBarStyle:{borderRadius:30, width:'80%', alignItems:'center', alignContent:'center',marginBottom:30,height:60, paddingHorizontal:15, position:'absolute', alignSelf:'center', marginLeft:'10%'}}}>
        <Tab.Screen name="Bussiness" component={Business} options={{tabBarIcon:({size, color})=>{
          return <Ionicons name="business" size={size} color={color} />
        },}} />
        <Tab.Screen name="Entertainment" component={Entertain} options={{tabBarIcon:({size, color})=>{
          return <Ionicons name="tv" size={size} color={color} />
        },}} />
        <Tab.Screen name="Sport" component={Sport} options={{tabBarIcon:({size, color})=>{
          return <Ionicons name="football" size={size} color={color} />
        },}} />
        <Tab.Screen name="Technology" component={Tech} options={{tabBarIcon:({size, color})=>{
          return <Ionicons name="aperture-sharp" size={size} color={color} />
        },}} />

        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
