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
        dynamicContent.src = './imgs/KDI-logo.png';
    }
}

function handleResize() {
    updateContent(); 
}

window.addEventListener('resize', handleResize);

window.addEventListener('load', updateContent);

document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var header = document.querySelector('.header');

    window.addEventListener("scroll", function(){
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll <= 0) {
            // Верх страницы
            header.style.position = 'absolute';
            header.style.backgroundColor = 'transparent'; // Сделать шапку прозрачной
            header.style.zIndex = "1";
        } else if (currentScroll > lastScrollTop){
            // Прокрутка вниз
            header.style.position = 'absolute';
            header.style.backgroundColor = 'transparent'; // Вернуть исходный цвет фона
        } else {
            // Прокрутка вверх
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.backgroundColor = '#0A0A0A';
            header.style.zIndex = "1000";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Обновить lastScrollTop к текущему положению скролла
    });
});


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