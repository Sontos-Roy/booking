// ======== Slider Fun

const SliderFun1 = (className, idName, slideShow) => {
  $(document).ready(function () {
    $(`.${className}`).slick({
      slidesToShow: slideShow,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      loop: true,
      autoplaySpeed: 3000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
};
SliderFun1("partners-slider", null, 5);
