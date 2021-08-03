$(document).ready(function () {
  $(".carousel").slick({
    arrow: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: ".slick-arrow-prev",
    nextArrow: ".slick-arrow-next",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
