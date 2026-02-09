import { View, Text, Button, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ToggleScreen = ({ navigation }) => {
    const [isconstToggled, setIsToggled] = useState(false);
    const toggle = () => {
        setIsToggled(!isconstToggled)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isconstToggled ? 'black' : 'white' }}>
            <StatusBar barStyle={isconstToggled ? 'light-content' : 'dark-content'} />
            <Text style={{ color: isconstToggled ? 'white' : 'black', textAlign: 'center' }}>ToggleScreen</Text>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isconstToggled ? 'black' : 'white' }}>
                <Button title='Toggle' onPress={toggle} color={isconstToggled ? 'white' : 'black'} />
                <Text style={{ color: isconstToggled ? 'white' : 'black' }}>{isconstToggled ? 'Toogle On' : 'Toogle Off'}</Text>
            </View>
            <Button title='Next' onPress={() => { navigation.navigate('TrafficScreen') }} color={isconstToggled ? 'white' : 'black'} />

        </SafeAreaView>
    )
}

export default ToggleScreen