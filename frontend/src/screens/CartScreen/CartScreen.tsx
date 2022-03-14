import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import { ThemeContext } from "../../contexts/themeContext";
import { BASE_URL } from "../../config";
import CartProductItem from "../../components/CartProductItem";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";

type NavigationProps = StackNavigationProp<RootStackParamsList, "Address">;

const CartScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProps>();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      fetchCartItems();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const fetchCartItems = async () => {
    const { data } = await axios.get(`${BASE_URL}/cart`);
    setCart(data);
  };

  const totalPrice = cart
    .map((item: { quantity: number; product: { price: number } }) => {
      // calculate the gross total amount for the item before applying the discount
      var itemGrossTotal = item.quantity * item.product.price;
      // make the percentage into a decimal and apply the discount to the gross total
      return itemGrossTotal;
    })
    // sum the discounted price of all of the products
    .reduce((item1: number, item2: number) => item1 + item2, 0);

  const onCheckout = async () => {
    navigation.navigate("Address", { totalPrice: totalPrice });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <FlatList
        style={{ marginTop: 10 }}
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CartProductItem
            key={item._id}
            item={item}
            fetchCartItems={fetchCartItems}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Text style={[styles.subTotalPrice, { color: theme.color }]}>
            {`Subtotal ${cart.length} items: `}
            <Text style={{ color: theme.error }}>${totalPrice.toFixed(2)}</Text>
          </Text>
        )}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.deleteBtn, { backgroundColor: theme.backgroundCard }]}
          onPress={() => {}}
        >
          <FontAwesome name="trash-o" color={theme.iconBgColor} size={23} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buyBtn, { backgroundColor: theme.iconBgColor }]}
          onPress={onCheckout}
        >
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
