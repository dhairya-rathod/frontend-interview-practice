"use strict";

(() => {
  let rating = 0;
  const starContainer = document.querySelector(".star-container");
  const stars = starContainer.querySelectorAll("li");

  if (stars.length > 0) {
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        rating = rating === index + 1 ? 0 : index + 1;
        stars.forEach((star_, index) => {
          star_.style.color = index < rating ? "yellow" : "grey";
        });
      });

      star.addEventListener("mouseenter", () => {
        for (let i = 0; i <= index; i++) {
          stars[i].style.color = "yellow";
        }
      });
      star.addEventListener("mouseleave", () => {
        for (let i = rating; i <= index; i++) {
          stars[i].style.color = "grey";
        }
      });
    });
  }
})();

