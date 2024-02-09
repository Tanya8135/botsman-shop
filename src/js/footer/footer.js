const footer = document.querySelector('.footer')

footer.innerHTML = `
<div class="footer-container">
    <div class="footer-grid">
      <ul class="footer-list">
        <li class="footer-item">
          <a href="#catalog" class="footer-link">Каталог</a>
        </li>
        <li class="footer-item">
          <a href="#contact" class="footer-link">Контакты</a>
        </li>
        <li class="footer-item">
          <a href="#individ-furniture" class="footer-link"
            >Индивидуальная мебель</a
          >
        </li>
        <li class="footer-item">
          <a href="#info" class="footer-link">О компании</a>
        </li>
      </ul>
    </div>

    <!-- добавить hover, acrive на иконски соцсетей -->
    <div class="footer-social-container">
      <div class="footer-tel">
        <a href="tel:+380996384537" class="footer-tel__tel"
          >+38 (099)-638-45-37</a
        >
      </div>
      <ul class="fs-list">
        <li class="fs-item">
          <a href="" class="fs-link">
            <svg width="38" height="38">
              <use href="./images/icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li class="fs-item">
          <a href="" class="fs-link">
            <svg width="38" height="38">
              <use href="./images/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li class="fs-item">
          <a href="" class="fs-link">
            <svg width="38" height="38">
              <use href="./images/icons.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div class="logo-footer">
      <a href="./index.html">
        <img src="./images/logoBotsmanMax.svg" alt="logo" />
      </a>
    </div>

    <div class="policy-info-box">
      <p class="policy-info">
        &#169; 2021–2024 Інтернет-магазин «<span class="policy-info__transform"
          >БОЦМАН</span
        >&#8482;»
      </p>
    </div>
  </div>
`