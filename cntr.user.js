// ==UserScript==
// @name         sport
// @namespace    sportchek
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sportchek.ca/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    SPC.trigger = (function(fn) {
      return function() {
        console.log('temper.trigger', arguments[0], arguments[1]);
        fn.apply(this, arguments);
      };
    })(SPC.trigger);
  
    SPC.subscribe = (function(fn) {
      return function() {
        console.log('temper.subscribe', arguments[0], arguments[1]);
        fn.apply(this, arguments);
      };
    })(SPC.subscribe);
  })();
  test