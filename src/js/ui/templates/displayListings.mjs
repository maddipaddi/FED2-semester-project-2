import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

/**
 * Generates and displays HTML elements for a list of auction listings.
 *
 * This function takes an array of auction listings and maps each listing to a dynamically
 * generated HTML structure. Each listing includes media, seller information, ending date,
 * the current highest bid, and a bid button. The function returns an array of HTML elements
 * representing the listings.
 *
 * @function
 * @param {Array<Object>} listings - An array of listing objects.
 * @param {string} listings[].id - The unique identifier for the listing.
 * @param {Array<Object>} listings[].media - An array of media objects associated with the listing.
 * @param {string} listings[].media[].url - The URL of a media item.
 * @param {Array<Object>} listings[].bids - An array of bids placed on the listing.
 * @param {Object} listings[].seller - The seller information.
 * @param {string} listings[].seller.name - The name of the seller.
 * @param {string} listings[].endsAt - The ending date and time of the listing.
 * @param {Array<string>} listings[].tags - Tags associated with the listing.
 * @returns {Array<HTMLElement>} An array of `div` elements representing the listings.
 *
 * @example
 * const listings = [
 *   {
 *     id: "123",
 *     media: [{ url: "https://example.com/image.jpg" }],
 *     bids: [{ amount: 100 }, { amount: 150 }],
 *     seller: { name: "john_doe" },
 *     endsAt: "2024-12-31T23:59:59Z",
 *     tags: ["auction", "electronics"],
 *   },
 * ];
 * const elements = displayListings(listings);
 * elements.forEach((el) => document.body.appendChild(el));
 */

export function displayListings(listings) {
  return listings.map((listing) => {
    const listingContainer = document.createElement("div");
    listingContainer.classList.add(
      "bg-white",
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col",
      "justify-between"
    );

    const mediaContainer = displayMedia(listing);

    const imgClickableLink = document.createElement("a");
    imgClickableLink.setAttribute("href", `/listing/read?id=${listing.id}`);
    imgClickableLink.appendChild(mediaContainer);

    const sellerAndEndingContainer = document.createElement("div");
    sellerAndEndingContainer.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mb-2"
    );

    const seller = document.createElement("a");
    seller.setAttribute("href", `/profile/read?user=${listing.seller.name}`);
    seller.classList.add(
      "text-sm",
      "font-medium",
      "text-gray-700",
      "hover:font-bold"
    );
    seller.innerText = `${listing.seller.name}`;

    const endingDate = document.createElement("p");
    endingDate.classList.add("text-sm", "text-gray-500");

    if (new Date(listing.endsAt) > new Date()) {
      let end = "Ending";
      endingDate.innerText = `${end}: ${formatDateWithDate(listing.endsAt)}`;
    } else {
      let end = "Ended";
      endingDate.innerText = `${end}: ${formatDateWithDate(listing.endsAt)}`;
    }
    sellerAndEndingContainer.append(seller, endingDate);

    const bidAndButtonContainer = document.createElement("div");
    bidAndButtonContainer.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "gap-4",
      "mt-2"
    );

    const currentBid = document.createElement("p");
    currentBid.classList.add("text-sm", "font-bold", "text-gray-800");
    currentBid.innerText = `Current bid: ${getHighestBid(listing.bids)}`;

    const bidButton = document.createElement("a");
    bidButton.setAttribute("href", `/listing/read?id=${listing.id}`);
    bidButton.classList.add(
      "bg-accent",
      "text-white",
      "text-sm",
      "py-2",
      "px-4",
      "rounded-md",
      "text-center",
      "hover:font-bold",
      "uppercase"
    );
    bidButton.innerText = "Bid";

    bidAndButtonContainer.append(currentBid, bidButton);

    listingContainer.append(
      imgClickableLink,
      sellerAndEndingContainer,
      bidAndButtonContainer
    );

    return listingContainer;
  });
}
