import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function EditProfile() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Edit Profile</Text> </SafeAreaView>
    )
}