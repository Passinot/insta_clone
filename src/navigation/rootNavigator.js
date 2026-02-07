import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthNavigator/AuthStack';
import DashboardStack from './DashboardNavigator/DashboardStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Auth"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="Dashboard" component={DashboardStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
