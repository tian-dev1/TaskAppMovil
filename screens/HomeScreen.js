import React, {useEffect} from 'react'
import {View, Text} from 'react-native'

const HomeScreen = () => {
    
    useEffect(() =>{
        console.log("Cargo");
    }, [])
    return(
        <View>
            <Text>Home Screen!</Text>
        </View>
  )
}

export default HomeScreen