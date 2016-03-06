/**
 * Created by Denno on 028, 28 Feb 16.
 */

$(document).ready(function() {
  main.init();
});

main = {
  init: function() {
    $(".ourWorkLink").on('click', function(e) {
      var me = main;
      e.preventDefault();
      var $link = $(this);
      var ourWorkToggle = $link.data().ourWorkToggle;
      var $ourWorkContainer = $("#our-work-container");
      $ourWorkContainer.find('> section:not(.hidden)').addClass('hidden');
      $ourWorkContainer.find('> #'+ourWorkToggle).removeClass('hidden');
      //$ourWorkContainer.find('section').addClass('hidden').end().find('section').find('#'+ourWorkToggle).removeClass('hidden');
      //console.log($('#'+ourWorkToggle));
      //$('#'+ourWorkToggle).removeClass('hidden');
      //console.log($('#'+ourWorkToggle));
      var aboutHeading = $("#about").find("h4");
      if (!me.isElementInViewport(aboutHeading)) {
        var $ourWorkLinks = $(".ourWorkLinksContainer");
        var offset = $ourWorkLinks.offset();
        $('html, body').animate({
          scrollTop: offset.top,
          scrollLeft: offset.left
        });
      }
    });

    $(".slider").slick({
      dots: true,
      autoplay: true
    });

    $(".fancybox").fancybox();
  },

  /**
   * Test if an element is visible in the current viewport
   *
   * @param el The element to check the visibility of
   *
   * @returns {boolean}
   */
  isElementInViewport: function (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }
};
