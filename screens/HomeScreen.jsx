import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location"

const HomeScreen = () => {

    const [displayCurrentAddress, setdisplayCurrentAddress] = useState("We are loading your location")
    const [locationServicesEnabled, setlocationServicesEnabled] = useState(false)

  //useEffect is gonna run every once the home screen component loads, if there is nothing present inside the dep array[], its gonna run everytime the homescreen loads and everyonce when there is a state update inside the hs, if we include the [] dep array, this useEffect will run only once when the hs loads. useEffect will run jab hs loads and jab array dep ki value change hogi
  
  useEffect(()=>{
    checkIfLocationEnabled();
    getCurrentLocation();
  })

  const checkIfLocationEnabled = async () =>{
      let enabled = await Location.hasServicesEnabledAsync
      if(!enabled){
        Alert.alert('Alert Title', 'Location Services are not enabled', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false}
        );

      }
  }

return (
   <SafeAreaView>
    <Text>HomeScreen</Text>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({}) 