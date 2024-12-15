import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { onDeletePost } from "../listing/delete.mjs";

export function displayMyActiveListings(listings) {
  return listings.map((listing) => {
    const listingContainer = document.createElement("div");
    listingContainer.classList.add(
      "bg-white",
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col",
      "justify-between",
      "mb-4"
    );

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);

    const mediaContainer = displayMedia(listing);

    linkToReadListing.appendChild(mediaContainer);

    const editButton = document.createElement("a");
    editButton.innerText = "Edit";
    editButton.classList.add(
      "bg-accent",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-t-md",
      "text-center",
      "hover:font-bold",
      "mb-2"
    );
    editButton.setAttribute("href", `/listing/update?id=${listing.id}`);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add(
      "bg-secondary",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-b-md",
      "block",
      "text-center",
      "hover:font-bold"
    );
    deleteButton.setAttribute("id", `${listing.id}`);
    deleteButton.addEventListener("click", onDeletePost);

    listingContainer.append(linkToReadListing, editButton, deleteButton);

    return listingContainer;
  });
}
