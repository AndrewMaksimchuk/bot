<template>
  <article class="numbered-card">
    <div
      v-if="index"
      class="numbered-card__icon"
    >
      {{ index }}
    </div>
    <p class="numbered-card__text">
      {{ text }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'NumberCard',
  props: {
    index: {
      type: Number,
      default: null
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.numbered-card {
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 0px 12px rgba(63, 146, 209, 0.29);
  border-radius: 6px;
  margin-left: 19px;
  margin-bottom: 19px;
}
.numbered-card__icon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 12px;
  color: #fff;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  background: #3F92D1;
  border-radius: 100%;
  transform: translate(-50%, -50%);
}
.numbered-card__text {
  color: #3A4D57;
  font-size: 18px;
  line-height: 25px;
  padding: 9px 24px;
}
@media screen and (max-width: 320px) {
  .numbered-card {
    margin-left: 19px;
    margin-bottom: 19px;
  }
  .numbered-card__icon {
  padding: 2px 7px;
  font-size: 12px;
  line-height: 17px;
}
.numbered-card__text {
  font-size: 14px;
  line-height: 19px;
  padding: 9px 17px;
}
}
</style>
