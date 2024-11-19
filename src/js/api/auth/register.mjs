import { API_AUTH_REGISTER } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function register({ name, email, password }) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    const responseData = await response.json();
    return { ...responseData, email, password };
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to register");
  }
}