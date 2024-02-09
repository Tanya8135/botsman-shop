const individFurniture = document.querySelector('.individ-furnitere')

individFurniture.innerHTML = `
<div class="individ-furnitere-container">
    <div class="rectangleCF1">
      <div class="rectangleCF1__text">furniture</div>
    </div>

    <div class="individ-furnitere-text-box">
      <h2 class="section-title title-test">
        <span class="letter">И</span>ндивидуальная мебель
      </h2>
      <p class="section-subtitle">Полный цикл производства.</p>

      <p class="section-text">
        Качество мягкой мебели начинается задолго до начала ее производства.
      </p>
    </div>

    <div class="individ-furnitere-box">
      <div class="rectangleCF2">
        <img src="./images/grid.svg" alt="grid" class="gridCF" />
      </div>
      <div class="if-img">
        <img
          srcset="
            ./images/mob/if_white_poufs_340.png   340w,
            ./images/mob/if_white_poufs@2_340.png 680w
          "
          sizes="(min-width: 375px) 340px, 100vw"
          src="./images/mob/if_white_poufs_340.png"
          alt="white poufs"
        />
      </div>

      <div class="rectangleCF3"></div>
    </div>

    <button type="button" class="btn">Индивидуальная мебель</button>
  </div>
`