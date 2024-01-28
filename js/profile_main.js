// Функция для замены содержимого в зависимости от размера экрана
function updateContent() {
    const dynamicContent = document.getElementById('logo');
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
        dynamicContent.src = './imgs/KutToken-logo.png';
    } else if (screenWidth <= 1200 && screenWidth > 768) {
        dynamicContent.src = './imgs/KutToken-logo.png';
    } else if (screenWidth <= 768 && screenWidth > 400) {
        dynamicContent.src = './imgs/KDI-logo.png';
    } else {
        dynamicContent.src = 'imgs/KDI-logo.png';
    }
}

// Функция для обработки события изменения размера экрана
function handleResize() {
    updateContent(); // Вызываем функцию обновления содержимого при изменении размера окна
}

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', handleResize);

// Вызываем функцию updateContent() при загрузке страницы
window.addEventListener('load', updateContent);


// header nav
function scrollHeader() {
      const header = document.getElementById('header');
      if (this.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
}
  
window.addEventListener('scroll', scrollHeader);

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