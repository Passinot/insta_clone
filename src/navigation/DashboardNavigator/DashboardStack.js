import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import CountScreen from '../../screen/CountScreen';
import ToggleScreen from '../../screen/ToggleScreen';
import TrafficScreen from '../../screen/TrafficScreen';
import ProgressBarScreen from '../../screen/ProgressBarScreen';
import FlatlistScreen from '../../screen/FlatListScreen';
const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
            <Stack.Screen name="CountScreen" component={CountScreen} />
            <Stack.Screen name="ToggleScreen" component={ToggleScreen} />
            <Stack.Screen name="TrafficScreen" component={TrafficScreen} />
            <Stack.Screen name="ProgressBarScreen" component={ProgressBarScreen} />
            <Stack.Screen name="FlatlistScreen" component={FlatlistScreen} />
        </Stack.Navigator>
    );
}

export default DashboardStack;
