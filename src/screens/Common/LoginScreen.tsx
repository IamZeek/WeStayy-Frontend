import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Animated } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { login } from "../../services/AuthAPIs";
import { authStyles as styles,loginStyles as loginStyles } from "../../styles/AuthStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Login"> & { onLogin: () => void };

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short!").required("Required"),
});

export default function LoginScreen({ navigation, onLogin }: Props) {
  const handleLogin = async (values: any) => {
    try {
      await login(values);
      onLogin();
    } catch (err: any) {
      Alert.alert("Error", err.message || "Login failed");
    }
  };
  
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -10, // move up 10px
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0, // move back to original
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff" }}>
     <View style={loginStyles.header}>
      <Animated.View style={[loginStyles.logo, { transform: [{ translateY: bounceValue }] }]}>
        <Text style={{ fontSize: 36 }}>🚀</Text>
      </Animated.View>
      <Text style={loginStyles.welcomeText}>Welcome!</Text>
      <Text style={loginStyles.subtitle}>Join our amazing community</Text>
    </View>

      <View style={loginStyles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={loginStyles.inputGroup}>
                <TextInput
                  placeholder="Email address"
                  style={loginStyles.inputField}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
              </View>

              <View style={loginStyles.inputGroup}>
                <TextInput
                  placeholder="Password"
                  style={loginStyles.inputField}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>

              <TouchableOpacity style={loginStyles.submitBtn} onPress={() => handleSubmit()}>
                <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={loginStyles.link}>Don't have an account? Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
