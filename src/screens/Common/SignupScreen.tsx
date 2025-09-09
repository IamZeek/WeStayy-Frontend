import React, { useRef,useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Animated } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { signUp, googleAuth, facebookAuth } from "../../services/AuthAPIs";
import { GOOGLE_CLIENT_IDS, FACEBOOK_CLIENT_ID } from "../../utils/config/credentials";
import { authStyles as styles, signupStyles } from "../../styles/AuthStyles";

WebBrowser.maybeCompleteAuthSession();

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const phoneRegExp = /^(?:\+92|0)?3\d{9}$/;

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

export default function SignUpScreen({ navigation }: Props) {
  const [requestGoogle, responseGoogle, promptAsyncGoogle] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_IDS.web,
    iosClientId: GOOGLE_CLIENT_IDS.ios,
    androidClientId: GOOGLE_CLIENT_IDS.android,
    webClientId: GOOGLE_CLIENT_IDS.web,
  });

  const [requestFacebook, responseFacebook, promptAsyncFacebook] = Facebook.useAuthRequest({
    clientId: FACEBOOK_CLIENT_ID,
  });

  useEffect(() => {
    if (responseGoogle?.type === "success") {
      googleAuth(responseGoogle.authentication?.accessToken!)
        .then(() => navigation.navigate("Login"))
        .catch((err) => Alert.alert("Error", err.message));
    }

    if (responseFacebook?.type === "success") {
      facebookAuth(responseFacebook.authentication?.accessToken!)
        .then(() => navigation.navigate("Login"))
        .catch((err) => Alert.alert("Error", err.message));
    }
  }, [responseGoogle, responseFacebook]);

  const handleSignUp = async (values: any) => {
    try {
      await signUp(values);
      Alert.alert("Success", "Account created. Please login.");
      navigation.navigate("Login");
    } catch (err: any) {
      Alert.alert("Error", err.message || "Signup failed");
    }
  };
  const bounceValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: -10, duration: 400, useNativeDriver: true }),
      Animated.timing(bounceValue, { toValue: 0, duration: 400, useNativeDriver: true }),
    ])
  ).start();
}, []);

  return (
     <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff" }}>
      <View style={signupStyles.header}>
        <Animated.View style={[signupStyles.logo, { transform: [{ translateY: bounceValue }] }]}>
          <Text style={{ fontSize: 36 }}>🚀</Text>
        </Animated.View>
        <Text style={signupStyles.welcomeText}>Create Account</Text>
        <Text style={signupStyles.subtitle}>Join our amazing community</Text>
      </View>

      <View style={signupStyles.formContainer}>
        <Formik
          initialValues={{ name: "", email: "", phone: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={handleSignUp}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={signupStyles.inputGroup}>
                <TextInput
                  placeholder="Full Name"
                  style={signupStyles.inputField}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}
              </View>

              <View style={signupStyles.inputGroup}>
                <TextInput
                  placeholder="Email Address"
                  style={signupStyles.inputField}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
              </View>

              <View style={signupStyles.inputGroup}>
                <TextInput
                  placeholder="Phone Number"
                  style={signupStyles.inputField}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  keyboardType="phone-pad"
                />
                {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}
              </View>

              <View style={signupStyles.inputGroup}>
                <TextInput
                  placeholder="Password"
                  style={signupStyles.inputField}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
              </View>

              <TouchableOpacity style={signupStyles.submitBtn} onPress={() => handleSubmit()}>
                <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={signupStyles.link}>Already have an account? Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
