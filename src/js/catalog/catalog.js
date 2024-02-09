const catalog = document.querySelector('.catalog')

catalog.innerHTML = `
<div class="catalog-container container">
    <!-- POUFS -->
    <div class="catalog-poufs">
      <h1 hidden></h1>
      <h2 class="catalog-poufs__title">Пуфи</h2>

      <ul class="catalog-list">
        <li class="catalog-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/pouf/pink_poug_160.png   160w,
                ./images/mob/catalog/pouf/pink_poug@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/pouf/pink_poug_160.png"
              alt="Pink pouf"
            />
          </article>
        </li>
        <li class="catalog-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/pouf/black_pouf_160.png   160w,
                ./images/mob/catalog/pouf/black_pouf@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/pouf/black_pouf_160.png"
              alt="Black pouf"
            />
          </article>
        </li>
        <li class="catalog-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/pouf/gray_pouf_160.png   160w,
                ./images/mob/catalog/pouf/gray_pouf@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/pouf/gray_pouf_160.png"
              alt="Gray pouf"
            />
          </article>
        </li>
        <li class="catalog-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/pouf/blue_pouf_160.png   160w,
                ./images/mob/catalog/pouf/blue_pouf@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/pouf/blue_pouf_160.png"
              alt="Blue pouf"
            />
          </article>
        </li>
      </ul>
    </div>
    <!-- <ul class="list-loadMore"></ul> -->
    <button type="button" class="btn-loadMore">
      Показати більше
      <div class="btn-loadMore__arrow">
        <svg width="24" height="22">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg>
      </div>
    </button>

    <!-- SOFA -->
    <div class="catalog-sofa">
      <h2 class="catalog-poufs__title">Дивани</h2>
      <ul class="catalog-list">
        <li class="catalog-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/sofa/sofa_160.png   160w,
                ./images/mob/catalog/sofa/sofa@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/sofa/sofa_160.png"
              alt="Yellow sofa"
            />
          </article>
        </li>
      </ul>
    </div>

    <!-- Tables -->
    <div class="catalog-table">
      <h2 class="catalog-poufs__title">Столи</h2>
      <ul class="catalog-list table-list">
        <li class="catalog-item table-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/table/rodos_table_white_160.png   160w,
                ./images/mob/catalog/table/rodos_table_white@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/table/rodos_table_white_160.png"
              alt=""
            />
          </article>
        </li>
        <li class="catalog-item table-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/table/mylolaev_table_160.png   160w,
                ./images/mob/catalog/table/mylolaev_table@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/table/mylolaev_table_160.png"
              alt=""
            />
          </article>
        </li>
        <li class="catalog-item table-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/table/rodos_table_red_160.png   160w,
                ./images/mob/catalog/table/rodos_table_red@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/table/rodos_table_red_160.png"
              alt=""
            />
          </article>
        </li>
        <li class="catalog-item table-item">
          <article>
            <img
              srcset="
                ./images/mob/catalog/table/rodos_table_dark-gray_160.png   160w,
                ./images/mob/catalog/table/rodos_table_dark-gray@2_160.png 320w
              "
              sizes="(min-width: 375px) 160px, 100vw"
              src="./images/mob/catalog/table/rodos_table_dark-gray_160.png"
              alt=""
            />
          </article>
        </li>
      </ul>
    </div>
    <button type="button" class="btn-loadMore btnTable-loadMore">
      Показати більше
      <div class="btn-loadMore__arrow">
        <svg width="24" height="22">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg>
      </div>
    </button>
  </div>
`