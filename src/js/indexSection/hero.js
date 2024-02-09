const hero = document.querySelector('.hero')

hero.innerHTML = `
<div class="hero-container">
    <h1 class="hero-title title-test">
      <span class="letter">Л</span>учшая жизнь созданная для вас!
    </h1>

    <div class="swiper hero-img">
      <ul class="swiper-wrapper hero-img-slider">
        <li class="swiper-slide">
          <img
            srcset="
              ./images/mob/hero-slide/hero-mob1_375.png   375w,
              ./images/mob/hero-slide/hero-mob1@2_375.png 750w
            "
            sizes="(min-width: 375px) 375px, 100vh"
            src="./images/mob/hero-slide/hero-mob1_375.png"
            alt="gray sofa and pouf "
          />
        </li>
        <li class="swiper-slide">
          <img
            srcset="
              ./images/mob/hero-slide/hero-mob2_375.png   375w,
              ./images/mob/hero-slide/hero-mob2@2_375.png 750w
            "
            sizes="(min-width: 375px) 375px, 100vh"
            src="./images/mob/hero-slide/hero-mob2_375.png"
            alt="gray table and white pouf"
          />
        </li>
        <li class="swiper-slide">
          <img
            srcset="
              ./images/mob/hero-slide/hero-mob3_375.png   375w,
              ./images/mob/hero-slide/hero-mob3@2_375.png 750w
            "
            sizes="(min-width: 375px) 375px, 100vh"
            src="./images/mob/hero-slide/hero-mob3_375.png"
            alt="gray table and green pouf"
          />
        </li>
      </ul>

      <div class="swiper-pagination"></div>
    </div>

    <div class="btn-box">
      <button class="btn hero-btn">Перейти в каталог</button>
    </div>
  </div>
`