import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

import ProductStore from "../screens/ProductStore";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import AddressScreen from "../screens/AddressScreen";
import CartScreen from "../screens/CartScreen";
import { ThemeContext } from "../contexts/themeContext";
// import BookmarksScreen from "../screens/BookmarksScreen";
import ChangePassword from "../screens/ChangePassword";
import SupportScreen from "../screens/SupportScreen";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamsList } from "./navigationTypes";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookmarksScreen from "../screens/BookmarksScreen";

type StackNavigationProps = StackScreenProps<RootStackParamsList>;
type DrawerNavigationProps = DrawerScreenProps<RootStackParamsList>;

const Stack = createStackNavigator<RootStackParamsList>();

const MainNavigator = ({
  navigation,
}: StackNavigationProps & DrawerNavigationProps) => {
  const { dark, theme } = useContext(ThemeContext);

  const handleBackAndDrawer = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  return (
    <Stack.Navigator initialRouteName="ProductStore">
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={() => navigation.openDrawer()}
              >
                <Feather name="align-left" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 9 }}
                onPress={() => navigation.navigate("Cart")}
              >
                <SimpleLineIcons name="handbag" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
        name="ProductStore"
        component={ProductStore}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,

          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.iconBgColor,
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
        name="Search"
        component={SearchScreen}
      />

      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,

          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.iconBgColor,
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "Cart",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "Bookmarks",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "Address",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "ChangePassword",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={handleBackAndDrawer}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "Support",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={handleBackAndDrawer}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.iconBgColor,
          },
          headerTitle: "Profile",
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 9 }}
                onPress={handleBackAndDrawer}
              >
                <Ionicons name="arrow-back" size={30} color={"#fff"} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
