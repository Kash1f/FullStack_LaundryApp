import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";


const DressItems = ({ item }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item)); // cart
    dispatch(incrementQty(item)); // product
  };
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
          <Text
            style={{
              width: 80,
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 16,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 58, color: "black", fontWeight: "bold" }}>
            {item.price}
          </Text>
        </View>

        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQuantity(item)); // cart
                dispatch(decrementQty(item)); // product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={styles.textMinus}>
               
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 19,
                  color: "#088F8F",
                  paddingHorizontal: 8,
                  fontWeight: "600",
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(incrementQuantity(item)); // cart
                dispatch(incrementQty(item)); //product
              }}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={styles.textPlus}>
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={addItemToCart} style={{ width: 80 }}>
            <Text style={styles.addText}> Add</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
    // 1:34
  );
};

export default DressItems;

const styles = StyleSheet.create({
  firstPressable: {
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
    marginVertical:8
  },
  addText: {
    borderColor: "#088F8F",
    borderWidth: 0.8,
    marginVertical: 10,
    color: "#088F8F",
    textAlign: "center",
    padding: 5,
    borderRadius: 4,
    fontSize: 17,
    fontWeight: "bold",
  },
  textPlus: {
    fontSize: 20,
    color: "#088F8F",
    paddingHorizontal: 6,
    fontWeight: "600",
    textAlign: "center",
  },
  textMinus: {
    fontSize: 20,
    color: "#088F8F",
    paddingHorizontal: 6,
    fontWeight: "600",
    textAlign: "center",
    borderColor:"#088F8F"
    
   

  },
});
