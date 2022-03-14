import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import { signIn } from "../../services/authService";
import { useAuthDispatch } from "../../contexts/authContext";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamsList } from "../../navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = StackNavigationProp<AuthStackParamsList>;

const SignInScreen = () => {
  const dispatch = useAuthDispatch();
  const [signInLoading, setSignInLoading] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const signInUser = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    setSignInLoading(true);
    signIn(email, password)
      .then((r) => {
        console.log(r);
        dispatch({
          type: "SIGN_IN",
          token: r.signInUserSession.accessToken.jwtToken,
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setSignInLoading(false));
  };

  return (
    <View style={styles.linearGradient}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => signInUser(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
              keyboardType="default"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              style={[styles.input, { marginBottom: 5 }]}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
              style={styles.forgotPasswordBtn}
            >
              <Text style={{ color: "#3c3c3c", fontWeight: "400" }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInBtn}
              loading={signInLoading}
              disabled={signInLoading}
              onPress={handleSubmit}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.notRegistered}>
        <Text style={{ color: "grey", fontWeight: "400", fontSize: 18 }}>
          Not registered?
        </Text>
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ marginLeft: 4, fontSize: 18, fontWeight: "600" }}>
            Sign up!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
