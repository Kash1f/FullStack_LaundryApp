import { StyleSheet, Text, View,SafeAreaView,Pressable } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
   
    const navigation = useNavigation();
   
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Pressable style={{marginVertical:10}}>
        <Text>Welcome to your profile</Text>
      </Pressable>

     
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})