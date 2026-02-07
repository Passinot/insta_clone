import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screen/LoginScreen';
import SignupScreen from '../../screen/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
