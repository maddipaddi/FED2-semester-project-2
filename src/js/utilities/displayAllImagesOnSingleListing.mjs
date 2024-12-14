export const listingImages = (listing) => {
  if (listing.media && listing.media.length > 0) {
    const mediaContainerMain = document.getElementById("media-container-main");
    const mediaContainer = document.getElementById("media-container");

    // Hovedbilde (øverst, sentrert)
    const mainImageWrapper = document.createElement("div");
    mainImageWrapper.className = "flex justify-center mb-4";

    const mediaMain = document.createElement("img");
    mediaMain.setAttribute("src", listing.media[0].url);
    mediaMain.setAttribute("alt", listing.title || "Main image");
    mediaMain.className = "h-96 w-auto object-cover object-center rounded-lg shadow-lg";
    mainImageWrapper.appendChild(mediaMain);
    mediaContainerMain.appendChild(mainImageWrapper);

    // Sekundære bilder (samlet horisontalt på store skjermer)
    const secondaryImageWrapper = document.createElement("div");
    secondaryImageWrapper.className =
      "flex flex-wrap md:flex-nowrap gap-2 md:gap-4 w-full justify-center";

    listing.media.slice(1, 3).forEach((mediaItem) => {
      const media = document.createElement("img");
      media.setAttribute("src", mediaItem.url);
      media.setAttribute("alt", listing.title || "Secondary image");
      media.className = "h-56 w-auto object-cover object-center rounded-lg shadow-md";
      secondaryImageWrapper.appendChild(media);
    });

    mediaContainer.appendChild(secondaryImageWrapper);
  }
};
