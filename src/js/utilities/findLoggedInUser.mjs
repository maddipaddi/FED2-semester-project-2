import { load } from "../api/storage/load.mjs";

export const loggedInUser = () => {
  const user = load("profile");
  return user;
};
