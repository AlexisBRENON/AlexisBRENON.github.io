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

  var setToggleAction = function() {
    jQuery('.cv-control .btn-english').click(function () {
      jQuery('.cv-page-item#french').fadeOut(1000);
      jQuery('.cv-page-item#english').fadeIn(1000);
    });
    jQuery('.cv-control .btn-french').click(function () {
      jQuery('.cv-page-item#french').fadeIn(1000);
      jQuery('.cv-page-item#english').fadeOut(1000);
    });
  }
  
  setPageHeight();
  setToggleAction();

  /* Make page resize on window resizing */
  var resizeTimer;
  jQuery(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setPageHeight, 250);
  });
})
