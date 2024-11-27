import { deletePost } from "../../api/listing/delete.mjs";

export async function onDeletePost(event) {
  event.preventDefault();

  const deleteButton = event.target;

  const id = deleteButton.getAttribute("id");

  try {
    await deletePost(id);
    alert("The post was deleted");
  } catch (error) {
    console.error("Create listing failed:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
}
