$(document).ready(function(){
  $('.slider__list').slick({
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
    arrows: false,
    dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });
});

