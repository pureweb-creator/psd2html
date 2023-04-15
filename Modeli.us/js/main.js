$(document).ready(function() {
  $('.slogan').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="wow slideInRight slick-next slick-arrow"><img src="img/arrow_right.svg" /></button>',
    prevArrow: '<button type="button" class="slick-prev wow slideInLeft slick-arrow"><img src="img/arrow_left.svg" /></button>'
  });

  // Slow scroll
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
     var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 500); // анимируем скроллинг к элементу scroll_el
      }
    return false; // выключаем стандартное действие
  });

  // Mobile menu button
  $('.menu-button').on('click', function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });
  $('.main-nav__link--mobile').on('click', function(){
    $('.menu-button').removeClass('active');
    $('.mobile-menu').removeClass('active');
  });
});
