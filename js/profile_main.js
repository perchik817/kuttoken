// tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        if (target) {
            target.classList.add('tab__active');      
        }

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

// header
const crossButton = document.querySelector(".header__menu-icon");
const crossUpLine = document.querySelector(".first-line");
const crossDownLine = document.querySelector(".second-line");
const navbarLayer = document.querySelector(".nav_list");
const headerNav = document.querySelector(".header-nav");

crossButton.addEventListener("click", function () {
  crossButton.classList.toggle("active");
  navbarLayer.classList.toggle("active");
  headerNav.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll(".header_nav a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    crossButton.classList.remove("active");
    navbarLayer.classList.remove("active");
    headerNav.classList.remove("active");
  });
});

function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "100%") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "100%";
  }
}

// cover popup
const coverChangeBtn = document.getElementById("coverChangeBtn");
const coverPopup = document.getElementById("coverPopup");
const closeCoverPopupBtn = document.getElementById("closeCoverPopup");
coverChangeBtn.addEventListener("click", function () {
    coverPopup.classList.add("show");
});
  
closeCoverPopupBtn.addEventListener("click", function () {
coverPopup.classList.remove("show");
});
  
// profile popup
const profileChangeBtn = document.getElementById("profileChangeBtn");
const profilePopup = document.getElementById("profilePopup");
const closeProfilePopupBtn = document.getElementById("closeProfilePopup");
  profileChangeBtn.addEventListener("click", function () {
    console.log("Profile change button clicked");
    profilePopup.classList.add("show");
  });
  
  closeProfilePopupBtn.addEventListener("click", function () {
    console.log("Close profile popup button clicked");
    profilePopup.classList.remove("show");
  });

//input profile change
document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(".input");

  inputFields.forEach((input) => {
    const label = input.nextElementSibling;

    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.add("has-text");
      } else {
        input.classList.remove("has-text");
      }
    });

    input.addEventListener("focus", function () {
      label.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      label.classList.remove("focused");
    });
  });
});
