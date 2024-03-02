import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const DressItems = ({ item }) => {
  return (
    <View>
      <Pressable style={styles.firstPressable}>
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text style={{width:80,fontSize:16,fontWeight:"500",marginBottom:16}}>{item.name}</Text>
          <Text style={{width:58,color:"black", fontWeight:"bold"}}>{item.price}</Text>
        </View>

        <Pressable style={{ width: 80}}>
          <Text
            style={styles.secondPressable}>
            Add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItems;

const styles = StyleSheet.create({
  firstPressable: {
    backgroundColor: "#ADD8E6",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
  },
  secondPressable: {
    borderColor: "gray",
    borderWidth: 0.8,
    marginVertical: 10,
    color: "#088F8F",
    textAlign: "center",
    padding: 5,
    borderRadius:4,
    fontSize: 17,
    fontWeight:"bold"
  },
});
