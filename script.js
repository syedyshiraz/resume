document.addEventListener("DOMContentLoaded", () => {
  fetch("body-content.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;

      // Initialize AOS after content is injected
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });

      // Carousel logic should go HERE — after the content is injected
      const carousel = document.getElementById("skills-carousel");
      const prevButton = document.getElementById("prevBtn");
      const nextButton = document.getElementById("nextBtn");
      const cardWidth = 200;
      const gap = 16;
      const visibleCount = 3;
      const items = Array.from(carousel.children);
      items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
      });

      let scrollAmount = cardWidth + gap;

      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
          carousel.scrollLeft -= scrollAmount;
        });

        nextButton.addEventListener("click", () => {
          carousel.scrollLeft += scrollAmount;
        });
      }

      const updateButtonsVisibility = () => {
        if (carousel) {
          prevButton.style.display = carousel.scrollLeft > 0 ? "block" : "none";
          nextButton.style.display =
            carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
              ? "block"
              : "none";
        }
      };

      carousel.addEventListener("scroll", updateButtonsVisibility);
      updateButtonsVisibility();

      let intervalId;
      function startAutoScroll() {
        intervalId = setInterval(() => {
          if (carousel) {
            carousel.scrollLeft += scrollAmount;
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
              carousel.scrollLeft = 0;
            }
          }
        }, 3000);
      }

      function stopAutoScroll() {
        clearInterval(intervalId);
      }

      carousel.addEventListener("mouseenter", stopAutoScroll);
      carousel.addEventListener("mouseleave", startAutoScroll);
      startAutoScroll();
    })
    .catch((error) => {
      console.error("Error loading body-content.html:", error);
    });
});
