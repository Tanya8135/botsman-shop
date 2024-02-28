import listPouf from "./LoadMoreList/itemPoufs"
import cardPouf from './listProduct/cardPouf'
// import { v4 as uuidv4 } from 'uuid'

const catalog = document.querySelector('.catalog')
const existingUl = document.querySelector('.catalog-list');
// const loadMoreBtn = document.querySelector('.btn-loadMore');
const cardProduct = document.querySelector('.card-product')
const itemCardPouf = document.createElement('div')

catalog.innerHTML = `
<div class="catalog-container container">
    <!-- POUFS -->
    <div class="catalog-poufs">
      <h1 hidden></h1>
      <h2 class="catalog-poufs__title" id="poufs">Пуфи</h2>

      <ul class="catalog-list"></ul>
      <div class="card-product is-none container"></div>
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
`

itemCardPouf.className = 'card-product__box'

function renderCardProduct(itemId) {
  const desiredCard = cardPouf.find(item => item.id === itemId)
  const urlParams = new URLSearchParams()
  console.log(itemId);

  if (desiredCard) {
    /**
 * CLOSE
 */
    const closeBtn = document.createElement('button')
    closeBtn.type = 'button'
    closeBtn.className = 'closeCardProd'
    closeBtn.textContent = 'Close'

    // Оновлення innerHTML для нових даних
    itemCardPouf.innerHTML = `
            <img
                srcset="${desiredCard.srcset}"
                sizes="${desiredCard.sizes}"
                src="${desiredCard.src}"
                alt="${desiredCard.alt}"
            />
            <div class="cp-text-box">
                <p class="cp-name">${desiredCard.name}</p>
                <p class="cp-descr">${desiredCard.description}</p>
                <p class="cp-price">${desiredCard.price}</p>
                <p class="cp-art">${desiredCard.artNum}</p>
            </div>
        `
    itemCardPouf.appendChild(closeBtn)

    // Додати до cardProduct
    cardProduct.innerHTML = ''
    cardProduct.appendChild(itemCardPouf)
    console.log(desiredCard)

    closeBtn.addEventListener('click', function () {
      cardProduct.innerHTML = ''
      localStorage.removeItem('activeItemId')
      window.location.href = './catalog.html'
    })

    urlParams.set('name', desiredCard.name)
    urlParams.set('artNum', desiredCard.artNum)
    urlParams.set('price', desiredCard.price)
  } else {
    console.error(`Елемент із id ${itemId} не знайдений у масиві cardPouf`)
  }
  document.addEventListener('DOMContentLoaded', () => {
    renderCardProduct(itemId, cardProduct)
  })
}

const itemsToShow = 4
let itemShow = 0

function renderCard() {
  const addItemArt = listPouf.slice(itemShow, itemShow + itemsToShow)
  // Отримайте поточний список елементів з Local Storage (якщо він там є)
  const storedItems = JSON.parse(localStorage.getItem('catalogItems')) || []
  // Додайте нові елементи до збережених елементів
  const updatedItems = storedItems.concat(addItemArt)
  // Збережіть оновлений список у Local Storage
  localStorage.setItem('catalogItems', JSON.stringify(updatedItems))

  const addItemContent = addItemArt.map((item, index) => {
    // Додаємо id до кожного елементу, якщо він існує
    const itemId = cardPouf[index]?.id

    return `
        <li class="catalog-item" id="${itemId}">
        <article class="art-cardOpen">
          <img
            srcset="${item.srcset}"
            sizes="${item.sizes}"
            src="${item.src}"
            alt="${item.alt}"
          />
          <div class="catalog-name">
            <p class="catalog-name__text">${item.name}</p>
          </div>
        </article>
      </li>
    `
  })

  existingUl.append(...addItemContent)

  catalog.querySelector('.catalog-list').innerHTML = addItemContent.join('')

  if (addItemContent.length > 0) {
    const lastItem = addItemContent[addItemContent.length - 1]
    if (lastItem instanceof Element) {
      lastItem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  itemShow += itemsToShow

  if (itemShow >= listPouf.length) {
    loadMoreBtn.remove()
    const btnBack = document.createElement('button')
    existingUl.append(btnBack)
    btnBack.className = 'btnBack'
    btnBack.innerHTML = `
       <svg width="30" height="30" class="arrow-back">
        <use href="./images/icons.svg#icon-arrow-back"></use>
       </svg>
      `
    btnBack.addEventListener('click', () => {
      existingUl.scrollIntoView({ behavior: 'smooth' })
    })
  }
}

const catalogList = catalog.querySelector('.catalog-list');
if (catalogList) {
  catalogList.addEventListener('click', function (e) {
    const clickedItem = e.target.closest('.catalog-item')
    if (clickedItem) {
      const itemId = clickedItem.id
      renderCardProduct(itemId)

      const desiredCard = cardPouf.find(item => item.id === itemId)

      const clickedItemParams = new URLSearchParams()
      clickedItemParams.set('name', desiredCard?.name || '')
      clickedItemParams.set('artNum', desiredCard?.artNum || '')
      clickedItemParams.set('price', desiredCard?.price || '')
      window.location.hash = clickedItemParams.toString()

      localStorage.setItem('activeItemId', itemId)
    }
  })
}

const loadMoreBtn = document.querySelector('.btn-loadMore')

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function () {
    itemShow += itemsToShow
    renderCard()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderCard()
})

loadMoreBtn.addEventListener('click', renderCard)

document.addEventListener('DOMContentLoaded', function () {
  const activeItemId = localStorage.getItem('activeItemId')
  if (activeItemId) {
    renderCardProduct(activeItemId)
  }
})