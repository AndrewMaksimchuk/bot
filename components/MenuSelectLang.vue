<template>
  <article
    class="select-lang"
    tabindex="3"
    @blur="closeList"
  >
    <div
      ref="choosLang"
      class="select-lang__input hover"
      @click="showLangList"
    >
      <img
        class="select-lang__input-img"
        :src="selectedLangImg"
        alt="selecte language"
      >
      <img
        class="select-lang__input-img-arrow"
        src="images/arrow.svg"
        alt="choose language, press key"
        aria-hidden="true"
      >
    </div>
    <div
      v-show="isOpened"
      class="select-lang__list"
    >
      <p
        v-for="(value, name) in languages"
        :key="name"
        class="hover"
        @click="chooseLang(name)"
      >
        <img
          class="select-lang__img"
          :src="`images/${value}`"
          alt="language english"
        >
      </p>
    </div>
  </article>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'MenuSelectLang',
  data () {
    return {
      isOpened: false,
      selectedLang: 'en',
      languages: {
        en: 'united-kingdom.png',
        ua: 'united-kingdom.png'
      }
    }
  },
  computed: {
    selectedLangImg () {
      return `images/${this.languages[this.selectedLang]}`
    }
  },
  mounted () {
    this.$refs.choosLang.focus()
  },
  methods: {
    showLangList () {
      this.isOpened = true
    },
    chooseLang (lang) {
      this.isOpened = false
    },
    closeList () {
      this.isOpened = false
    }
  }
}
</script>

<style>
.select-lang {
  position: relative;
}
.select-lang:focus {
  outline-style: solid;
  outline-width: 3px;
  outline-color: #000;
}

.select-lang__input {
  width: 51px;
  height: 34px;
  background: #FFFFFF;
  box-shadow: 0px 0px 7px rgba(8, 76, 148, 0.28);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.select-lang__input-img,
.select-lang__img {
  width: 27px;
  height: 27px;
}

.select-lang__input-img-arrow {
  width: 9px;
  height: 6px;
}

.select-lang__list {
  position: absolute;
  left: 4px;
  top: 38px;
}
</style>
