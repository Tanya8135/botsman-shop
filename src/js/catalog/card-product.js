import cardPouf from "./listProduct/cardPouf";

document.addEventListener('DOMContentLoaded', function () {
    const cardProduct = document.querySelector('.card-product');
    const existingItemId = cardPouf[0].id;

    // Створіть елемент тільки один раз
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

    // Перший рендер
    renderCardProduct(existingItemId);
});