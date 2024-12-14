import { displayErrorMessage } from "../../ui/components/displayMessageToUser/displayMessage.mjs";
import { handleErrors } from "../../utilities/handleErrors.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_AUCTION_PROFILES } from "../constants.mjs";

export const fetchSingleProfile = async (name, options = {}) => {
  try {
    const query = new URLSearchParams(options);
    const url = `${API_AUCTION_PROFILES}/${name}?${query.toString()}`;

    const response = await authFetch(url);
    if (!response.ok) {
      handleErrors(response);
    }
    const data = await response.json();
    const profile = data.data;
    return profile;
  } catch (error) {
    displayErrorMessage(error);
  }
};
