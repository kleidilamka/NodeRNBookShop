import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "../../contexts/themeContext";
import { Rating } from "react-native-ratings";
import styles from "./styles";

interface ProductDetailsTopProps {
  item: {
    image: string;
    title: string;
    author: string;
    avgRating: number;
    categoryTitle: number;
  };
}

const ProductDetailsTop = (props: ProductDetailsTopProps) => {
  const { theme } = useContext(ThemeContext);
  const { item } = props;

  return (
    <View>
      <View
        style={[styles.topContainer, { backgroundColor: theme.backgroundCard }]}
      >
        <View style={styles.rightContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.leftContainer}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: theme.color,
                fontSize: 20,
                marginBottom: 7,
                fontWeight: "600",
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: theme.color, fontSize: 15 }}>
              {item.author}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <View style={styles.rating}>
              {/* <Text style={{ color: theme.color }}>{rating}</Text> */}
              <Rating
                type="custom"
                // ratingImage={WATER_IMAGE}
                ratingColor={theme.iconBgColor}
                ratingBackgroundColor="#c8c7c8"
                startingValue={item.avgRating}
                ratingCount={5}
                tintColor={theme.backgroundCard}
                imageSize={20}
                readonly={true}
                fractions={1}
                minValue={1}
                // onFinishRating={}
                style={{ marginBottom: 5 }}
              />
              <Text style={{ color: theme.color }}>{item.categoryTitle}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsTop;
