// ==UserScript==
// @name         YT Shorts Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically redirects to the https://youtube.com/watch?v={id} page when opening a youtube shorts page
// @author       hugomgwtf
// @match        *://*.youtube.com/*
// @match        *://*.youtube.co/*
// @match        *://*.youtube.co.uk/*
// @match        *://*.youtube.co.nz/*
// @match        *://*.youtube.be/*
// @match        *://*.youtube.fr/*
// @match        *://*.youtube.nl/*
// @match        *://*.youtu.be/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function redirectIfShorts() {
        const url = new URL(location);
        const match = /^\/shorts\/(.*?)$/gi.exec(url.pathname);
        if(null !== match)
            window.location = `https://${url.hostname}/watch?v=${match[1]}`;
    }

    window.addEventListener('mouseup', function () {
        setTimeout(() => redirectIfShorts(), 150);
    });
})();