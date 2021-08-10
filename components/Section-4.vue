<template>
  <section class="section-4">
    <div class="container section-4__container">
      <img class="section-4__img" src="images/section-4.svg" alt="decore image" aria-hidden="true">
      <div class="section-4__description">
        <h2 class="section-4__description-header">
          Рекомендации по созданию голосовой заметки
        </h2>
        <p class="section-4__description-text">
          Перед записью голосовой заметки определите центральную мысль и несколько тезисов. Запишите их и держите перед глазами. Это поможет удержать фокус во время записи и получить качественный пост.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.section-4 {
  width: 100%;
  height: auto;
}
.section-4__container {
  position: relative;
  display: flex;
}
.section-4__img {
  width: 414px;
  margin: 0 auto;
}
.section-4__description {
  width: 50%;
}
.section-4__description-header {
  font-size: 40px;
  line-height: 47px;
  color: #1C252B;
  padding-top: 29px;
  padding-bottom: 42px;
}
.section-4__description-text {
  width: 90%;
  font-size: 18px;
  line-height: 21px;
  color: #3A4D57;
}
@media screen and (max-width: 1172px) {
  .section-4__img {
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .section-4__description {
    width: 100%;
  }
  .section-4__description-header {
    max-width: 50%;
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 18px;
  }
  .section-4__description-text {
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 51px;
  }
}
</style>
