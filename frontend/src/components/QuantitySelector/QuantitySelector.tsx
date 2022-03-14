import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../config";

interface QuantitySelectorProps {
  item: {
    quantity: number;
    _id: string;
  };
  fetchCartItems: () => {};
}

const QuantitySelector = ({ item, fetchCartItems }: QuantitySelectorProps) => {
  const [newQuantity, setNewQuantity] = useState(item.quantity);

  //Decrease quantity by one
  const onMinus = async () => {
    const res = await axios.patch(`${BASE_URL}/cart/${item._id}`, {
      quantity: item.quantity - 1,
    });
    setNewQuantity(res.data.quantity);
    return res.data.json;
  };
  const decrementByOne = () => {
    onMinus();
    fetchCartItems();
  };

  //Increase quantity by one
  const onPlus = async () => {
    const res = await axios.patch(`${BASE_URL}/cart/${item._id}`, {
      quantity: item.quantity + 1,
    });
    setNewQuantity(res.data.quantity);
    return res.data.json;
  };
  const incrementByOne = () => {
    onPlus();
    fetchCartItems();
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={decrementByOne} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{newQuantity}</Text>

      <Pressable onPress={incrementByOne} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    width: 100,
  },
  button: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  butonText: {
    fontSize: 18,
  },
  quantity: {
    color: "#007eb9",
  },
});

export default QuantitySelector;
