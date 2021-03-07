// ==UserScript==
// @name         Shellshock.io aimbot (WORKING)
// @version      1.0
// @author       Yuimatcha
// @description  Shellshock Aimbot + Esp
// @updateURL    https://github.com/yuimatcha/shellshock-dot-io/raw/main/shellshock.user.js
// @downloadURL  https://github.com/yuimatcha/shellshock-dot-io/raw/main/shellshock.user.js
// @match        *://shellshock.io/*
// @grant        none
// @namespace    https://yuimatcha.github.io/shellshock-dot-io/
// ==/UserScript==

var script = document.createElement('script');
script.src = '//raw.githubusercontent.com/yuimatcha/shellshock-dot-io/main/shellshock.min.js';
script.type = 'text/javascript';
document.body.appendChild(script);