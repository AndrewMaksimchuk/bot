(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,7,8],{208:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("c68d4900",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n.r(e);var l={name:"Button",props:{type:{type:String,required:!0}},computed:{whatStyle:function(){return"whatsup"===this.type?"button_color-green":"button_color-blue"},whatImg:function(){return"whatsup"===this.type?"whatsup.svg":"telegram.svg"},whatLabel:function(){return"whatsup"===this.type?"спробувати whatsup":"спробувати telegram"}}},o=(n(211),n(35)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button hover",class:t.whatStyle,attrs:{"aria-label":t.whatLabel}},[n("img",{staticClass:"button__img",attrs:{src:"images/"+t.whatImg,alt:"messanger icon","aria-hidden":""}}),t._v("\n  Попробовать\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(209).default})},210:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("0dd2d2e0",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(208)},212:function(t,e,n){var l=n(83)(!1);l.push([t.i,".button{--img-size:62px;position:relative;border:none;width:161px;height:41px;margin-left:calc(var(--img-size)*0.75);padding:7px 21px;font-size:18px;line-height:27px;border-radius:6px;color:#fff;text-align:right}.button_color-green{background:#4caf50}.button_color-blue{background:#41b4e6}.button__img{width:var(--img-size);height:var(--img-size);position:absolute;top:50%;left:0;transform:translate(-75%,-50%)}@media screen and (max-width:320px){.button{--img-size:44px;width:119px;height:29px;padding:5px 12px;font-size:14px;line-height:21px}}",""]),t.exports=l},213:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("48c28920",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";n(210)},215:function(t,e,n){var l=n(83)(!1);l.push([t.i,".select-lang{position:relative}.select-lang:focus{outline-style:solid;outline-width:3px;outline-color:#000}.select-lang__input{width:51px;height:34px;background:#fff;box-shadow:0 0 7px rgba(8,76,148,.28);border-radius:6px;display:flex;align-items:center;justify-content:space-around}.select-lang__img,.select-lang__input-img{width:27px;height:27px}.select-lang__input-img-arrow{width:9px;height:6px}.select-lang__list{position:absolute;left:4px;top:38px}",""]),t.exports=l},216:function(t,e,n){"use strict";n.r(e);n(219);var l=n(35),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("menu",{staticClass:"menu"},[n("ul",{staticClass:"menu__list"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"menu__list-item"},[n("MenuSelectLang")],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"menu__list-item"},[n("a",{staticClass:"menu__list-item-link",attrs:{href:"/",tabindex:"1"}},[t._v("Q&A")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"menu__list-item"},[n("a",{staticClass:"menu__list-item-link",attrs:{href:"/",tabindex:"2"}},[t._v("About")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MenuSelectLang:n(217).default,Menu:n(216).default})},217:function(t,e,n){"use strict";n.r(e);var l={name:"MenuSelectLang",data:function(){return{isOpened:!1,selectedLang:"en",languages:{en:"united-kingdom.png",ua:"united-kingdom.png"}}},computed:{selectedLangImg:function(){return"images/".concat(this.languages[this.selectedLang])}},mounted:function(){this.$refs.choosLang.focus()},methods:{showLangList:function(){this.isOpened=!0},chooseLang:function(t){this.isOpened=!1},closeList:function(){this.isOpened=!1}}},o=(n(214),n(35)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"select-lang",attrs:{tabindex:"3"},on:{blur:t.closeList}},[n("div",{ref:"choosLang",staticClass:"select-lang__input hover",on:{click:t.showLangList}},[n("img",{staticClass:"select-lang__input-img",attrs:{src:t.selectedLangImg,alt:"selecte language"}}),t._v(" "),n("img",{staticClass:"select-lang__input-img-arrow",attrs:{src:"images/arrow.svg",alt:"choose language, press key","aria-hidden":"true"}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpened,expression:"isOpened"}],staticClass:"select-lang__list"},t._l(t.languages,(function(e,l){return n("p",{key:l,staticClass:"hover",on:{click:function(e){return t.chooseLang(l)}}},[n("img",{staticClass:"select-lang__img",attrs:{src:"images/"+e,alt:"language english"}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("257af960",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(213)},220:function(t,e,n){var l=n(83)(!1);l.push([t.i,".menu{display:inline-block;padding:29px 0}.menu__list{display:flex;align-items:center;grid-column-gap:36px;-moz-column-gap:36px;column-gap:36px}.menu__list-item-link{color:#1c252b;font-size:18px}.menu__list-item-link:hover{cursor:pointer;-webkit-text-decoration-line:underline;text-decoration-line:underline}@media screen and (max-width:320px){.menu{width:100%;padding:15px 0}.menu__list{grid-column-gap:27px;-moz-column-gap:27px;column-gap:27px}.menu__list-item:last-child{margin-left:auto}}",""]),t.exports=l},225:function(t,e,n){"use strict";n.r(e);n(227);var l=n(35),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("img",{staticClass:"header__img-decore-left",attrs:{src:"images/header-corner-left.svg",alt:"decoration","aria-hidden":"true"}}),t._v(" "),n("img",{staticClass:"header__img-decore-right",attrs:{src:"images/header-corner-right.svg",alt:"decoration","aria-hidden":"true"}}),t._v(" "),n("div",{staticClass:"container header__container"},[n("img",{staticClass:"header__img",attrs:{src:"images/header-background.svg",alt:"background image","aria-hidden":"true"}}),t._v(" "),n("Menu"),t._v(" "),n("section",{staticClass:"header__section"},[n("div",{staticClass:"header__left-description"},[n("h1",{staticClass:"header__header-text"},[t._v("\n          Бот в Telegram & Whatsup\n        ")]),t._v(" "),n("p",{staticClass:"header__description-text"},[t._v("\n          которому можно прислать голосовое аудиосообщение и он переведет его\n          в текст. А профессиональный редактор оформит и подготовит его\n          для публикации.\n        ")]),t._v(" "),n("section",{staticClass:"header__section-buttons"},[n("Button",{attrs:{type:"whatsup"}}),t._v(" "),n("Button",{attrs:{type:"telegram"}})],1)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Menu:n(216).default,Button:n(209).default,Header:n(225).default})},227:function(t,e,n){"use strict";n(218)},228:function(t,e,n){var l=n(83)(!1);l.push([t.i,".header{width:100vw}.header,.header__container{position:relative}.header__section{width:100%;display:flex;justify-content:space-between}.header__header-text{font-size:60px;line-height:70px;padding-top:45px;padding-bottom:24px}.header__left-description{max-width:488px}.header__description-text{font-size:18px;line-height:27px;padding-bottom:24px}.header__section-buttons{width:100%;padding-bottom:61px;display:flex;flex-wrap:wrap;grid-row-gap:20px;row-gap:20px;align-items:center;justify-content:space-between}.header__img{display:inline-block;max-width:58%;position:absolute;top:0;right:0;z-index:-1}.header__img-decore-left{position:absolute;top:0;left:0;max-width:25.8%}.header__img-decore-right{position:absolute;top:0;right:0;max-width:25%}@media screen and (max-width:320px){.header{overflow-x:hidden}.header__header-text{font-size:32px;line-height:37px;padding-top:40px;padding-bottom:10px}.header__description-text{font-size:14px;line-height:18px}.header__section-buttons{flex-direction:column;align-items:flex-start}.header__img{right:-66px;bottom:0;top:auto}.header__img-decore-right{max-width:150px}}",""]),t.exports=l}}]);