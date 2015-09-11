'use strict';

(function (window, document) {

  var app = {
      init: function () {
          this.share();
          this.bindEvents();
      },

      bindEvents: function () {
          document.addEventListener('DOMContentLoaded', this.contentLoaded);
      },

      share: function () {
          var twitter = document.querySelectorAll('.share--tw-js');
          var position = document.location.href;
          var title = document.title;
          var twitterLink = 'https://twitter.com/intent/tweet?url=' + position + '&text=' + title + ' via @denoStc';

          function changeLinks (social, link) {
              [].slice.call(social).forEach(function (el) {
                  return el.href = link;
              });
          }

          changeLinks(twitter, encodeURI(twitterLink));

      },

      contentLoaded: function () {
          app.setTime('.element__sidebar--read-time', '.element__article--content', 'reading-time');
      },

      setTime: function (target, wrapperEl, wrapperElClass) {
          if(document.querySelector(wrapperEl) !== null) {
              var wrapper = document.querySelector(wrapperEl).textContent,
                  targetEl = document.querySelector(target),
                  words = wrapper.trim().split(/\s+/g).length/180,
                  minutes = words.toFixed() < 1 ? 1 : words.toFixed(),
                  txt = minutes + ' min',
                  elem = document.createElement('span');

              elem.className = wrapperElClass;
              elem.textContent = txt;
              targetEl.appendChild(elem);
          }
      }
  };

  app.init();

})(window, document);
