import { api } from "../api/axios.js";

export async function login(email, password) {
  const path = import.meta.env.VITE_AUTH_LOGIN_PATH;

  if (!path) {
    throw new Error("Login API path is not configured.");
  }

  const response = await api.post(path, { email, password });
  return response.data;
}

export async function me() {
  const path = import.meta.env.VITE_AUTH_ME_PATH;

  if (!path) {
    throw new Error("Current-user API path is not configured.");
  }

  const response = await api.get(path);
  return response.data;
}