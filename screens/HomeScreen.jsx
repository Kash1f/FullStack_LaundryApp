import {
  Text,
  View,
  Alert,
 ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItems from "../components/DressItems";

const HomeScreen = () => {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  //useEffect is gonna run every once the home screen component loads, if there is nothing present inside the dep array[], its gonna run everytime the homescreen loads and everyonce when there is a state update inside the hs, if we include the [] dep array, this useEffect will run only once when the hs loads. useEffect will run jab hs loads and jab array dep ki value change hogi

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  });

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services are not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    //we are gonna get the coordinates once the permission is granted
    const { coords } = await Location.getCurrentPositionAsync(); //lg, lt of particular user

    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      //after getting the latitude and longitude we will to apply the reverse geocode method on the lat and long to get the exact location

      let response = await Location.reverseGeocodeAsync({
        //passing an object to this function i.e basically lat and long
        latitude,
        longitude,
      });

      // console.log(response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: 0,
      price: "$10",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: "$10",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "Dresses",
      quantity: 0,
      price: "$10",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "Jeans",
      quantity: 0,
      price: "$10",
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: "$10",
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "Shorts",
      quantity: 0,
      price: "$10",
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: "$10",
    },
  ];

  return (
    <ScrollView style={{backgroundColor:"#F0F0F0", flex:1,marginTop:50}}>
      {/* Location and Profile */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        {/* creating our own profile so that we can navigate to the next screen to show the signIn/out button and your user loginID */}

        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/AAEL6sh_yqHq38z35QMy5Fnb8ZIxicdxCIVM9PeBD2j-=s64-c-mo",
            }}
          />
        </Pressable>
      </View>

      {/* SearchBar */}

      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth:1,
          borderRadius:10,
          borderColor: "#C0C0C0"
        }}
      >
        <TextInput placeholder="Search for items or more" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>

          {/* Image Carousel */}

        <Carousel/>

        {/* Services Component */}
        <Services/>
        
        {/* Render all the Products */}

        {/* we will render a new component */}

        {services.map((item,index)=>(

        // for each & every item in the services array we will render the dress comp
          <DressItems item={item} key={index}/> //for each item, a new comp is being rendered i.e this item



        ))}
    </ScrollView>
  );
};

export default HomeScreen;
