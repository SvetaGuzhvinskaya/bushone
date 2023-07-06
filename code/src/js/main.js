document.addEventListener('DOMContentLoaded', function () {

  // Btn menu
  document.querySelector(".js-open").addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle("is-open")
    document.querySelector(".js-menu").classList.toggle("is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  // sliders
  var swiperHero = new Swiper(".js-slider-hero", {
    effect: 'fade',
    focusableElements: 'a',
    fadeEffect: {
      crossFade: false,
    },
    autoplay: {
      delay: 30000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });

  if (document.querySelector('#contacts-form')) {
    const validatorProd = new JustValidate(document.querySelector('#contacts-form'));
    let nameFirst = document.querySelector('#name-first');
    let nameLast = document.querySelector('#name-last');
    let massage = document.querySelector('#massage');

    validatorProd
      .addField(nameFirst, [
        {
          rule: 'required',
          errorMessage: 'Поле обязательно для заполнения',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Недопустимый формат',
        },
        {
          rule: 'maxLength',
          value: 15,
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField(nameLast, [
        {
          rule: 'required',
          errorMessage: 'Поле обязательно для заполнения',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Недопустимый формат',
        },
        {
          rule: 'maxLength',
          value: 15,
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField(massage, [
        {
          rule: 'required',
          errorMessage: 'Поле обязательно для заполнения',
        }
      ]).onSuccess(function(e) {
        Fancybox.close();
        const fancybox = new Fancybox([
          {
            src: '<div class="thank-entry"><h2 class="title thank-entry__title">Спасибо, мы вам перезвоним!</h2></div>',
            type: "html",
          },
        ]);
      });
  }

});
