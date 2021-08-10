<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer__header">
        Попробовать Бот бесплатно!
      </h2>
      <div class="footer__container">
        <div class="footer__section-left">
          <div class="contacts">
            <h3 class="contacts__header">
              Contacts:
            </h3>
            <a class="contacts__link" href="mailto:hello@speechify.cc">
              <img src="images/phone-ringing.svg" alt="phone" aria-hidden="true">
              hello@speechify.cc
            </a>
            <a class="contacts__link" href="tel:+14388342992">
              <img src="images/email.svg" alt="email" aria-hidden="true">
              +14388342992
            </a>
          </div>
          <p class="links">
            <a class="links__item" href="/">Links - Terms of Service</a>
            <a class="links__item" href="/">Privacy Policy</a>
            <a class="links__item" href="/">Cookie Policy</a>
          </p>
        </div>
        <div class="footer__section-right">
          <Button
            :type="'whatsup'"
          />
          <Button
            :type="'telegram'"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer__header {
  color: #1C252B;
  font-size: 40px;
  line-height: 47px;
  text-align: right;
  padding-bottom: 16px;
}
.footer__container {
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 26px;
}
.footer__section-left {
  flex: 1;
}
.footer__section-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 49px;
}
.contacts {
  display: flex;
  align-items: center;
  padding-bottom: 26px;
}
.contacts__header {
  text-transform: uppercase;
  color: #3A4D57;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding-right: 10px;
}
.contacts__link {
  padding-right: 26px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  color: #3A4D57;
}
.contacts__link:hover,
.links__item:hover {
  cursor: pointer;
  text-decoration: underline;
}
.contacts__link img {
  padding-right: 8px;
}
.links {
  display: flex;
  align-items: center;
  padding-bottom: 42px;
}
.links__item {
  font-size: 18px;
  line-height: 21px;
  color: #3A4D57;
  padding-right: 32px;
}
@media screen and (max-width: 1172px) {
  .footer__container {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 320px) {
  .footer__header {
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    padding-bottom: 25px;
  }
  .footer__container {
    flex-direction: column;
    padding-top: 26px;
  }
  .footer__section-left {
    order: 2;
    padding-top: 63px;
  }
  .footer__section-right {
    order: 1;
    flex-direction: column;
    row-gap: 29px;
  }
  .links {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
  }
  .links__item {
    width: 50%;
    opacity: 0.7;
    font-size: 12px;
    line-height: 14px;
    padding-right: 0;

  }
  .links__item:first-child {
    width: 100%;
    text-align: center;
  }
  .links__item:nth-child(2) {
    text-align: right;
    padding-right: 10px;
  }
  .links__item:last-child {
    padding-left: 10px;
  }
  .contacts {
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 17px;
  }
  .contacts__header {
    width: 100%;
    padding: 0;
    text-align: center;
    font-size: 13px;
    line-height: 15px;
  }
  .contacts__link {
    font-size: 13px;
    line-height: 15px;
  }
  .contacts__link:nth-child(2) {
    padding-right: 17px;
  }
  .contacts__link img {
    width: 16px;
    padding-right: 6px;
  }
}
</style>
