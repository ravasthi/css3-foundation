//= require fiftyfive-util-js/55_utils
//= require vendor/shivs-custom

document.getElementsByTagName("html")[0].className += fiftyfive.util.getIEClass();

// scroll to hide iPhone URL bar; from http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
/iphone/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
  if (!pageYOffset) window.scrollTo(0, 1);
}, 1000);
