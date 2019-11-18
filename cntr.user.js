// ==UserScript==
// @name         Sport / Marks
// @namespace    sportchek
// @version      0.1
// @description  try to take over the world!
// @author       Oleg Ch
// @match        http://localhost:4502/content/sportchek*
// @match        https://sportchek.ca/*
// @match        https://www.sportchek.ca/shopping-cart.html*
// @grant        GM_webRequest
// @webRequest   [{"selector":"*shopping-cart*","action":"cancel"}]
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    GM_addStyle(`
    .mm-highlight {
        position: absolute;
        z-index: 99999;
        background: #00F2;
        pointer-events: none;
        border: 1px solid #000;
    }
    
    `);

    let listSheets = {};
    GM_registerMenuCommand("highlight modules", function () {
        $('[data-module-type]:visible').each(function () {
            const offset = $(this).offset();
            const move = listSheets[offset.top.toString() + offset.left.toString()] = listSheets[offset.top.toString() + offset.left.toString()] || 0;
            
            const $node = $('<div class="mm-highlight" />').css({ 
                top: offset.top + move, 
                left: offset.left + move,
                width: $(this).width(),
                height: $(this).height()
            }).html($(this).data('module-type'));
            $node.appendTo(document.body);
            listSheets[offset.top.toString() + offset.left.toString()] += 10;
        });
    }, "h");


    SPC.trigger = (function (fn) {
        return function () {
            console.log('trigger', this.constructor.name);
            fn.apply(this, arguments);
        }
    }(SPC.trigger));

    SPC.subscribe = (function (fn) {
        return function () {
            console.log('subscribe', this.constructor.name);
            fn.apply(this, arguments)
        }
    }(SPC.subscribe));

    GM_webRequest([{ "selector": "*shopping-cart*", "action": "cancel" }], function (info, message, details) {
        alert();
    });
})();