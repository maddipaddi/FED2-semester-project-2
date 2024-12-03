export function setSingleUrlAsObject(url) {
  const media = {
    url: url,
    alt: "Profile image",
  };

  if (url === "") {
    return;
  } else {
    return media;
  }
}
