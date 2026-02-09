import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screen/HomeScreen';
import SearchScreen from '../../screen/SearchScreen';
import ReelsScreen from '../../screen/ReelsScreen';
import ActivityScreen from '../../screen/ActivityScreen';
import ProfileScreen from '../../screen/ProfileScreen';
import { ThemeContext } from '../../components/themeContext';
import CountScreen from '../../screen/CountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { dark } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: dark ? '#000' : '#fff',
                    borderTopColor: dark ? '#262626' : '#dbdbdb',
                },
                tabBarActiveTintColor: dark ? '#fff' : '#000',
                tabBarInactiveTintColor: dark ? '#666' : '#999',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Reels') {
                        iconName = focused ? 'videocam' : 'videocam-outline';
                    } else if (route.name === 'Activity') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={30} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Reels" component={ReelsScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
