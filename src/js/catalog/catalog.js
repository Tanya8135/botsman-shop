// import listPouf from "./LoadMoreList/itemPoufs"
// import { v4 as uuidv4 } from 'uuid'
// // import { renderCardProduct } from "./card-product";

// const catalog = document.querySelector('.catalog')

// catalog.innerHTML = `
// <div class="catalog-container container">
//     <!-- POUFS -->
//     <div class="catalog-poufs">
//       <h1 hidden></h1>
//       <h2 class="catalog-poufs__title" id="poufs">Пуфи</h2>

//       <ul class="catalog-list"></ul>
//       <div class="card-product container"></div>
//     </div>

//     <button type="button" class="btn-loadMore">
//       Показати більше
//       <div class="btn-loadMore__arrow">
//         <svg width="24" height="22">
//           <use href="./images/icons.svg#icon-arrow"></use>
//         </svg>
//       </div>
//     </button>
// </div>
// `;

// const itemsToShow = 4
// const itemShow = 0

// function renderCard() {
//   const addItemArt = listPouf.slice(itemShow, itemShow + itemsToShow)

//   const addItemContent = addItemArt.map(item => {
//     const uniqueId = uuidv4()
//     return `
//     <li class="catalog-item" id="${uniqueId}">
//     <article class="art-cardOpen">
//       <img
//         srcset="${item.srcset}"
//         sizes="${item.sizes}"
//         src="${item.src}"
//         alt="${item.alt}"
//       />
//       <div class="catalog-name">
//         <p class="catalog-name__text">Pink pouf</p>
//       </div>
//     </article>
//   </li>
//     `
//   })

//   catalog.querySelector('.catalog-list').innerHTML = addItemContent.join('')
// }

// renderCard()

// // const catalogList = catalog.querySelector('.catalog-list');

// // catalogList.addEventListener('click', function (e) {
// //   const clickedItem = e.target.closest('.catalog-item');
// //   if (clickedItem) {
// //     const itemId = clickedItem.id;
// //     renderCardProduct(itemId);
// //   }
// // });


import listPouf from "./LoadMoreList/itemPoufs";
import cardPouf from "./listProduct/cardPouf";
// import { v4 as uuidv4 } from 'uuid';

const catalog = document.querySelector('.catalog')

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
`;

const itemsToShow = 4
const itemShow = 0

const cardProduct = document.querySelector('.card-product');
const itemCardPouf = document.createElement('div');
itemCardPouf.className = 'card-product__box';

function renderCardProduct(itemId) {
  const desiredCard = cardPouf.find(item => item.id === itemId);

  if (desiredCard) {

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
        `;

    // Додати до cardProduct
    cardProduct.innerHTML = ''
    cardProduct.appendChild(itemCardPouf);
    console.log(desiredCard);
  } else {
    console.error(`Елемент із id ${itemId} не знайдений у масиві cardPouf`);
  }
}

function renderCard() {
  const addItemArt = listPouf.slice(itemShow, itemShow + itemsToShow)

  const addItemContent = addItemArt.map((item, index) => {
    // Додаємо id до кожного елементу, якщо він існує
    const itemId = cardPouf[index]?.id;

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
            <p class="catalog-name__text">Pink pouf</p>
          </div>
        </article>
      </li>
    `;
  })

  catalog.querySelector('.catalog-list').innerHTML = addItemContent.join('')
}

renderCard()
const catalogList = catalog.querySelector('.catalog-list');

catalogList.addEventListener('click', function (e) {
  const clickedItem = e.target.closest('.catalog-item');
  if (clickedItem) {
    const itemId = clickedItem.id;
    renderCardProduct(itemId);
  }
});