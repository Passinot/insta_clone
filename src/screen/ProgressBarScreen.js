import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProgressBarScreen = ({ navigation }) => {
    const [progress, setProgress] = useState(0)
    const handleProgress = () => {
        setProgress((prevProgress) => Math.min(prevProgress + 10, 180))
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', marginVertical: 20 }}>ProgressBarScreen</Text>
            <View
                style={{
                    height: 20,
                    backgroundColor: 'lightgrey',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginHorizontal: 20,
                }}
            >
                <View style={{ height: 20, width: progress * 2, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}></View>
            </View>
            <Button title='Progress' onPress={handleProgress} />
            <Button title='Reset' onPress={() => setProgress((prevProgress) => Math.max(prevProgress - 10, 0))} />
            <Button title='Next' onPress={() => navigation.navigate('FlatlistScreen')} />
        </SafeAreaView>
    )
}

export default ProgressBarScreen