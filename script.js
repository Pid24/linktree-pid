// Wait for the window to load
window.onload = function () {
  // Animate the container
  const container = document.getElementById("container");
  container.style.opacity = "1";
  container.style.transform = "translateY(0) scale(1)";

  // Animate the links with a slight delay and stagger
  const links = document.querySelectorAll(".link");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0) scale(1)";
      link.style.animation = "linkEntry 0.6s ease-out forwards";
    }, (index + 1) * 200); // stagger animations by 200ms
  });
};
