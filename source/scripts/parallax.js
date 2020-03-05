/*------------------------------------------------------------------------------
| parallax.js
|
| Utilities for the example parallax scrolling page.
------------------------------------------------------------------------------*/

import $ from 'jquery/dist/jquery';

// Establish namespace. Change to match the name of your application.
const Css3Foundation = window.Css3Foundation ? window.Css3Foundation : {};

Css3Foundation.parallax = {
  init: () => {
    $('.toggle-debug').on('click', () => {
      $('.parallax-group').toggleClass('debug');
    });
  },
};

$(() => Css3Foundation.parallax.init());
