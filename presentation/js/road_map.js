$(document).ready(function () {

  //  ON CLICKING EVENT
  $(".event").click(function () {
    // IF ITS ALREADY ACTIVE, REMOVE IT
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#selected").text("");
      

      $("#style").html(
        "<style>.horizontal-line::after {    width:calc(" +
          0 +
          "px);z-index:0; }</style>"
      );
    } else {
      $(".timeline").find(".active").removeClass("active");
      $(this).addClass("active");

      $("#style").html(
        "<style>.horizontal-line::after {    width:calc(" +
          $(this).position().left +
          "px + 90px);z-index:0;  }</style>"
      );

      $("#selected").text($(".timeline").find(".active").find("p").text());
    }
  });
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}
