import { onDeletePost } from "../listing/delete.mjs";

export function displayMyActiveListings(listings) {
  return listings.map((listing) => {
    const listingContainer = document.createElement("div");

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);

    const mediaContainer = document.createElement("div");

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

    linkToReadListing.appendChild(mediaContainer);

    const editButton = document.createElement("a");
    editButton.innerText = "Edit";
    editButton.setAttribute("href", `/listing/edit?=${listing.id}`);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("id", `${listing.id}`);
    deleteButton.addEventListener("click", onDeletePost);

    listingContainer.append(linkToReadListing, editButton, deleteButton);

    return listingContainer;
  });
}
