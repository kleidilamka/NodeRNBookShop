// import { useNavigation } from "@react-navigation/native";
// import { Auth } from "aws-amplify";
// import { DataStore } from "aws-amplify";
// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Button } from "react-native";
// import { CartProduct } from "../../models";
// import { Product } from "../../models";
// import styles from "./styles";

// const FakeScreenComponents = ({ item }) => {
//   const [selectedId, setSelectedId] = useState();
//   const [product, setProduct] = useState();
//   const [quantity, setQuantity] = useState(1);
//   const navigation = useNavigation();

//   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//   const color = item.id === selectedId ? "white" : "black";

//   useEffect(() => {
//     setSelectedId(item.id);
//   }, []);

//   const onAddToCart = async () => {
//     const userData = await Auth.currentAuthenticatedUser();

//     if (!item || !userData) {
//       return;
//     }

//     const singleProduct = await DataStore.query(Product, selectedId);
//     console.log(singleProduct.id);

//     const newCartProduct = new CartProduct({
//       userSub: userData.attributes.sub,
//       quantity,
//       productID: singleProduct?.id,
//     });

//     await DataStore.save(newCartProduct);
//     console.log(newCartProduct);
//     navigation.navigate("Cart");
//   };

//   return (
//     <TouchableOpacity
//       onPress={onAddToCart}
//       style={[styles.item, backgroundColor]}
//     >
//       <Text style={[styles.title, color]}>{item.title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default FakeScreenComponents;
