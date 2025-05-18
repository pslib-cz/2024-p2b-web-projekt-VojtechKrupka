import './normalize.css';
import './svg_ids.css';
import './style.css';

// S JavaScriptem mi pomohl chatGPT jakožto jedinou věc na celé mé stránce, protože jsem se chtěl webování naučit :)

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = Array.from(document.querySelectorAll(".galleryContainer img"));
  let currentIndex = -1;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 1000;
  overlay.style.visibility = "hidden";

  // Create image container
  const largeImg = document.createElement("img");
  largeImg.style.maxWidth = "90%";
  largeImg.style.maxHeight = "90%";
  largeImg.style.borderRadius = "10px";
  largeImg.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  overlay.appendChild(largeImg);

  // Create left/right arrows
  const arrowStyle = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
    user-select: none;
    z-index: 1001;
  `;

  const leftArrow = document.createElement("div");
  leftArrow.innerHTML = "&#10094;";
  leftArrow.style.cssText = arrowStyle + "left: 20px;";
  overlay.appendChild(leftArrow);

  const rightArrow = document.createElement("div");
  rightArrow.innerHTML = "&#10095;";
  rightArrow.style.cssText = arrowStyle + "right: 20px;";
  overlay.appendChild(rightArrow);

  document.body.appendChild(overlay);

  function showImage(index) {
    if (index < 0 || index >= galleryItems.length) return;
    currentIndex = index;
    largeImg.src = galleryItems[currentIndex].src;
    overlay.style.visibility = "visible";
  }

  function hideOverlay() {
    overlay.style.visibility = "hidden";
    currentIndex = -1;
  }

  galleryItems.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => showImage(index));
  });

  leftArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  });

  rightArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage((currentIndex + 1) % galleryItems.length);
  });

  overlay.addEventListener("click", hideOverlay);
  largeImg.addEventListener("click", (e) => e.stopPropagation()); // Prevent closing when clicking on the image
});