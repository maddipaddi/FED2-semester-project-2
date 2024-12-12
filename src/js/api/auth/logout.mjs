import { router } from "../../router/router.mjs";
import { remove } from "../storage/remove.mjs";

export function logoutUser() {
  remove("profile");
  remove("token");
  router.route("/");
}
