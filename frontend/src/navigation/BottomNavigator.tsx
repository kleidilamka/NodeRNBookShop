import React, { useContext, useEffect, useState } from "react";
import { SimpleLineIcons, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./MainNavigator";
// import BookmarksScreen from "../screens/BookmarksScreen";
import SearchScreen from "../screens/SearchScreen";
import { BottomTabsParamsList } from "./navigationTypes";
import { ThemeContext } from "../contexts/themeContext";
import BookmarksScreen from "../screens/BookmarksScreen";

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const BottomTab = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName="MainNavigator"
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Tab.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          tabBarLabel: "Store",
          tabBarIcon: () => (
            <SimpleLineIcons name="notebook" size={26} color={theme.color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <Feather name="search" size={26} color={theme.color} />
          ),
          headerStyle: { backgroundColor: theme.iconBgColor },
          headerTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: () => (
            <Ionicons name="bookmark-outline" size={26} color={theme.color} />
          ),
          headerStyle: { backgroundColor: theme.iconBgColor },
          headerTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
