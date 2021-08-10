<template>
  <section class="container section-2">
    <img class="section-2__img" src="images/section-2-img.svg" alt="decore image" aria-hidden="true">
    <div class="section-2__description">
      <h2 class="section-2__header-text">
        1 пост стоит N$ и <br> готовится до 2х часов
      </h2>
      <ul class="section-2__list">
        <li class="section-2__list-item">
          <span class="section-2__list-item-text">
            Довжина замітки може бути &plusmn;30 сек.
          </span>
        </li>
        <li class="section-2__list-item">
          <span class="section-2__list-item-text">
            Додатково 1 мин. коштує N$
          </span>
        </li>
        <li class="section-2__list-item">
          <span class="section-2__list-item-text">
            Не сподобається результат - переробимо або повернемо кошти.
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.section-2 {
  max-height: 359px;
  padding: 20px 0;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}
.section-2__img {
  width: 460px;
}
.section-2__description {
  display: inline-block;
  height: 100%;
  padding-top: 29px;
}
.section-2__header-text {
  max-width: 459px;
  font-size: 40px;
  line-height: 47px;
  padding-bottom: 40px;
}
.section-2__list {
  max-width: 527px;
  padding-bottom: 72px;
}
.section-2__list-item {
  margin-bottom: 20px;
}
.section-2__list-item-text {
  color: #3A4D57;
  font-size: 18px;
  line-height: 22px;
}
.section-2__list-item-text::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 25px;
  background-image: url('/images/check.svg');
  background-repeat: no-repeat;
  background-size: 30px 25px;
}
@media screen and (max-width: 320px) {
  .section-2 {
    padding: 20px;
  }
  .section-2__img {
    position: absolute;
    top: 0;
    right: -20px;
    width: 120px;
  }
  .section-2__header-text {
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 10px;
  }
  .section-2__list-item-text {
    line-height: 17px;
    font-size: 14px;
  }
  .section-2__list-item-text::before {
    width: 22px;
    height: 18px;
    background-size: 22px 18px;
  }
}
</style>
