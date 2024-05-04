// Home.js

import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../Logo';

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', justifyContent: 'center', flex: 1,alignItems: 'center'}}>
            <TouchableOpacity style={{ justifyContent: 'space-around', alignSelf: 'center', margin: 10,padding: 10, backgroundColor: 'grey', borderRadius: 10 }} onPress={() => { navigation.navigate('Profile') }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Profile Git</Text>
            </TouchableOpacity>
         
        </View>
    )
}

export default Home;
