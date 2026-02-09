import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const TrafficScreen = ({ navigation }) => {
    const [activeLight, setActiveLight] = useState('red')

    const handleClick = () => {
        if (activeLight === 'red') {
            setActiveLight('orange')
        } else if (activeLight === 'orange') {
            setActiveLight('green')
        } else {
            setActiveLight('red')
        }
    }
    const handleNext = () => {
        navigation.navigate('ProgressBarScreen')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>Traffic Light</Text>
            <Button title='Next Light' onPress={handleClick} />
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <View style={{ backgroundColor: activeLight === 'red' ? "red" : 'lightgrey', height: 60, width: 60, borderRadius: 30 }}></View>
                <View style={{ backgroundColor: activeLight === 'orange' ? "orange" : 'lightgrey', height: 60, width: 60, borderRadius: 30 }}></View>
                <View style={{ backgroundColor: activeLight === 'green' ? "green" : 'lightgrey', height: 60, width: 60, borderRadius: 30 }}></View>
                <Button title='Next' onPress={handleNext} />
            </View>


        </SafeAreaView>
    )
}

export default TrafficScreen