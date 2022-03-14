import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamsList } from "../../navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = StackNavigationProp<AuthStackParamsList, "SignIn">;

const ForgetPassword = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showIt = true;

  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  function validateResetForm() {
    return (
      code.length > 0 && password.length > 0 && password === confirmPassword
    );
  }

  const handleSendCodeClick = async () => {};

  async function handleConfirmClick(event: any) {}

  return (
    <View style={styles.linearGradient}>
      {!codeSent ? (
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleSendCodeClick}>
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      ) : !confirmed ? (
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              Please check your email
              <Text style={{ color: "grey" }}>{email}</Text> for the
              confirmation code.
            </Text>
            <TextInput
              placeholder="Confirmation code"
              value={code}
              onChangeText={(value) => setCode(value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
              keyboardType="default"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry
              keyboardType="default"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleConfirmClick}
            >
              <Text style={styles.buttonText}>Confirm Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>Password changed succesfully</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={{ marginLeft: 4, fontSize: 18, fontWeight: "600" }}>
                Sign in!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View
        style={{
          flexDirection: "row",
          marginVertical: 18,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 25,
        }}
      >
        <Text style={{ color: "grey", fontWeight: "400", fontSize: 18 }}>
          Already registered?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ marginLeft: 4, fontSize: 18, fontWeight: "600" }}>
            Sign in!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
