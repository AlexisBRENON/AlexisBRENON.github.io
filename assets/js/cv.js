jQuery(function() {
  var setPageHeight = function() {
    var cvPageContainer = jQuery('.cv-page')
    cvPageContainer.css('height', '');

    var cvPages = jQuery('.cv-page > div')
    cvPages.css('height', '');

    var maxHeight = Math.max.apply(null, 
      cvPages.map(function() {
        return jQuery(this).height();
      }).get());

    cvPageContainer.css('height', maxHeight + 'px');
    cvPages.css('height', cvPageContainer.css('height'));
  }

  var prepareTranslateSwitchers = function() {
    var currentLang = jQuery('.cv-control label.active')[0].classList.value.match(/btn-(\S*)/)[1];

    jQuery('.translate-wrapper').each(function(idx, wrapper) {
      var current = jQuery(wrapper).children('.translate-current')[0];
      if (current === undefined) {
        current = document.createElement(wrapper.tagName);
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
      currents.fadeOut("", function() {
        currents.each(function(idx, current) {
          jQuery(current).html(jQuery(current).siblings('.translate-' + lang).html());
        });
        currents.fadeIn("");
      });
    }

    jQuery('.cv-control label').each(function (idx, label) {
      var lang = label.classList.value.match(/btn-(\S*)/)[1];
      jQuery(label).click(function () {fadeTo(lang);});
    });
  }
  
  setPageHeight();
  prepareTranslateSwitchers();
  setToggleAction();

  /* Make page resize on window resizing */
  var resizeTimer;
  jQuery(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setPageHeight, 250);
  });
})
