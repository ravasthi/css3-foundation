/*------------------------------------------------------------------------------
| common.js
|
| Application-wide utilities.
------------------------------------------------------------------------------*/

import $ from 'jquery/dist/jquery';

// Establish namespace. Change to match the name of your application.
const Css3Foundation = window.Css3Foundation ? window.Css3Foundation : {};

Css3Foundation.util = {};

$.extend(Css3Foundation, {
  /*
   ** Override this to perform any application-wide initialization JavaScript. This should
   ** run on DOM ready for every page in the application, and resides in the main application
   ** JS namespace.
   */
  commonInit: () => {
    // Other stuff to do as soon as the DOM is ready
  },
});

$(() => Css3Foundation.commonInit());
