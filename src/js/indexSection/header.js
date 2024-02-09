const header = document.querySelector('.header')

header.innerHTML = `
<div class="header-container container">
    <div class="header-mob">
      <div class="logo">
        <a href="./index.html" class="logo-s">
          <img src="./images/logoBotsmanMin.svg" alt="logo" class="logo-s" />
        </a>
      </div>

      <div class="header-nav-mob">
        <div class="icon-phone-box">
          <a href="tel:+380964875185" class="icon-phone">
            <svg width="24" height="24">
              <use href="./images/icons.svg#icon-phone"></use>
            </svg>
          </a>
        </div>

        <div class="burger-menu-box">
          <button
            type="button"
            class="menu-toggle js-open-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg width="40" height="40">
              <use href="./images/icons.svg#icon-burger-menu"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
`