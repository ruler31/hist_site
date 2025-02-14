$(document).ready(function(){
  // Инициализация слайдера
  $('.slick-slider').slick({
    arrows: true, // Включаем стрелки
    dots: true, // Включаем точки
    centerMode: false, // Без центрирования
    infinite: true, // Бесконечное прокручивание
    slidesToShow: 3, // Показываем 3 слайда за раз
    slidesToScroll: 1, // Прокручиваем 1 слайд за раз
    autoplay: true, // Автоплей включен
    autoplaySpeed: 3000, // Скорость автоплея (3 секунды)
    responsive: [
      {
        breakpoint: 768, // Для устройств с маленьким экраном
        settings: {
          slidesToShow: 1, // Показываем 1 слайд
        }
      }
    ]
  });
});
