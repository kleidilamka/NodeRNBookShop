import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductReviews from "../ProductReviews";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";

interface ProductDetailsBottomProps {
  item: {
    description: string;
  };
  handleAddToCart: (item: {}) => void;
  handleAddToBookmark: (item: {}) => void;
}

const ProductDetailsBottom = (props: ProductDetailsBottomProps) => {
  const { theme } = useContext(ThemeContext);
  const { item, handleAddToCart, handleAddToBookmark } = props;
  const { description } = item;
  const [active, setActive] = useState<Number | undefined>(-1);

  const [comments, setComments] = useState([]);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundCard }]}>
      <View
        style={[styles.topContainer, { backgroundColor: theme.backgroundCard }]}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.backgroundCard,
          }}
        >
          <View
            style={{
              backgroundColor: theme.backgroundCard,
            }}
          >
            <Button
              color={active === -1 ? theme.color : "#62666b"}
              title="Description"
              onPress={() => setActive(-1)}
            />
            {active === -1 ? <View style={styles.underline} /> : null}
          </View>
          <View
            style={{
              backgroundColor: theme.backgroundCard,
            }}
          >
            <Button
              title="Reviews"
              color={active === 1 ? theme.color : "#62666b"}
              onPress={() => setActive(1)}
            />
            {active !== -1 ? <View style={styles.underline} /> : null}
          </View>
        </View>
        {/* {Bookmark Button} */}
        <TouchableOpacity
          onPress={() => {
            handleAddToBookmark(item);
          }}
          style={{ margin: 5 }}
        >
          <FontAwesome name="bookmark-o" size={27} color={"#67707d"} />
        </TouchableOpacity>
      </View>

      {active === -1 ? (
        <View
          style={[
            styles.descriptionContainer,
            {
              backgroundColor: theme.backgroundCard,
            },
          ]}
        >
          <ScrollView style={{ marginBottom: 80 }}>
            <Text style={{ color: theme.color, fontSize: 17 }}>
              {description}
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              handleAddToCart(item);
            }}
            style={styles.buyBtn}
          >
            <Text style={styles.btnText}>{`Add To Cart`}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.reviewsContainer,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <ProductReviews comments={comments} productID={item.id} />
        </View>
      )}
    </View>
  );
};

export default ProductDetailsBottom;
