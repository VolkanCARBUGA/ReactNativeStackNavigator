import React from 'react'
import { SafeAreaView, Text ,TouchableOpacity} from 'react-native'



export default function Profile({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 30, color: 'green', fontWeight: 'bold' }}>Profile</Text>
            <TouchableOpacity style={{justifyContent: 'center',alignSelf: 'center',padding: 10,backgroundColor: 'green',borderRadius: 10}}onPress={() => {navigation.navigate('Home')}}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>AnaSayfa</Text>
            </TouchableOpacity>

             </SafeAreaView>
    )
}