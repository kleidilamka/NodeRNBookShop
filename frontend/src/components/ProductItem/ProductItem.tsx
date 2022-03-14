import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./styles";
import { Rating } from "react-native-ratings";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

interface ProductItemProps {
  item: {
    image: string;
    avgRating: number;
    author: string;
    title: string;
  };
}

type NavigationProps = StackNavigationProp<
  RootStackParamsList,
  "ProductDetails"
>;

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          item: item,
        })
      }
      style={[styles.container, { backgroundColor: theme.backgroundCard }]}
    >
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={{
          uri: item.image
            ? item.image
            : "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
        }}
      />
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
        style={{ paddingVertical: 5 }}
      />
      <Text
        style={[
          styles.title,
          { color: theme.color, fontSize: 14, fontWeight: "600" },
        ]}
      >
        {item.author!.length > 13
          ? `${item.author?.substring(0, 11 - 3)} ...`
          : item.author}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          styles.title,
          { color: theme.color, fontWeight: "400", fontSize: 15 },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductItem;
