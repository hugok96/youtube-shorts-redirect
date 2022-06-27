// ==UserScript==
// @name         YT Shorts Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically redirects to the https://youtube.com/watch?v={id} page when opening a youtube shorts page
// @author       hugomgwtf
// @match        *://*.youtube.com/shorts/*
// @match        *://*.youtube.co/shorts/*
// @match        *://*.youtube.co.uk/shorts/*
// @match        *://*.youtube.co.nz/shorts/*
// @match        *://*.youtube.be/shorts/*
// @match        *://*.youtube.fr/shorts/*
// @match        *://*.youtube.nl/shorts/*
// @match        *://*.youtu.be/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const url = new URL(location);
    const match = /^\/shorts\/(.*?)$/gi.exec(url.pathname);
    if(null !== match)
        window.location = `https://${url.hostname}/watch?v=${match[1]}`;
})();