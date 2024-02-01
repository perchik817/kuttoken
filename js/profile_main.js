const crossButton = document.querySelector(".header__menu-icon");
const crossUpLine = document.querySelector(".first-line");
const crossDownLine = document.querySelector(".second-line");
const navbarLayer = document.querySelector(".header__navbar");
const logo = document.querySelector(".header__logo2");

crossButton.addEventListener("click", function() {
    crossButton.classList.toggle("active");
    navbarLayer.classList.toggle("active");
    logo.classList.toggle("active");
})

const navbarLinks = document.querySelectorAll(".header__navbar a");
navbarLinks.forEach((link) => {
    link.addEventListener("click", function(){
        crossButton.classList.remove("active");
        navbarLayer.classList.remove("active");
    });
})

function handleResize() {
    updateContent(); 
}

window.addEventListener('resize', handleResize);

window.addEventListener('load', updateContent);

function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '100%') {
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '100%';
    }
  }


//cover change popup
const coverChangeBtn = document.getElementById('coverChangeBtn');
const coverPopup = document.getElementById('coverPopup');
const closeCoverPopupBtn = document.getElementById('closeCoverPopup');

coverChangeBtn.addEventListener('click', function() {
    coverPopup.classList.add('show');
});

closeCoverPopupBtn.addEventListener('click', function() {
    coverPopup.classList.remove('show');
});

// profile change popup
const profileChangeBtn = document.getElementById('profileChangeBtn');
const profilePopup = document.getElementById('profilePopup');
const closeProfilePopupBtn = document.getElementById('closeProfilePopup');

profileChangeBtn.addEventListener('click', function() {
    profilePopup.classList.add('show');
});

closeProfilePopupBtn.addEventListener('click', function() {
    profilePopup.classList.remove('show');
});

// profile change2 popup
const profileChangeBtn2 = document.getElementById('profileChangeBtn2');
const profilePopup2 = document.getElementById('profilePopup2');
// const closeProfilePopupBtn2 = document.getElementById('closeProfilePopup2');

profileChangeBtn.addEventListener('click', function() {
    profilePopup.classList.add('show');
});

closeProfilePopupBtn.addEventListener('click', function() {
    profilePopup.classList.remove('show');
});

//input 
document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll('.input');
    
    inputFields.forEach((input) => {
        const label = input.nextElementSibling;

        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('has-text');
            } else {
                input.classList.remove('has-text');
            }
        });

        input.addEventListener('focus', function () {
            label.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            label.classList.remove('focused');
        });
    });
});