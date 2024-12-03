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

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add(
      "w-full",
      "h-52",
      "bg-gray-200",
      "rounded-md",
      "overflow-hidden",
      "mb-4"
    );

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      media.classList.add("w-full", "h-full", "object-cover");
      mediaContainer.appendChild(media);
    }

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
