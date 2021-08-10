<template>
  <article
    class="accordion"
  >
    <button
      class="accordion__button"
      @click="toggleTextElement"
    >
      {{ headerText }}
      <img
        class="accordion__button-img"
        :class="{rotate: isOpen}"
        src="images/arrow-state.svg"
        alt="icon of state"
        aria-hidden="true"
      >
    </button>
    <p
      ref="text"
      class="accordion__text"
      :class="{open: isOpen}"
    >
      {{ mainText }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    headerText: {
      type: String,
      required: true
    },
    mainText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleTextElement () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        const height = `${this.$refs.text.scrollHeight}px`
        this.$refs.text.style.height = height
        return
      }
      this.$refs.text.style.height = null
    }
  }
}
</script>

<style>
.accordion {
  width: 100%;
}
.accordion__button {
  width: 100%;
  padding: 5px 21px;
  background-color: #FFFFFF;
  border: 1px solid #BDD6E4;
  box-sizing: border-box;
  border-radius: 4px;
  color: #1C252B;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.accordion__button:hover {
  cursor: pointer;
  text-decoration: underline;
}
.accordion__button-img {
  width: 16px;
}
.accordion__text {
  font-size: 18px;
  line-height: 25px;
  color: #3A4D57;
  background-color: #F0F4F7;
  white-space: pre-wrap;
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: height .2s ease-out;
}
.open {
  padding: 8px 13px;
}
.rotate {
  transform: rotate(180deg);
}
</style>
