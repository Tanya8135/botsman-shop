const lastPublic = document.querySelector('.last-public')

lastPublic.innerHTML = `
<h2 class="section-title__dark section-title__last-public">
    <span class="letter">П</span>оследние публикации
  </h2>

  <div class="lp-catalog-box" id="catalog">
    <a href="./catalog.html" class="lp-catalog"
      >Перейти до каталогу
      <div class="lp-arrow">
        <svg width="24" height="24">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg></div
    ></a>
  </div>

  <article class="card-prod">
    <div class="swiper-container lp-img">
      <ul class="swiper-wrapper lp-img-list">
        <li class="swiper-slide lp-item">
          <article class="lp-card overlay-card">
            <div class="lp-img-box">
              <img
                srcset="
                  ./images/mob/public-slide/pink_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/pink_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/pink_pouf_mob_270.png"
                alt="Pink puof"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
              <!-- <div class="modal">
                <div class="modal__inner">
                  <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
                </div>
              </div>
              <button class="button btn">Еще...</button> -->
            </div>

            <p class="lp-name">pink pouf</p>
          </article>
        </li>
        <li class="swiper-slide lp-item">
          <article class="lp-card">
            <div class="lp-img-box overlay-card">
              <img
                srcset="
                  ./images/mob/public-slide/black_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/black_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/black_pouf_mob_270.png"
                alt="Black puof"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
            </div>

            <p class="lp-name">Black puof</p>
          </article>
        </li>
        <li class="swiper-slide lp-item">
          <article class="lp-card">
            <div class="lp-img-box overlay-card">
              <img
                srcset="
                  ./images/mob/public-slide/blue_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/blue_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/blue_pouf_mob_270.png"
                alt="Blue puof"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
            </div>
            <p class="lp-name">Blue puof</p>
          </article>
        </li>
        <li class="swiper-slide lp-item">
          <article class="lp-card">
            <div class="lp-img-box overlay-card">
              <img
                srcset="
                  ./images/mob/public-slide/gray_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/gray_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/gray_pouf_mob_270.png"
                alt="Gray puof"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
            </div>
            <p class="lp-name">Gray puof</p>
          </article>
        </li>
        <li class="swiper-slide lp-item">
          <article class="lp-card">
            <div class="lp-img-box overlay-card">
              <img
                srcset="
                  ./images/mob/public-slide/green_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/green_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/green_pouf_mob_270.png"
                alt="Green puof"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
            </div>
            <p class="lp-name">Green puof</p>
          </article>
        </li>
        <li class="swiper-slide lp-item">
          <article class="lp-card">
            <div class="lp-img-box overlay-card">
              <img
                srcset="
                  ./images/mob/public-slide/terracotta_pouf_mob_270.png   270w,
                  ./images/mob/public-slide/terracotta_pouf@2_mob_270.png 540w
                "
                sizes="(min-width: 375px) 270px, 100vw"
                src="./images/mob/public-slide/terracotta_pouf_mob_270.png"
                alt="Terracotta pouf"
              />

              <p class="overlay-text">Краткая информация. Цена <a href="">link</a></p>
            </div>

            <p class="lp-name">Terracotta pouf</p>
          </article>
        </li>
      </ul>
      <div class="swiper-scrollbar"></div>
    </div>
  </article>
`