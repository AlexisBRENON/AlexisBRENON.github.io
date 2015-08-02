
function display_more_post () {
    var index;
    var hiddden_posts = $('.posts-list .hidden-post');

    var number_sm = 0;
    var number_lg = 0;
    for (index = 0; index < hiddden_posts.length; index++) {
        var post = $(hiddden_posts[index]);
        post.removeClass('hidden-post');
        post.removeClass('hidden-xs');
        post.removeClass('hidden-sm');
        post.removeClass('hidden-md');
        post.removeClass('hidden-lg');
        
        if (post.hasClass('clearfix')) {
            if (post.hasClass('visible-xs-block')) {
                number_sm++;
            }
            if (post.hasClass('visible-lg-block')) {
                number_lg++;
            }
        }
        if (number_sm == 3 && number_lg == 2) {
            break;
        }
    }
    
    if ($('.posts-list .hidden-post').length == 0) {
        $('#more-post-button').addClass('disabled');
    }
}

if ($('.posts-list .hidden-post').length == 0) {
    $('#more-post-button').addClass('disabled');
}
