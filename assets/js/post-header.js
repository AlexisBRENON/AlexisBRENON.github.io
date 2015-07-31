$(function() {
    var header_tag = $('body.post header');
    var header_image_tag = $('body.post header img.post-header-img');
    var header_image_src = header_image_tag.attr('src');

    if (header_image_src.length == 0) {
        header_image_src = '/assets/images/index/background.jpg';
    }

    header_tag.css(
            'background-image',
            header_tag.css('background-image') + ", url(" + header_image_src + ")"
    );
});
