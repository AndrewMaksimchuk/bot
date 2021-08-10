<template>
  <header class="header">
    <img class="header__img-decore-left" src="images/header-corner-left.svg" alt="decoration" aria-hidden="true">
    <img class="header__img-decore-right" src="images/header-corner-right.svg" alt="decoration" aria-hidden="true">
    <div class="container header__container">
      <img
        class="header__img"
        src="images/header-background.svg"
        alt="background image"
        aria-hidden="true"
      >
      <Menu />
      <section class="header__section">
        <div class="header__left-description">
          <h1 class="header__header-text">
            Бот в Telegram & Whatsup
          </h1>
          <p class="header__description-text">
            которому можно прислать голосовое аудиосообщение и он переведет его
            в текст. А профессиональный редактор оформит и подготовит его
            для публикации.
          </p>
          <section class="header__section-buttons">
            <Button
              :type="'whatsup'"
            />
            <Button
              :type="'telegram'"
            />
          </section>
        </div>
      </section>
    </div>
  </header>
</template>

<style>
.header {
  width: 100vw;
}
.header,
.header__container {
  position: relative;
}
.header__section {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.header__header-text {
  font-size: 60px;
  line-height: 70px;
  padding-top: 45px;
  padding-bottom: 24px;
}
.header__left-description {
  max-width: 488px;
}
.header__description-text {
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 24px;
}
.header__section-buttons {
  width: 100%;
  padding-bottom: 61px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  align-items: center;
  justify-content: space-between;
}
.header__img {
  display: inline-block;
  max-width: 58%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
.header__img-decore-left {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 25.8%;
}
.header__img-decore-right {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 25%;
}
@media screen and (max-width: 320px) {
  .header {
    overflow-x: hidden;
  }
  .header__header-text {
    font-size: 32px;
  line-height: 37px;
  padding-top: 40px;
  padding-bottom: 10px;
  }
  .header__description-text {
    font-size: 14px;
    line-height: 18px;
  }
  .header__section-buttons {
    flex-direction: column;
    align-items: flex-start;
  }
  .header__img {
    right: -66px;
    bottom: 0;
    top: auto;
  }
  .header__img-decore-right {
    max-width: 150px;
  }
}
</style>
