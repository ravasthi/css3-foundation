/*------------------------------------------------------------------------------
| parallax.js
|
| Utilities for the example parallax scrolling page.
------------------------------------------------------------------------------*/

import $ from 'jquery/dist/jquery';

// Establish namespace. Change to match the name of your application.
var Css3Foundation = window.Css3Foundation ? window.Css3Foundation : {};

Css3Foundation.parallax = {
    init: function() {
        $(".toggle-debug").on("click", function(event) {
            $(".parallax-group").toggleClass("debug");
        });
    }
};

$(function() {
    Css3Foundation.parallax.init();
});
