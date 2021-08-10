
<template>
  <article v-if="text" class="notify">
    <img class="notify__img" :src="`images/${img}`" alt="decore">
    <p>{{ text }}</p>
  </article>
</template>

<script>
export default {
  name: 'CardNotification',
  props: {
    text: {
      type: String,
      require: true,
      default: ''
    },
    img: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style>
.notify {
  --img-size: 63px;
  /* width: 23.5em; */
  max-width: 423px;
  margin: calc(var(--img-size) * 0.33);
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(63, 146, 209, 0.12);
  border-radius: 47px;
  position: relative;
  padding: 30px 35px 45px 41px;
  font-size: 18px;
  line-height: 27px;
}
.notify__img {
  width: var(--img-size);
  height: var(--img-size);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-33%, -33%);
}
@media screen and (max-width: 320px) {
  .notify {
    --img-size: 40px;
    width: 275px;
    padding: 20px;
    line-height: 20px;
    border-radius: 25px;
    font-size: 14px;
    margin: 0;
    margin-bottom: 71px;
  }
  .notify__img {
    transform: translate(0, -50%);
  }
}
</style>
