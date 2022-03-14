import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(false);

  const { theme, dark } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.linearGradient,
        { backgroundColor: theme.backgroundColor },
      ]}
    >
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Text style={[styles.title, { color: theme.color }]}>Email:</Text>

        <TextInput
          style={[styles.inputs, { backgroundColor: theme.backgroundCard }]}
          placeholder="Old password"
          placeholderTextColor={dark ? "lightgrey" : "grey"}
          value={oldPassword}
          onChangeText={(value) => setOldPassword(value)}
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
        />

        <TextInput
          style={[styles.inputs, { backgroundColor: theme.backgroundCard }]}
          placeholder="New password"
          placeholderTextColor={dark ? "lightgrey" : "grey"}
          value={newPassword}
          onChangeText={(value) => setNewPassword(value)}
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.changePasswordButton}
          // loading={signInLoading}
          // disabled={signInLoading}
          onPress={() => {}}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
