// ==UserScript==
// @name         sport
// @namespace    sportchek
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sportchek.ca/*
// @match        https://www.sportchek.ca/shopping-cart.html*
// @grant        GM_webRequest
// //@webRequest   [{"selector":"*shopping-cart*","action":"cancel"}]

// ==/UserScript==

(function () {
    SPC.trigger = (function (fn) {
        return function () {
            console.log('trigger', this.constructor.name)
            fn.apply(this, arguments)
        }
    }(SPC.trigger));

    SPC.subscribe = (function (fn) {
        return function () {
            console.log('subscribe', this.constructor.name)
            fn.apply(this, arguments)
        }
    }(SPC.subscribe));

    GM_webRequest([{"selector":"*shopping-cart*","action":"cancel"}], function(info, message, details) {
        alert()
    });
})();