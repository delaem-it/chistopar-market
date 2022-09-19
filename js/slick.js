$(document).ready(function(){
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
      responsive: [
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
              dotsClass: 'slick-dots',
              dots: true,
            }
          }
      ]
    });
   
    $('.slider-partners-prev').click(function(){
      $('#slider-partners').slick('slickPrev');
    });
    $('.slider-partners-next').click(function(){
      $('#slider-partners').slick('slickNext');
    });




    $('#popular_items_slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dotsClass: 'slick-dots',
      arrow: false,
      prevArrow: $('.slider-popular_items-prev'),
      nextArrow: $('.slider-popular_items-next'),
      responsive: [
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
              dotsClass: 'slick-dots',
              dots: true,
            }
          }
      ]
    });

    $('#new_items_slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dotsClass: 'slick-dots',
      arrow: false,
      prevArrow: $('.slider-popular_items-prev'),
      nextArrow: $('.slider-popular_items-next'),
      responsive: [
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
              dotsClass: 'slick-dots',
              dots: true,
            }
          }
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
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
              dotsClass: 'slick-dots',
              dots: true,
            }
          }
      ]
    });

    
    
   
});