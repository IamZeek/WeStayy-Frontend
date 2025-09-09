import { BACKEND_URL } from "../utils/config/credentials";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Login
export const login = async (payload: LoginPayload) => {
  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

// SignUp
export const signUp = async (payload: SignUpPayload) => {
  const res = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Signup failed");
  return res.json();
};

// Google Auth
export const googleAuth = async (accessToken: string) => {
  const res = await fetch(`${BACKEND_URL}/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessToken }),
  });

  if (!res.ok) throw new Error("Google login failed");
  return res.json();
};

// Facebook Auth
export const facebookAuth = async (accessToken: string) => {
  const res = await fetch(`${BACKEND_URL}/auth/facebook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessToken }),
  });

  if (!res.ok) throw new Error("Facebook login failed");
  return res.json();
};
