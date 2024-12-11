export const listingImages = (listing) => {
  if (listing.media && listing.media.length > 0) {
    const mediaContainerMain = document.getElementById("media-container-main");
    const mediaContainer = document.getElementById("media-container");

    listing.media.forEach((mediaItem, index) => {
      if (index === 0) {
        const mediaMain = document.createElement("img");
        mediaMain.setAttribute("src", mediaItem.url);
        mediaMain.className = "h-96 w-full object-cover object-center";
        mediaContainerMain.appendChild(mediaMain);
      } else {
        const media = document.createElement("img");
        media.setAttribute("src", mediaItem.url);
        media.className = "h-56 w-full object-cover object-center";
        mediaContainer.append(media);
      }
    });
  }
};
