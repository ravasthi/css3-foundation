/*------------------------------------------------------------------------------
| login.js
|
| Utilities for the login page.
------------------------------------------------------------------------------*/

// Establish namespace. Change to match the name of your application.
var Css3Foundation = window.Css3Foundation ? window.Css3Foundation : {};

Css3Foundation.login = {
    init: function() {
        $("input[placeholder]").forminputplaceholdertextwidget();
    }
};

(function($) {
    $(function() {
        Css3Foundation.login.init();
    });
})(jQuery);
