import { closeMessage } from "../ui/components/displayMessageToUser/closeMessage.mjs";

export function dismissMsgBtnListener() {
  const dismissMsgBtn = document.getElementById("dismiss-btn");
  dismissMsgBtn.addEventListener("click", closeMessage);
}
