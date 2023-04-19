document.addEventListener("DOMContentLoaded", () => {
  const navigationList = document.querySelector(".navigation-list");
  const navigationItems = document.querySelectorAll(".navigation-item");
  const navigationActiveItem = document.querySelector(
    ".navigation-item.active"
  );

  const navigationSlide = document.querySelector(".navigation-slide");

  const navigationWidth = navigationActiveItem.offsetWidth;
  const navigationLeft = navigationActiveItem.offsetLeft;

  navigationItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      navigationSlide.style.width = `${item.offsetWidth}px`;
      navigationSlide.style.left = `${item.offsetLeft}px`;
      navigationSlide.style.opacity = 1;
    });

    item.addEventListener("click", (event) => {
      event.preventDefault();
      navigationItems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      navigationSlide.style.width = `${item.offsetWidth}px`;
      navigationSlide.style.left = `${item.offsetLeft}px`;
    });
  });
});
