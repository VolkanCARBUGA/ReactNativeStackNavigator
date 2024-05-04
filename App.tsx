import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'green' }}>
<NavigationContainer>
<Navigator/>
    </NavigationContainer>
    
    </SafeAreaView>
  )
}