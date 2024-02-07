// import Swiper from "swiper";
// import "swiper/css/swiper.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

// // Імпорт самого Swiper
// import Swiper from 'swiper';

// // Якщо використовуєте ES6, можете імпортувати стилі окремо
// import 'swiper/swiper-bundle.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//     // Відкладений імпорт, щоб гарантувати, що Swiper та його стилі завантажаться
//     import('swiper/swiper-bundle.min.js').then(() => {
//         // Тепер ініціалізуємо Swiper
//         var swiper = new Swiper('.swiper', {
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         });
//     });
// });