<template>
  <section class="section-3">
    <div class="container">
      <h2 class="section-3__header">
        Пример создания заметки
      </h2>
      <div class="section-3__flex">
        <div class="section-3__description">
          <NumberedCard
            v-for="(item, index) in numberedCard"
            :key="index"
            :index="index + 1"
            :text="item"
          />
          <article class="section-3__accent">
            Сервис справляется с задачей написания постов лучше и в 18 раз быстрее, чем если бы вы делали это сами.
          </article>
        </div>
        <div class="section-3__img">
          <img src="images/section-3.svg" alt="example">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section3',
  data () {
    return {
      numberedCard: [
        'Надиктовать 3-минутную голосовую заметку — 10 минут. Из них примерно 7 минут я накидываю структуру заметки, делаю пару тестовых записей и третью боевую запись для отправки.',
        'Расшифровать голосовое сообщение — 1 минут',
        'Отредактировать — 30 минут.',
        'В результате эксперимента 3 минуты голосовой записи превратились в красивый, логичный пост.'
      ]
    }
  }
}
</script>

<style>
.section-3 {
  width: 100%;
  height: auto;
  /* background-color: #FBCFD8; */
}
.section-3__header {
  width: 100%;
  padding: 56px 0;
  color: #1C252B;
  font-size: 40px;
  line-height: 47px;
}
.section-3__flex {
  width: 100%;
  height: auto;
  display: flex;
}
.section-3__description {
  width: 50%;
  height: auto;
}
.section-3__accent {
  background: #3F92D1;
  box-shadow: 0px 0px 12px rgba(63, 146, 209, 0.29);
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  padding: 24px 21px;
  margin-left: 19px;
  margin-bottom: 19px;
}
.section-3__img {
  width: 50%;
}
@media screen and (max-width: 1172px) {
  .section-3__description {
    width: 100%;
  }
  .section-3__img {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .section-3__header {
    padding: 43px 0;
    font-size: 20px;
    line-height: 23px;
  }
  .section-3__description {
    width: 100%;
  }
  .section-3__accent {
    font-size: 14px;
    line-height: 21px;
    padding: 12px 15px;
    margin-left: 19px;
    margin-bottom: 19px;
  }
}
</style>
