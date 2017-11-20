jQuery(function() {

  var prepareTranslateSwitchers = function() {
    var currentLang = jQuery('.cv-control label.active')[0].classList.value.match(/btn-(\S*)/)[1];

    jQuery('.translate-wrapper').each(function(idx, wrapper) {
      var current = jQuery(wrapper).children('.translate-current')[0];
      if (current === undefined) {
        current = document.createElement(jQuery(wrapper).children()[0].tagName);
        jQuery(current).css('display', 'none').addClass('translate-current');
        wrapper.prepend(current);
      }

      jQuery(current).html(
        jQuery(current).siblings('.translate-' + currentLang).html()
      );

      jQuery(wrapper).children().css('display', 'none')
      jQuery(current).css('display', "");
    });
  }

  var setToggleAction = function() {
    var fadeTo = function(lang) {
      var currents = jQuery('.translate-wrapper > .translate-current');
      currents.fadeOut(200, function() {
        currents.each(function(idx, current) {
          jQuery(current).html(jQuery(current).siblings('.translate-' + lang).html());
        });
        currents.fadeIn(600);
      });
    }

    jQuery('.cv-control label').each(function (idx, label) {
      var lang = label.classList.value.match(/btn-(\S*)/)[1];
      jQuery(label).click(function () {fadeTo(lang);});
    });
  }

  var setExpandJournals = function() {
    console.log(this)
    jQuery('.cv-publications-item').each(function (idx, item) {
      console.log(item)
      jQuery(item).click(function(e) {
        console.log(e);
        jQuery(this).children('.cv-publications-item-journal').slideToggle();
      });
    });
  }
  
  prepareTranslateSwitchers();
  setToggleAction();
  setExpandJournals();
})
