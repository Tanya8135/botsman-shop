import listPouf from "./LoadMoreList/itemPoufs"
import { v4 as uuidv4 } from 'uuid'

const catalog = document.querySelector('.catalog')

catalog.innerHTML = `
<div class="catalog-container container">
    <!-- POUFS -->
    <div class="catalog-poufs">
      <h1 hidden></h1>
      <h2 class="catalog-poufs__title" id="poufs">Пуфи</h2>

      <ul class="catalog-list"></ul>
      <div class="card-product container"></div>
    </div>

    <button type="button" class="btn-loadMore">
      Показати більше
      <div class="btn-loadMore__arrow">
        <svg width="24" height="22">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg>
      </div>
    </button>
</div>
`;

const itemsToShow = 4
const itemShow = 0

function renderCard() {
  const addItemArt = listPouf.slice(itemShow, itemShow + itemsToShow)

  const addItemContent = addItemArt.map(item => {
    const uniqueId = uuidv4()
    return `
    <li class="catalog-item" id="${uniqueId}">
    <article class="art-cardOpen">
      <img
        srcset="${item.srcset}"
        sizes="${item.sizes}"
        src="${item.src}"
        alt="${item.alt}"
      />
      <div class="catalog-name">
        <p class="catalog-name__text">Pink pouf</p>
      </div>
    </article>
  </li>
    `
  })

  catalog.querySelector('.catalog-list').innerHTML = addItemContent.join('')


}

renderCard()