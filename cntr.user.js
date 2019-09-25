// ==UserScript==
// @name         sport
// @namespace    sportchek
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sportchek.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    SPC.trigger = (function (fn) {
        return function(){
            console.log('trigger', arguments)
            fn.apply(this, arguments)
        }
    }(SPC.trigger));

    SPC.subscribe = (function (fn) {
        return function(){
            console.log('subscribe', arguments)
            fn.apply(this, arguments)
        }
    }(SPC.subscribe))
    // Your code here...
})();