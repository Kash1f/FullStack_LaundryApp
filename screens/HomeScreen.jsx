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
        Alert.alert('Location Services are not enabled', 'Please enable the location services', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false}
        )
      }
      else{
          setlocationServicesEnabled(enabled)
      }
  }

  const getCurrentLocation = () => {
      let {status} = await Location.requestForegroundPermissionsAsync();

      if (status !== granted){
        Alert.alert('Permission denied', 'Allow the app to use the location services', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false}
        )
      };

      //we are gonna get the coordinates once the permission is granted
      const {coordinates} = await Location.getCurrentPositionAsync(); //lg, lt of particular user

      if(coordinates){
        const {latitude, longitude} = coords;

        //after getting the latitude and longitude we will to apply the reverse geocode method on the lat and long to get the exact location


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