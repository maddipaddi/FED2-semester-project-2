export function setMediaObjects(imageURLs) {
  if (!Array.isArray(imageURLs)) {
    throw new Error("Input must be an array of URLs");
  }

  const mediaObjects = imageURLs
    .filter((url) => url.trim() !== "")
    .map((url) => ({
      url: url.trim(),
      alt: "Item image",
    }));

  return mediaObjects.length > 0 ? mediaObjects : null;
}