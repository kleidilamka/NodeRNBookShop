import { DataStore } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

interface ProductReviewProps {
  fetchComments: () => {};
}

const ProductReview = () => {
  const [user, setUser] = useState<undefined>(undefined);
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.reviewsContainer,
        { backgroundColor: theme.backgroundCard },
      ]}
    >
      <View
        style={[
          styles.comment,
          {
            backgroundColor: theme.backgroundCard,
            shadowColor: theme.shadowColor,
          },
        ]}
      >
        <Text style={{ color: theme.color, marginLeft: 10, marginBottom: 10 }}>
          {`${user?.firstName} ${user?.lastName}`}
        </Text>
        <Text style={{ color: theme.color, marginLeft: 10 }}>
          {comment.comment}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => {}}>
        <FontAwesome
          name="trash-o"
          color={theme.iconBgColor}
          size={28}
          // style={[
          //   {
          //     backgroundColor: theme.iconBgColor,
          //   },
          // ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductReview;
