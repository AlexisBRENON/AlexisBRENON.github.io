var computeAge = function() {
    var now = Date.now();
    var birthday = Date.parse("1991-12-20");
    var age_dt = new Date(now - birthday);
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);

    jQuery('.age-alexis-brenon').html(age);
}

jQuery(function() {
  computeAge();
})
