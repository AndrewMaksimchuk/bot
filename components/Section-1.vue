<template>
  <section class="section-1">
    <img
      class="section-1__background"
      src="images/section-1-background-img.svg"
      alt="background image"
      aria-hidden="true"
    >

    <div class="container section-1__section">
      <div class="section-1__part section-1__part_padding-small">
        <CardNotification
          :text="'Вы часто пишите посты для публикации в различных блогах, группах, каналах и это занимает много времени?'"
          :img="'question.svg'"
        />
      </div>
      <div class="section-1__part section-1__part_padding-big">
        <CardNotification
          :text="'Есть простое решение - надиктуйте ваши мысли в аудиосообщение а мы подготовим и оформим отличный пост для публикации.'"
          :img="'symb.svg'"
        />
      </div>
    </div>
  </section>
</template>

<style>
.section-1 {
  width: 100vw;
  position: relative;
}
.section-1__background {
  width: 1920px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.section-1__section {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.section-1__part {
  width: 50%;
}
.section-1__part_padding-small {
  padding-top: 55px;
}
.section-1__part_padding-big {
  padding-top: 190px;
  padding-left: 50px;
}
@media screen and (max-width: 1172px) {
  .section-1__part {
    width: auto;
  }
  .section-1__section {
    flex-direction: column;
    align-items: center;
  }
  .section-1__part_padding-small {
    padding-top: 0;
  }
  .section-1__part_padding-big {
    padding-top: 0;
    padding-left: 0;
  }
}
@media screen and (max-width: 720px) {
  .section-1 {
    /* height: 463px; */
    height: auto;
  }
  .section-1__background {
    /* width: 463px; */
  }
}
</style>
