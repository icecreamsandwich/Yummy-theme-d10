/**
 * @file
 * yummy behaviors.
 */
(function (Drupal, $) {

  'use strict';

  Drupal.behaviors.yummy = {
    attach(context, settings) {
      //Change mobile menu book table text
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".btn-book-a-table").text("Book table");
        $(".btn-book-a-table").css({
          'margin-left': '120px',
          'position': 'absolute'
        });
      }
    }
  };

}(Drupal, jQuery));
