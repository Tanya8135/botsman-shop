import listPoufs from "../catalog/LoadMoreList/itemPoufs";

const existingUl = document.querySelector('.catalog-list');
const loadMoreBtn = document.querySelector('.btn-loadMore');

const itemsToShow = 4;
let itemShow = 0;

function showMoreItems() {
    const additionalItems = listPoufs.slice(itemShow, itemShow + itemsToShow);

    // Отримайте поточний список елементів з Local Storage (якщо він там є)
    const storedItems = JSON.parse(localStorage.getItem('catalogItems')) || [];

    // Додайте нові елементи до збережених елементів
    const updatedItems = storedItems.concat(additionalItems);

    // Збережіть оновлений список у Local Storage
    localStorage.setItem('catalogItems', JSON.stringify(updatedItems));

    const itemsToAdd = additionalItems.map(item => {
        const li = document.createElement('li');
        li.className = 'catalog-item';

        const article = document.createElement('article');
        article.innerHTML = `
            <img
                srcset="${item.srcset}"
                sizes="${item.sizes}"
                src="${item.src}"
                alt="${item.alt}"
            />
            <div class="catalog-name">
            <p class="catalog-name__text">${item.name}</p>
          </div>
        `;

        li.appendChild(article);
        return li;
    });

    existingUl.append(...itemsToAdd);

    if (itemsToAdd.length > 0) {
        setTimeout(() => {
            itemsToAdd[itemsToAdd.length - 1].scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }


    itemShow += itemsToShow;

    if (itemShow >= listPoufs.length) {
        loadMoreBtn.remove()
        const btnBack = document.createElement('button');
        existingUl.append(btnBack);
        btnBack.className = 'btnBack';
        btnBack.innerHTML = `
            <svg width="30" height="30" class="arrow-back">
                <use href="./images/icons.svg#icon-arrow-back"></use>
            </svg>
        `;

        btnBack.addEventListener('click', () => {
            existingUl.scrollIntoView({ behavior: 'smooth' });
        });
    }
    console.log(itemsToAdd);
    document.addEventListener('DOMContentLoaded', () => {
        // Викликайте showMoreItems при завантаженні сторінки
        showMoreItems()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // Викликайте showMoreItems при завантаженні сторінки
    showMoreItems()
})

loadMoreBtn.addEventListener('click', showMoreItems);