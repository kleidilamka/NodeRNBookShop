import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../config";

interface SearchedProductProps {
  book: {
    title: string;
    image: string;
    avgRating: number;
    price: number;
    oldPrice: number;
  };
}

type NavigationProps = StackNavigationProp<RootStackParamsList>;

const SearchedBook = ({ book }: SearchedProductProps) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProps>();

  //Add product to cart
  const handleAddToCart = async (book) => {
    await axios({
      method: "post",
      url: `${BASE_URL}/cart`,
      data: {
        product: book._id,
        quantity: 1,
      },
    });
  };

  //Add book to bookmarks
  const handleAddToBookmark = async (book) => {
    await axios({
      method: "post",
      url: `${BASE_URL}/bookmarks`,
      data: {
        book: book._id,
        exists: true,
      },
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundCard,
          shadowColor: theme.shadowColor,
        },
      ]}
      onPress={() => {}}
    >
      <Image style={styles.image} source={{ uri: book.image }} />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {book.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <Rating
            type="custom"
            // ratingImage={WATER_IMAGE}
            ratingColor={theme.iconBgColor}
            ratingBackgroundColor="#c8c7c8"
            startingValue={book.avgRating}
            ratingCount={5}
            tintColor={theme.backgroundCard}
            imageSize={20}
            readonly={true}
            fractions={1}
            minValue={1}
            // onFinishRating={}
            style={{ marginBottom: 5 }}
          />
        </View>
      </View>
      <View style={styles.leftContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          ${book?.price?.toFixed(2)}
        </Text>
        {book?.oldPrice && (
          <Text style={[styles.oldPrice, { color: theme.error }]}>
            {" "}
            ${book?.oldPrice.toFixed(2)}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={[styles.addBookmarkBtn]}
        onPress={() => handleAddToBookmark(book)}
      >
        <FontAwesome name={"bookmark-o"} color={"#c3c3c3"} size={28} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.addToCartBtn,
          {
            backgroundColor: theme.iconBgColor,
            borderColor: theme.iconBgColor,
          },
        ]}
        onPress={() => {
          handleAddToCart(book);
        }}
      >
        <Ionicons
          name="ios-cart-outline"
          color={"white"}
          size={28}
          style={[
            {
              backgroundColor: theme.iconBgColor,
            },
          ]}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SearchedBook;
