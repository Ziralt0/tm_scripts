// ==UserScript==
// @name         Remove Kick.com homepage autoplay
// @namespace    https://www.tampermonkey.net/
// @version      1.0
// @description  Simple script to remove the preview/autoplay/recommended section from Kick.com homepage since it can't be perma muted on desktop
// @author       Zirlt0
// @match        https://kick.com/
// @icon         https://kick.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const SELECTORS = [
        'div.flex.min-w-0.flex-col.items-start.gap-1\\.5',
        'div.flex.flex-col.gap-3',
        'div.\\33 xl\\:aspect-auto.\\33 xl\\:w-\\[900px\\].relative.aspect-video.h-\\[328px\\].shrink-0.grow-0.overflow-hidden.\\32 xl\\:h-\\[400px\\]'
    ];

    function removeTargets() {
        SELECTORS.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.remove();
                console.log(`Removed element with selector: ${selector}`);
            });
        });
    }

    removeTargets();

    const observer = new MutationObserver(removeTargets);
    observer.observe(document.body, { childList: true, subtree: true });
})();
