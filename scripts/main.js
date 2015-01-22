'use strict';

(function () {

  function share () {
    var twitter = document.querySelectorAll('.share--tw-js');
    var position = document.location.href;
    var title = document.title;
    var twitterLink = 'https://twitter.com/intent/tweet?url=' + position + '&text=' + title + ' via @denoStc';

    function changeLinks (social, link) {
      [].slice.call(social).forEach(function (el) {
        return el.href = link;
      });
    }

    changeLinks(twitter, twitterLink);

  }

  share();

})();
