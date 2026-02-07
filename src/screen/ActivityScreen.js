import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../components/themeContext';

const ActivityScreen = () => {
    const { dark } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: dark ? '#000' : '#fff' }]}>
            <Text style={{ color: dark ? '#fff' : '#000' }}>Activity Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ActivityScreen;
