// Logo.js

import React from 'react';
import { Text, View } from 'react-native';

const Logo = () => {
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', padding: 10, backgroundColor: 'grey', borderRadius: 10 }}>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Logo</Text>
           
        </View>
    );
};

export default Logo; // Bileşeni export et
