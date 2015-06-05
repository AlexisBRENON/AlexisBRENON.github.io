/* My own custom JS */

/* Ref notes management */
jQuery.noConflict();
jQuery(function() {

    /* Number refnotes */
    var index;
    var refs = jQuery(".refnote");
    /* For each .refnote span, create a refnum span containing the right number,
     * and a refbody span containing the actual text, and which is displayed when
     * refnum is clicked.
     * */
    for (index = 0; index < refs.length; index++) {
        var ref = refs[index];
        text = ref.innerHTML;

        ref_num = document.createElement("span");
        ref_num.className = "refnum";
        ref_num.innerHTML = "[" + (index + 1) + "]";

        ref_body = document.createElement("span");
        ref_body.className = "refbody";
        ref_body.innerHTML = text;

        ref.className = "ref";
        ref.innerHTML = ""
        ref.appendChild(ref_num);
        ref.appendChild(ref_body);
        ref.previousSibling.data = ref.previousSibling.data.trim()
    }

    /* Hide all the refnotes body on load */
    jQuery(".refbody").hide();
    /* Add function to display it when refnum is clicked */
    jQuery(".refnum").click(function(event) {
        jQuery(this.parentElement).children('.refbody').toggle();
        event.stopPropagation();
    });
    jQuery("body").click(function(event) {
        jQuery(".refbody").hide();
    });
});
