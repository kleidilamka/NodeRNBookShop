import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { ThemeContext } from "../../contexts/themeContext";

const ProfileScreen = () => {
  const [user, setUser] = useState<undefined>();

  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      fetchUser();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    if (!userInfo) {
      return;
    }
    const userSub = userInfo.attributes.sub;

    const userData = await (
      await DataStore.query(User)
    ).find((u: any) => u.sub === userSub);

    setUser(userData);
  };

  return (
    <View style={[styles.root, { backgroundColor: theme.backgroundColor }]}>
      <ProfileComponent user={user} fetchUser={fetchUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
