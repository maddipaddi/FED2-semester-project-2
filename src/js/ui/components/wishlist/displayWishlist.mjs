import { fetchSingleListing } from "../../../api/listing/read.mjs";
import { displayMedia } from "../../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDayTimeDate } from "../../../utilities/formatDate.mjs";
import { getUserWishlist } from "./getUserWishlist.mjs";

export async function displayWishlist() {
  const wishlist = getUserWishlist();
  const listingsContainer = document.getElementById("my-wishlist-container");

  if (wishlist.length === 0) {
    listingsContainer.innerHTML = "<p>Your wishlist is empty!</p>";
    return;
  }

  const listings = await Promise.all(
    wishlist.map((id) => fetchSingleListing(id))
  );

  listings.forEach((listing) => {
    const listingElement = document.createElement("div");
    listingElement.classList.add(
      "bg-white",
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col",
      "justify-between",
      "mb-4"
    );

    const mediaContainer = displayMedia(listing);

    const imgClickableLink = document.createElement("a");
    imgClickableLink.setAttribute("href", `/listing/read?id=${listing.id}`);
    imgClickableLink.appendChild(mediaContainer);

    const auctionEnd = document.createElement("p");
    auctionEnd.classList.add(
      "bg-primary",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-t-md",
      "text-center",
      "mb-2"
    );
    auctionEnd.innerText = `Ending: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);
    linkToReadListing.classList.add(
      "bg-accent",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-b-md",
      "block",
      "text-center",
      "hover:font-bold"
    );
    linkToReadListing.innerText = "Want to bid?";

    listingElement.append(imgClickableLink, auctionEnd, linkToReadListing);
    listingsContainer.appendChild(listingElement);
  });
}
