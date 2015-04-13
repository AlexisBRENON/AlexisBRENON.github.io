/* My own custom JS */

/* Ref notes management */
jQuery.noConflict();
jQuery(function() {
  jQuery(".refbody").hide();
  jQuery(".refnum").click(function(event) {
    jQuery(this.parentElement).children('.refbody').toggle();
    event.stopPropagation();
  });
  jQuery("body").click(function(event) {
    jQuery(".refbody").hide();
  });
});
