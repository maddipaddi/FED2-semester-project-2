import { fetchListings } from "../../../api/listing/read.mjs";

export async function displayCarousel() {
  const slidesContainer = document.getElementById("carousel-slides");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;

  // Fetch the newest listings (limit 4)
  const listings = await fetchListings({
    sort: "created",
    sortOrder: "desc",
    limit: 4,
    _tag: "luxuryauctionhouse",
  });

  // Populate the carousel with listings
  listings.forEach((listing) => {
    const slide = document.createElement("div");
    slide.className = "w-full flex-shrink-0";

    const clickableLink = document.createElement("a");
    clickableLink.setAttribute("href", `/listing/read?id=${listing.id}`);
    clickableLink.className = "block";

    const listingImg = document.createElement("img");
    listingImg.setAttribute(
      "src",
      `${listing.media[0]?.url || "https://via.placeholder.com/800x400"}`
    );
    listingImg.className = "w-full h-64 object-cover rounded-md shadow-lg";

    const listingTitle = document.createElement("h2");
    listingTitle.textContent = `${listing.title}`;
    listingTitle.className = "text-lg font-bold mt-2;";

    clickableLink.append(listingImg, listingTitle);
    slide.appendChild(clickableLink);
    slidesContainer.appendChild(slide);
    return slidesContainer;
  });

  // Update carousel display
  const updateCarousel = () => {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Button Handlers
  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % listings.length;
    updateCarousel();
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + listings.length) % listings.length;
    updateCarousel();
  };

  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Auto-slide every 5 seconds
  setInterval(showNextSlide, 5000);

  // Initialize carousel
  updateCarousel();
}
