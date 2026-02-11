import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../redux/userlistReducer/list.thunk'
import { TextInput } from 'react-native-gesture-handler'

const FlatListScreen = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const { users, loading, error } = useSelector((state) => state.userlist)
    useEffect(() => {
        dispatch(getUserList())
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>FlatListScreen</Text>
            <TextInput
                placeholder='Search'
                style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, margin: 5, padding: 10 }}
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderWidth: 1, borderBottomColor: '#ccc', borderRadius: 10, margin: 5, alignSelf: 'center', flexDirection: 'row', justifyContent: "space-evenly", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>{item.userId}</Text>
                        <Text style={{ color: 'black', width: "90%", textAlign: 'center', textAlignVertical: 'center' }}>{item.title}</Text>
                        <Text style={{ color: 'black' }}>{item.id}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default FlatListScreen