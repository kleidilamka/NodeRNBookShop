import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookmarkProductItem from "../../components/BookmarkProductItem";
import { ThemeContext } from "../../contexts/themeContext";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useNavigation } from "@react-navigation/native";

const BookmarksScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [bookmarks, setBookmarks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      fetchBookmarks();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const fetchBookmarks = async () => {
    const { data } = await axios.get(`${BASE_URL}/bookmarks`);
    setBookmarks(data);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <FlatList
        style={{ marginTop: 10 }}
        data={bookmarks}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => (
          <BookmarkProductItem
            key={item._id}
            item={item}
            fetchBookmarks={fetchBookmarks}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BookmarksScreen;
