$(document).ready(function () {
  // первый слайдер
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });
  // второй слайдер
   const twoSwiper = new Swiper(".slidertwo", {
     loop: true,

     // Navigation arrows
     navigation: {
       nextEl: ".slider-button-next",
       prevEl: ".slider-button-prev",
     },
   });
// video
  $("#test").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "https://source.unsplash.com/IvfoDk30JnI/1500x1000",
          opts: {
            caption: "First caption",
            thumb: "https://source.unsplash.com/IvfoDk30JnI/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
  $(".phone").mask("+7(999)999-99-99");
});
