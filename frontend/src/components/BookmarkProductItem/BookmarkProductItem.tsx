import React, { useContext, useEffect, useState } from "react";
import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { Rating } from "react-native-ratings";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL } from "../../config";

interface BookmarkProductItemProps {
  item: {
    book: {
      image: string;
      title: string;
      _id: string;
      avgRating: number;
      price: number;
      oldPrice: number;
    };
  };
  fetchBookmarks: () => {};
}

const BookmarkProductItem = (props: BookmarkProductItemProps) => {
  //   console.log(bookmarkItem);
  const { item, fetchBookmarks } = props;
  const { theme } = useContext(ThemeContext);

  //Add book to bookmarks
  const handleDeleteBookmark = async () => {
    await axios.delete(`${BASE_URL}/bookmarks/${item._id}`);
    fetchBookmarks();
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
      <Image style={styles.image} source={{ uri: item.book.image }} />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {item.book.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.book._id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.book.avgRating) ? "star" : "star-o"}
              size={17}
              color={"#3faa97"}
            />
          ))}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          from ${item.book.price?.toFixed(2)}
          {item.book.oldPrice && (
            <Text style={[styles.oldPrice, { color: theme.error }]}>
              ${item.book.oldPrice.toFixed(2)}
            </Text>
          )}
        </Text>
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
          handleDeleteBookmark(item);
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

export default BookmarkProductItem;
