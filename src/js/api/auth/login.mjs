import { authFetch } from "../authFetch.mjs";
import { API_AUTH_LOGIN } from "../constants.mjs";
import { save } from "../storage/save.mjs";

export async function login({ email, password }) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to login");
  }
}

