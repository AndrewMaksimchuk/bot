<template>
  <button class="button hover" :class="whatStyle" :aria-label="whatLabel">
    <img class="button__img" :src="`images/${whatImg}`" alt="messanger icon" aria-hidden>
    Попробовать
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    whatStyle () {
      return this.type === 'whatsup' ? 'button_color-green' : 'button_color-blue'
    },
    whatImg () {
      return this.type === 'whatsup' ? 'whatsup.svg' : 'telegram.svg'
    },
    whatLabel () {
      return this.type === 'whatsup' ? 'спробувати whatsup' : 'спробувати telegram'
    }
  }
}
</script>

<style>
.button {
  --img-size: 62px;
  position: relative;
  border: none;
  width: 161px;
  height: 41px;
  margin-left: calc(var(--img-size) * 0.75);
  padding: 7px 21px;
  font-size: 18px;
  line-height: 27px;
  border-radius: 6px;
  color: #fff;
  text-align: right;
}
.button_color-green {
  background: #4CAF50;
}
.button_color-blue {
  background: #41B4E6;
}
.button__img {
  width: var(--img-size);
  height: var(--img-size);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-75%, -50%);
}
@media screen and (max-width: 320px) {
  .button {
    --img-size: 44px;
    width: 119px;
    height: 29px;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
