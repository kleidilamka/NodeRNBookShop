import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, Button } from "react-native";
import ProductItem from "../../components/ProductItem";
import Banner from "../../components/Banner";
import CategoryFilter from "../../components/CategoryFilter";
import { ThemeContext } from "../../contexts/themeContext";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getBooks, addToCart } from "../../redux/actions";
import { BASE_URL } from "../../config";
import axios from "axios";

const numColumns = 2;

const ProductStore = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState<boolean | number | undefined>();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetchBooks();
    fetchCategories();

    // return () => {
    //   setProducts([]);
    //   setProductCtg([]);
    //   setInitialState([]);
    //   setCategories([]);
    // };
  }, []);

  const fetchBooks = async () => {
    const { data } = await axios.get(`${BASE_URL}/books`);
    setProducts(data);
    setProductsCtg(data);
    setInitialState(data);
  };

  const fetchCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    setCategories(data);
  };

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category === ctg),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <Banner />
              </View>
              <View>
                <CategoryFilter
                  categories={categories}
                  categoryFilter={changeCtg}
                  productsCtg={productsCtg}
                  active={active}
                  setActive={setActive}
                />
              </View>
            </View>
          );
        }}
        numColumns={numColumns}
        data={productsCtg}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => <ProductItem item={item} key={item._id} />}
      />
    </View>
  );
};

export default ProductStore;
