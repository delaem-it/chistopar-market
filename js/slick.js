$(document).ready(function () {
  //Используй для slick js лучше id
  $('#best_for_spa_slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-partners-prev'),
    nextArrow: $('.slider-partners-next'),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       dotsClass: 'slick-dots',
    //       dots: true,
    //     }
    //   }
    // ]
  });

  $('.slider-partners-prev').click(function () {
    $('#slider-partners').slick('slickPrev');
  });
  $('.slider-partners-next').click(function () {
    $('#slider-partners').slick('slickNext');
  });

  $('#hits_slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.hits-prev'),
    nextArrow: $('.hits-next'),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       dotsClass: 'slick-dots',
    //       dots: true,
    //     }
    //   }
    // ]
  });


  $('#popular_items_slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-popular_items-prev'),
    nextArrow: $('.slider-popular_items-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          dotsClass: 'slick-dots',
          dots: false,
        }
      }
    ]
  });

  $('#new_items_slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-popular_items-prev'),
    nextArrow: $('.slider-popular_items-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          dotsClass: 'slick-dots',
          dots: false,
        }
      }
    ]
  });

  $('#similar_slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-popular_items-prev'),
    nextArrow: $('.slider-popular_items-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.9,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      // {
      //   breakpoint: 530,
      //   settings: {
      //     slidesToShow: 1,
      //     dotsClass: 'slick-dots',
      //     dots: false,
      //   }
      // }
    ]
  });

  $('#early_slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-popular_items-prev'),
    nextArrow: $('.slider-popular_items-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.9,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },

    ]
  });

  $('#FAQ_slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    arrow: false,
    prevArrow: $('.slider-FAQ-prev'),
    nextArrow: $('.slider-FAQ-next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dotsClass: 'slick-dots',
          dots: false,
        }
      },
    ]
  });




});