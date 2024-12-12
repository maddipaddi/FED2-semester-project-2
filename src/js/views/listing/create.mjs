import { createListingListener } from "../../listeners/createListingListener.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

export async function initCreate() {
  await authGuard();
  createListingListener();
}
