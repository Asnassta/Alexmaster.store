$(document).ready(function() {

  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".menu-mobile").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

  /*======Search-toggle=============*/
  $(".menu-search").on("click", function(event) {
    event.preventDefault();
    $(".menu-search__form").slideToggle();
  });
  $(".menu-search__close").on("click", function() {
    $(".menu-search__form").slideUp();
  });
  /*==========/search-toggle=========*/

  /*======Catalog-drop=============*/
  $(function(){
    if ($(window).width() < 900){
        $(".catalog-drop__btn").on("click", function() {
          $(".catalog-drop__box").fadeToggle();
          $(".catalog-drop__btn").toggleClass('active');
        });

        $(".catalog-drop__close").on("click", function() {
          $(".catalog-drop__box").fadeOut();
          $(".catalog-drop__btn").removeClass('active');
        });
    }
    else{
        $(".catalog-drop").hover( function() {
          $(".catalog-drop__box").fadeToggle();
          $(".catalog-drop__btn").toggleClass('active');
        });
    }
});
  /*==========/catalog-drop=========*/

  /*======Phone-drop=============*/
  
  $(".footer-phone").hover( function() {
    $(".footer-phone__dropdown").fadeToggle(444);
    $(".footer-menu__link-phone").toggleClass('active');
  });
  /*==========/phone-drop=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset 
    }, 500);
  });
/*=========/smooth scroll=============*/

/*======Slider-intro=============*/
  $('.intro__slider').slick({
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
  });
  /*=============/slider-intro==============*/

  /*======Slider-reviews=============*/
  $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.reviews-nav__arrow_prev'),
      nextArrow: $('.reviews-nav__arrow_next'),
      responsive: [
    {
      breakpoint: 766,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.reviews-nav__arrow_prev'),
        nextArrow: $('.reviews-nav__arrow_next'),
      }
    },
    {
      breakpoint: 415,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews-nav__arrow_prev'),
        nextArrow: $('.reviews-nav__arrow_next'),
      }
    },
  ]
  });
  /*=============/slider-reviews==============*/

  /*======Slider-design=============*/
  $('.design__slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.design__arrow_prev'),
      nextArrow: $('.design__arrow_next'),
      responsive: [
    {
      breakpoint: 415,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        prevArrow: $('.design__arrow_prev'),
        nextArrow: $('.design__arrow_next'),
      }
    },
  ]
  });
  /*=============/slider-design==============*/


	
});