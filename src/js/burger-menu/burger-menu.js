const burgerMenu = document.querySelector('.menu-container')

burgerMenu.innerHTML = `
<!-- btn-close -->
  <button class="menu-toggle menu-close js-close-menu">
    <svg width="30" height="30">
      <use href="./images/icons.svg#icon-close"></use>
    </svg>
  </button>

  <div class="burger-menu">
    <div class="burger-menu__box">
      <ul class="burger-menu__list">
        <li class="burger-menu__item">
          <a href="./catalog.html" class="burger-menu__link">Каталог</a>
        </li>
        <li class="burger-menu__item">
          <a href="#individ-furniture" class="burger-menu__link">Индивидуальная мебель</a>
        </li>
        <li class="burger-menu__item">
          <a href="#our-histury" class="burger-menu__link">Наша история</a>
        </li>
        <li class="burger-menu__item">
          <a href="#public" class="burger-menu__link">Публикации</a>
        </li>
        <li class="burger-menu__item">
          <a href="#info" class="burger-menu__link">Информация</a>
        </li>
        <li class="burger-menu__item">
          <a href="#contact" class="burger-menu__link">Контакты</a>
        </li>
      </ul>
    </div>

    <div class="bm-s">
      <ul class="bm-s__list">
        <li class="bm-s__item">
          <a
            href=""
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="bm-s__link"
          >
            <svg width="42" height="42">
              <use href="./images/icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li class="bm-s__item">
          <a
            href=""
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="bm-s__link"
          >
            <svg width="42" height="42">
              <use href="./images/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li class="bm-s__item">
          <a
            href=""
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="bm-s__link"
          >
            <svg width="42" height="42">
              <use href="./images/icons.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
      <div class="bm-s__tel">
        <a href="tel:+380996384537" class="bm-s__link">+38 (099)-638-45-37</a>
      </div>
    </div>
  </div>
`