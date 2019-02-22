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
      var current = jQuery(this);
      current.html(current.siblings('.translate-' + lang).html());
      current.fadeIn(600);
    });
    currents.promise().done(moveLastBlockItems);
  }

  jQuery('.cv-control label').each(function (idx, label) {
    var lang = label.classList.value.match(/btn-(\S*)/)[1];
    jQuery(label).click(function () {
      fadeTo(lang);
    });
  });
}

var moveLastBlockItems = function() {
  var front_items = jQuery('.cv-main.front .cv-block .cv-block-items').last();
  var back_items = jQuery('.cv-main.back .cv-block .cv-block-items').first();

  var max_height = front_items.height();
  var current_height = 0;

  var items_to_move_front = [],
    items_to_move_back = [];

  var arrange_blocks = function (idx, item) {
    current_height = current_height + $(item).outerHeight(true);
    if (current_height > max_height) {
      items_to_move_back.push(item);
    } else {
      items_to_move_front.push(item);
    }
  }

  jQuery(front_items).children().each(arrange_blocks);
  jQuery(back_items).children().each(arrange_blocks);

  jQuery.each(items_to_move_front, function(idx, item) {
    front_items.append(item);
  });
  jQuery.each(items_to_move_back, function(idx, item) {
    back_items.append(item);
  });
}

var splitLastBlock = function() {
  var last_block = jQuery('.cv-main.front .cv-block').last();

  var back = jQuery('.cv-main.back');
  var back_block = last_block.clone();
  back_block.children('.cv-block-title').remove();
  back_block.children('.cv-block-items').empty();
  back.prepend(back_block);

  moveLastBlockItems();
}

var prepareResizeEvent = function() {
  var resizeTimeout
  var resizeThrottler = function() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
      }, 1000); // The actualResizeHandler will execute at a rate of 15fps
    }
  }

  var actualResizeHandler = function() {
    moveLastBlockItems();
  }

  jQuery(window).resize(resizeThrottler);
}

jQuery(function() {
  prepareTranslateSwitchers();
  setToggleAction();
  window.setTimeout(splitLastBlock, 500);
  prepareResizeEvent();

  window.setTimeout(function() {
    const achievementDroppable = new Droppable.default(
      jQuery('.cv-block.cv-achievements ul.cv-block-items').toArray(),
      {
        draggable: 'li.cv-achievement-item',
        handle: 'div.cv-achievement-frame',
        dropzone: '.cv-block.cv-achievements ul.cv-block-items',
        classes: {
          "droppable:occupied": "" // Do not set containers as occupied
        }
      });

    const hskillDroppable = new Droppable.default(
      jQuery('ul.cv-list-hskill').toArray(), {
        draggable: 'li',
        handle: '.skill-icon',
        dropzone: 'ul.cv-list-hskill',
        classes: {
          "droppable:occupied": "" // Do not set containers as occupied
        }
      });
  }, 750);
})
