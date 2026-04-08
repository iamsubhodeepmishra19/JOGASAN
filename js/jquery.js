$(function () {
  let stickyNavTop = $("header").offset().top;

  function stickyNav() {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if (scrollTop > stickyNavTop) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  }
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });
});
