window.onload = function () {
  // Animate the container
  const container = document.getElementById("container");
  container.style.opacity = "1";
  container.style.transform = "translateY(0) scale(1)";

  // Animate the profile picture with a delay
  const profilePicture = document.querySelector(".profile-picture");
  setTimeout(() => {
    profilePicture.style.opacity = "1";
    profilePicture.style.transform = "scale(1) rotate(0deg)";
  }, 300); // 300ms delay

  // Animate the profile name
  const profileName = document.querySelector(".profile h1");
  setTimeout(() => {
    profileName.style.opacity = "1";
    profileName.style.transform = "translateY(0)";
  }, 500); // 500ms delay

  // Animate the links with a slight delay and stagger
  const links = document.querySelectorAll(".link");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0) scale(1)";
    }, (index + 1) * 200 + 600); // stagger animations by 200ms with an initial delay of 600ms
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const icon = darkModeToggle.querySelector("i");

  const updateIcon = () => {
    if (document.body.classList.contains("dark-mode")) {
      icon.className = "fas fa-sun"; // Sun icon for light mode
      darkModeToggle.innerText = " Light Mode";
    } else {
      icon.className = "fas fa-moon"; // Moon icon for dark mode
      darkModeToggle.innerText = " Dark Mode";
    }
  };

  // Add event listener to toggle dark mode
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateIcon();
  });

  // Set initial icon based on the current mode
  updateIcon();
};
