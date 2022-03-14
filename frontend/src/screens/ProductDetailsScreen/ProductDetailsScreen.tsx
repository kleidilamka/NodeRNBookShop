import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Button } from "react-native";
import ProductDetailsTop from "../../components/ProductDetailsTop";
import ProductDetailsBottom from "../../components/ProductDetailsBottom";
import { ThemeContext } from "../../contexts/themeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import { BASE_URL } from "../../config";
import axios from "axios";

type NavigationProps = StackNavigationProp<RootStackParamsList, "Cart">;

const ProductDetailsScreen = () => {
  const { theme } = useContext(ThemeContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [book, setBook] = useState([]);
  const route = useRoute();
  const { item }: any = route.params;
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    if (!book._id || book._id !== item._id) {
      fetchBookDetails();
    }
  });

  //Get book details
  const fetchBookDetails = async () => {
    const { data } = await axios.get(`${BASE_URL}/books/${item._id}`);
    setBook(data);
  };

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
      },
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: theme.backgroundColor,
        alignItems: "center",
      }}
    >
      <ProductDetailsTop item={book} />
      <ProductDetailsBottom
        item={book}
        handleAddToCart={handleAddToCart}
        handleAddToBookmark={handleAddToBookmark}
      />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
