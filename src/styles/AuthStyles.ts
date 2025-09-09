import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8, marginBottom: 5 },
  button: { padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
  buttonPrimary: { backgroundColor: "#007AFF" },
  buttonGoogle: { backgroundColor: "#DB4437" },
  buttonFacebook: { backgroundColor: "#4267B2" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  link: { color: "#007AFF", textAlign: "center", marginTop: 15 },
  error: { color: "red", fontSize: 12, marginBottom: 5 },
});

export const loginStyles = StyleSheet.create({
  header:{backgroundColor:"#016064",paddingTop: 60,paddingBottom: 30, alignItems: "center",},
  logo: { width: 80, height: 80, backgroundColor: "white", borderRadius: 40, alignItems: "center", justifyContent: "center", marginBottom: 20, },
  welcomeText: { fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 5 }, subtitle: { color: "rgba(255,255,255,0.9)", fontSize: 16 }, formContainer: { padding: 30 }, inputGroup: { marginBottom: 20 }, inputField: { width: "100%", padding: 16, borderWidth: 2, borderColor: "#e9ecef", borderRadius: 12, backgroundColor: "#f8f9fa", },
  submitBtn: { backgroundColor: "#016064", padding: 16, borderRadius: 12, alignItems: "center", marginBottom: 15, },
  link: { textAlign: "center", color: "#016064", marginTop: 10, fontWeight: "500" },
});

export const signupStyles = StyleSheet.create({
  header: { backgroundColor: "#016064", paddingTop: 60, paddingBottom: 30, alignItems: "center", },
  logo: { width: 80, height: 80, backgroundColor: "white", borderRadius: 40, alignItems: "center", justifyContent: "center", marginBottom: 20, },
  welcomeText: { fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 5, },
  subtitle: { color: "rgba(255,255,255,0.9)", fontSize: 16, textAlign: "center", },
  formContainer: { padding: 30, },
  inputGroup: { marginBottom: 20, },
  inputField: { width: "100%", padding: 16, borderWidth: 2, borderColor: "#e9ecef", borderRadius: 12, backgroundColor: "#f8f9fa", fontSize: 16, },
  submitBtn: { backgroundColor: "#016064", padding: 16, borderRadius: 12, alignItems: "center", marginBottom: 15, },
  link: { textAlign: "center", color: "#016064", marginTop: 10, fontWeight: "500", },
});

