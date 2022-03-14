import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ProductReview from "../ProductReview";
import { FlatList, PanGestureHandler } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";

import styles from "./styles";

// interface ProductReviewsProps {
//   productID: string;
//   fetchComments: () => {};
// }

const ProductReviews = () => {
  const comments = [];
  const [newComment, setNewComment] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <Animated.View
      style={{
        backgroundColor: theme.backgroundCard,
        flex: 1,
      }}
    >
      <PanGestureHandler>
        <Animated.View style={styles.inputContainer}>
          <TextInput
            placeholder="what do you think?"
            value={newComment}
            onChangeText={setNewComment}
            placeholderTextColor="grey"
            style={[styles.input, { backgroundColor: theme.backgroundCard }]}
          />
          <TouchableOpacity style={{}} onPress={() => {}}>
            <Feather name="send" size={30} color="#3faa97" />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
      <FlatList
        style={{ marginTop: 10 }}
        data={comments}
        renderItem={({ item }) => (
          <ProductReview comment={item} fetchComments={fetchComments} />
        )}
      />
    </Animated.View>
  );
};

export default ProductReviews;
