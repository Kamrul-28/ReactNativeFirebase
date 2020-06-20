//React Elements
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Login from './src/components/login';
import Signup from './src/components/signup';
import Dashboard from './src/components/dashboard';

//Screens
import AddItem from './src/screens/AddItem';
import List from './src/screens/List'
import Home from './src/screens/Home';
import Blog from './src/screens/Blog';
import BlogDetails from './src/screens/BlogDetails';

//Stack Navigator
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

      {/* <Stack.Screen 
          name="Login" 
          component={Login} 
          options={
            {title: 'Login'},
            {headerLeft: null} 
          }
      />
      <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Signup' }}
      />     */}
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />   
      <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={
            { title: 'Dashboard' },
            {headerLeft: null} 
          }
      />
      {/* <Stack.Screen 
          name="Home" 
          component={Home} 
          options={
            { title: 'Home' },
            {headerLeft: null} 
          }
      /> */}
      <Stack.Screen 
          name="AddItem" 
          component={AddItem} 
          options={
            { title: 'Add Details' },
            {headerLeft: null} 
          }
      />

      <Stack.Screen 
          name="List" 
          component={List} 
          options={
            { title: 'List' },
            {headerLeft: null} 
          }
      />
      <Stack.Screen 
        name="Blog" 
        component={Blog} 
        options={{ title: 'Add Details' }}
      />
      <Stack.Screen 
       name="BlogDetails" 
       component={BlogDetails} 
       options={{ title: 'Blog Detail' }}
      />
    </Stack.Navigator>
  );
}

//Functional Component
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;