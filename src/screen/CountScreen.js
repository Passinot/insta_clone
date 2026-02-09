import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const CountScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>CountScreen</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        title={'Increment'}
                        onPress={increment}
                    />
                    <Text style={{ marginVertical: 10, color: 'red' }}>{count}</Text>

                    <Button
                        title={'Decrement'}
                        onPress={decrement} />

                </View>
                <Button
                    title={'Next'}
                    onPress={() => navigation.navigate('ToggleScreen')} />

            </View>

        </SafeAreaView>
    )
}

export default CountScreen