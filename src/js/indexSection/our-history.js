const ourHistory = document.querySelector('.our-histury')

ourHistory.innerHTML = `
<div class="our-histury-container">
    <div class="custom-furnitere-text-box">
      <h2 class="section-title__dark section-title__ourHistory title-test">
        <span class="letter">Н</span>аша история
      </h2>

      <div class="our-history-text-box">
        <p class="section-subtitle section-subtitle__ourHistory">
          Наработки длинной в 25 лет
        </p>
        <p class="section-text section-text__48">
          Каждый производитель заявляет, что делает все для своих покупателей,
          но не каждый производитель способен подтвердить свои заявления
          многолетней историей
        </p>
      </div>
    </div>

    <div class="our-histury-box">
      <div class="our-histury-img">
        <img
          srcset="
            ./images/mob/our_history_340.png   340w,
            ./images/mob/our_history@2_340.png 680w
          "
          sizes="(min-width: 375px) 340px, 100vw"
          src="./images/mob/our_history_340.png"
          alt="interior"
        />
      </div>
      <div class="rectangleCF4"></div>
    </div>
  </div>
`