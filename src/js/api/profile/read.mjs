import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_PROFILES } from "../constants.mjs";

export const fetchSingleProfile = async (name, options = {}) => {
  try {
    const query = new URLSearchParams(options);
    const url = `${API_AUCTION_PROFILES}/${name}?${query.toString()}`;

    const response = await authFetch(url);
    if (!response.ok) throw new Error("Failed to fetch profile");
    const data = await response.json();
    const profile = data.data;
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
};
