document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project_card");
    const projectPopup = document.querySelector(".project_popup");
    const closeProjectPopupBtn = document.querySelector(".project_popup_close");
  
    projectCards.forEach(function(card) {
      card.addEventListener("click", function() {
        console.log("Кнопка карточки проекта нажата");
        projectPopup.classList.add("show");
      });
    });
  
    closeProjectPopupBtn.addEventListener("click", function() {
      console.log("Кнопка закрытия попапа проекта нажата");
      projectPopup.classList.remove("show");
    });
  });
  