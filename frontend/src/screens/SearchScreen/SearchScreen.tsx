import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  Button,
} from "react-native";
import SearchedBook from "../../components/SearchedBook";
import { BASE_URL } from "../../config";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./styles";

const SearchScreen = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchBooks();

    return () => {
      setBooks([]);
      setFilteredBooks([]);
    };
  }, []);

  //Fetch books
  const fetchBooks = async () => {
    const { data } = await axios.get(`${BASE_URL}/books`);
    setBooks(data);
    setFilteredBooks(data);
  };

  //Search your product
  const searchBook = (text: string) => {
    setFilteredBooks(
      books.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <TextInput
        style={[styles.textInput, { backgroundColor: theme.backgroundColor }]}
        placeholder="Search"
        placeholderTextColor={theme.color}
        onChangeText={(text) => searchBook(text)}
      />
      <FlatList
        style={{ marginTop: 10 }}
        data={filteredBooks}
        extraData={books}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => <SearchedBook key={item._id} book={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;
