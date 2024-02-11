import listTable from "../catalog/LoadMoreList/itemTables";

const existingUl = document.querySelector('.table-list');
const loadMoreBtn = document.querySelector('.btnTable-loadMore');
const itemsToShow = 4;
let itemShow = 0;
function showMoreItems() {
    const additionalItems = listTable.slice(itemShow, itemShow + itemsToShow);

    const itemsToAdd = additionalItems.map(item => {
        const li = document.createElement('li');
        li.className = 'table-item';

        const article = document.createElement('article');
        article.innerHTML = `
            <img
                srcset="${item.srcset}"
                sizes="${item.sizes}"
                src="${item.src}"
                alt="${item.alt}"
            />
        `;

        li.appendChild(article);
        return li;
    });

    existingUl.append(...itemsToAdd);

    setTimeout(() => {
        itemsToAdd[itemsToAdd.length - 1].scrollIntoView({ behavior: 'smooth' });
    })

    itemShow += itemsToShow;

    if (itemShow >= listTable.length) {
        loadMoreBtn.style.display = 'none';
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
}

loadMoreBtn.addEventListener('click', showMoreItems);