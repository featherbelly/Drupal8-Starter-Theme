/**
 *
 */

(function ($, Drupal) {

  // jQuery Document Ready
  $(function() {

  });


  // Drupal way
  // https://www.drupal.org/docs/8/api/javascript-api/javascript-api-overview
  // If used properly this will ensure that your code runs both on normal page loads and when data is loaded by AJAX (or BigPipe!)
  // https://sqndr.github.io/d8-theming-guide/javascript/behaviors.html
  // https://www.drupal.org/docs/8/theming-drupal-8/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-theme

  Drupal.behaviors.NAMESPACE = {
    attach: function (context, settings) {
      // Using once() to apply the myCustomBehaviour effect when you want to do just run one function.
      $('input.myCustomBehavior', context).once('myCustomBehavior').addClass('processed');

      // Using once() with more complexity.
      $('input.myCustom', context).once('mySecondBehavior').each(function () {
        if ($(this).visible()) {
          $(this).css('background', 'green');
        }
        else {
          $(this).css('background', 'yellow').show();
        }
      });
    }
  };

  Drupal.behaviors.NAMESPACE = {
    attach: function (context, settings) {
      $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.
      });
    }
  };

})(jQuery, Drupal);
