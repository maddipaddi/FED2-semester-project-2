import { formatDateWithDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

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
    endingDate.innerText = `Ending: ${formatDateWithDate(listing.endsAt)}`;

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
