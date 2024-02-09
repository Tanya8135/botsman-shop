const search = document.querySelector('.search')

search.innerHTML = `
<div class="serach-container">
    <form class="search-form" id="search-form">
      <input
        class="search-form__input"
        type="text"
        name="searchQuery"
        autocomplete="off"
        placeholder="Пошук"
      />

      <button type="submit" class="search-form__btn">
        <svg width="24" height="24" class="search-icon">
          <use href="./images/icons.svg#icon-search-icon"></use>
        </svg>
      </button>
    </form>
  </div>
`