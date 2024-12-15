export function displayMedia(listing) {
  const mediaContainer = document.createElement("div");
  mediaContainer.classList.add(
    "flex",
    "justify-center",
    "items-center",
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
    const listingCategory = listing.tags[1];
    media.setAttribute("alt", `${listingCategory}`);
    media.classList.add("w-full", "h-full", "object-cover");
    mediaContainer.appendChild(media);
  }
  return mediaContainer;
}
