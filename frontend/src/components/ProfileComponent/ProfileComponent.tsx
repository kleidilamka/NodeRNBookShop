import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/themeContext";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import styles from "./styles";

interface ProfileComponentProps {
  user: User | undefined;
  fetchUser: () => {};
}

type NavigationProps = StackNavigationProp<RootStackParamsList>;

const ProfileComponent = (props: ProfileComponentProps) => {
  const { user, fetchUser } = props;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { dark, theme } = useContext(ThemeContext);

  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TextInput
        placeholder="First Name"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={firstName}
        onChangeText={setFirstName}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={lastName}
        onChangeText={setLastName}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Address"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="City"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={city}
        onChangeText={setCity}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TouchableOpacity onPress={() => {}} style={styles.submitButton}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileComponent;
