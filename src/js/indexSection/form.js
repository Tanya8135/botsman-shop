const form = document.querySelector('.form-section');

form.innerHTML = `
<div class="form-container container form-box-catalog">
    <div class="form-box">
      <div class="action-text-box">
        <b class="action-text">Заполните форму</b>
      </div>
      <div class="form-subtitle-box">
        <span class="form-subtitle">остались вопросы?</span>
      </div>

      <!-- FORM -->
      <div class="form-block">
        <form class="form">
          <label class="data-field">
            <input
              type="text"
              name="name"
              class="data-field__input input-has-value"
              placeholder="Ваше имя*"
            />
            <!-- <span class="data-field-text data-field-text__name">Ваше имя*</span> -->
          </label>
          <label class="data-field">
            <input
              type="tel"
              name="tel"
              class="data-field__input input-has-value"
              placeholder="Ваш номер телефона*"
            />
            <!-- <span class="data-field-text data-field-text__name">Ваш номер телефона*</span> -->
          </label>
          <label class="data-field">
            <input
              type="text"
              name="country"
              class="data-field__input input-has-value"
              placeholder="Страна"
            />
            <!-- <span class="data-field-text data-field-text__name">Страна</span> -->
          </label>
          <label class="data-field">
            <input
              type="text"
              name="comment"
              class="data-field__input input-has-value"
              placeholder="Комментарий"
            />
            <!-- <span class="data-field-text data-field-text__comment"
              >Комментарий</span
            > -->
          </label>

          <div class="policy-box">
            <label class="policy">
              <div class="checkbox-box">
                <input
                  class="policy__checkbox"
                  type="checkbox"
                  name="policy"
                  value="css"
                />
                <span class="policy__icon"></span>

                <span class="policy__text">
                  Подтверждая заказ, я принимаю условия пользовательского
                  соглашения
                </span>
              </div>
            </label>
          </div>

          <button type="button" class="btn">Запросить звонок</button>
        </form>
      </div>
    </div>
  </div>
`