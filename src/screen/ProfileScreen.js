import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.subtitle}>Welcome to React Native!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation?.navigate('Profile')}
            >
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    ); ß
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Clean white background
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a', // Dark gray for better readability than pure black
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#007AFF', // Standard iOS blue or brand color
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Profile;
