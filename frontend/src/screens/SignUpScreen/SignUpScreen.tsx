import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { signIn, signUp, confirmSignUp } from "../../services/authService";
import { useAuthDispatch } from "../../contexts/authContext";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamsList } from "../../navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = StackNavigationProp<AuthStackParamsList, "SignIn">;

const SignUpScreen = () => {
  const dispatch = useAuthDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [code, setCode] = useState("");

  const navigation = useNavigation<NavigationProps>();

  const signUpUser = () => {
    setSignUpLoading(true);
    signUp(email, password)
      .then((data) => {
        console.log(data);
        setSignedUp(true);
        setSignUpLoading(false);
      })
      .catch((err) => {
        setSignUpLoading(false);
        console.log(err);
      });
  };

  const confirm = () => {
    setVerifyLoading(true);
    confirmSignUp(email, code)
      .then(() => {
        setVerifyLoading(false);
        signIn(email, password).then(() =>
          dispatch({ type: "SIGN_IN", token: "dummy-auth-token" })
        );
      })
      .catch((err) => {
        setVerifyLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={styles.linearGradient}>
      {!signedUp && (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
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
          <TouchableOpacity
            loading={signUpLoading}
            disabled={signUpLoading}
            type="outline"
            title="SIGN UP"
            style={styles.signUpBtn}
            onPress={signUpUser}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
      {signedUp && (
        <View style={styles.container}>
          <Text style={styles.title}>Confirm Code</Text>

          <TextInput
            placeholder="Verification code"
            value={code}
            onChangeText={(value) => setCode(value)}
            keyboardType="default"
            autoCapitalize="none"
            style={styles.input}
          />
          <TouchableOpacity
            loading={verifyLoading}
            disabled={verifyLoading}
            type="outline"
            onPress={confirm}
            style={styles.signUpBtn}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Verify</Text>
          </TouchableOpacity>
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
        <Text style={{ color: "grey", fontSize: 18 }}>Already a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ marginLeft: 4, fontSize: 18, fontWeight: "600" }}>
            Sign In!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
