<template>
  <menu class="menu">
    <ul class="menu__list">
      <li class="menu__list-item">
        <a class="menu__list-item-link" href="/" tabindex="1">Q&A</a>
      </li>
      <li class="menu__list-item">
        <a class="menu__list-item-link" href="/" tabindex="2">About</a>
      </li>
      <li class="menu__list-item">
        <MenuSelectLang />
      </li>
    </ul>
  </menu>
</template>

<style>
.menu {
  display: inline-block;
  padding: 29px 0;
}
.menu__list {
  display: flex;
  align-items: center;
  column-gap: 36px;
}
.menu__list-item-link {
  color: #1C252B;
  font-size: 18px;
}
.menu__list-item-link:hover {
  cursor: pointer;
  text-decoration-line: underline;
}

@media screen and (max-width: 320px) {
  .menu {
    width: 100%;
    padding: 15px 0;
  }
  .menu__list {
    column-gap: 27px;
  }
  .menu__list-item:last-child {
    margin-left: auto;
  }
}
</style>
