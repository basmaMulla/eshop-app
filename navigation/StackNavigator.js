import * as React from 'react'
import { Platform } from "react-native";
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ProductDetails, Cart, OrderSuccess, Signup, Login } from '../screens';
import { HeaderButton } from '../components';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <HeaderButton onPress={() => navigation.navigate("Cart")}/>
            ),
            headerRightContainerStyle,
            headerLeft: () => (
              <HeaderButton onPress={() => navigation.navigate("Login")} cartButton={false}/>
            ),
            headerLeftContainerStyle 
          })} 
        />

        <Stack.Screen 
          name='ProductDetails' 
          component={ProductDetails} 
          options={({ navigation }) => ({
            headerTransparent: true, title: '', headerTintColor: "white",
            headerRight: () => (
              <HeaderButton 
                color="white"
                onPress={() => navigation.navigate("Cart")}
              />
            ),
            headerRightContainerStyle: headerRightContainerStyle
          })} 
        />

        <Stack.Screen name='Cart' component={Cart}/>

        <Stack.Screen 
          name='OrderSuccess' component={OrderSuccess} 
          options={{
            headerTransparent: true, title: '', 
            headerLeft: () => { return null; }
          }}
        />

        <Stack.Screen 
          name='Signup' component={Signup} 
          options={{headerTintColor: "white", headerTransparent: true, title: ''}}
        />

        <Stack.Screen 
          name='Login' component={Login} 
          options={{headerTintColor: "white", headerTransparent: true, title: ''}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )}


export default MainStackNavigator

const headerRightContainerStyle = {
  ...Platform.select({
    ios: {
      paddingRight: 10,
      paddingVertical: 10
    },
    android: {
      paddingRight: 20,
      paddingVertical: 12
    }
  })
}

const headerLeftContainerStyle = {
  ...Platform.select({
    ios: {
      paddingLeft: 10,
      paddingVertical: 10
    },
    android: {
      paddingLeft: 20,
      paddingVertical: 12
    }
  })
}
