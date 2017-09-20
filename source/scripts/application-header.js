import './vendor/shivs-custom';

// scroll to hide iPhone URL bar; from http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
/iphone/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
    if (!pageYOffset) window.scrollTo(0, 1);
}, 1000);
