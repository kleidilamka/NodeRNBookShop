import React, { useContext, useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import QuantitySelector from "../QuantitySelector";
import styles from "./styles";

import { ThemeContext } from "../../contexts/themeContext";
import QuantitySelector from "../QuantitySelector";
import axios from "axios";
import { BASE_URL } from "../../config";

interface CartProductItemProps {
  item: {
    _id: string;
    quantity: number;
    product: {
      image: string;
      title: string;
      price: number;
      oldPrice: number;
      quantity: number;
    };
  };
  fetchCartItems: () => {};
}

const CartProductItem = ({ item, fetchCartItems }: CartProductItemProps) => {
  const { theme } = useContext(ThemeContext);

  //Add book to bookmarks
  const deleteCartItem = async () => {
    await axios.delete(`${BASE_URL}/cart/${item._id}`);
    fetchCartItems();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundCard,
          shadowColor: theme.shadowColor,
        },
      ]}
    >
      <Image style={styles.image} source={{ uri: item.product.image }} />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {item.product.title}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          from ${item.product.price?.toFixed(2)}
          {item.product.oldPrice && (
            <Text style={[styles.oldPrice, { color: theme.error }]}>
              ${item.product.oldPrice.toFixed(2)}
            </Text>
          )}
        </Text>
        <QuantitySelector item={item} fetchCartItems={fetchCartItems} />
      </View>
      <TouchableOpacity
        style={[
          styles.deleteOneBtn,
          {
            backgroundColor: theme.iconBgColor,
            borderColor: theme.iconBgColor,
          },
        ]}
        onPress={() => {
          deleteCartItem(item);
        }}
      >
        <FontAwesome
          name="trash-o"
          color={"white"}
          size={28}
          style={[
            {
              backgroundColor: theme.iconBgColor,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartProductItem;
