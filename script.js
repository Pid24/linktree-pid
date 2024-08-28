window.onload = function () {
  const container = document.getElementById("container");
  container.style.opacity = "1";
  container.style.transform = "translateY(0) scale(1)";

  const profilePicture = document.querySelector(".profile-picture");
  setTimeout(() => {
    profilePicture.style.opacity = "1";
    profilePicture.style.transform = "scale(1) rotate(0deg)";
  }, 300);

  const profileName = document.querySelector(".profile h1");
  setTimeout(() => {
    profileName.style.opacity = "1";
    profileName.style.transform = "translateY(0)";
  }, 500);

  const links = document.querySelectorAll(".link");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0) scale(1)";
    }, (index + 1) * 200 + 600);
  });

  const darkModeToggle = document.getElementById("darkModeToggle");
  const icon = darkModeToggle.querySelector("i");

  const updateIcon = () => {
    if (document.body.classList.contains("dark-mode")) {
      icon.className = "fas fa-sun";
      darkModeToggle.innerText = " Light Mode";
    } else {
      icon.className = "fas fa-moon";
      darkModeToggle.innerText = " Dark Mode";
    }
  };

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateIcon();
  });

  updateIcon();

  // Easter Egg Activation (Press "Shift + E")
  document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key === "E") {
      alert("You've discovered an Easter Egg!");
      // Additional surprise effect or content can be added here.
    }
  });
};
