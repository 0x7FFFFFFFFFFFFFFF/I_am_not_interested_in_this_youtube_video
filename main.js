// ==UserScript==
// @name        I'm not interested in this fucking YouTube video!
// @namespace   http://www.iamnotinterestedinthisfuckingyoutubevideo.com
// @version     1.0
// @description I'm not interested in this fucking YouTube video!
// @match       *://www.youtube.com/*
// @run-at      document-end
// @require     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    if (/youtube\.com\/?$/.test(location.href)) {
        setInterval((function () {
            let cells = $("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer:not(.fucked)");
            cells.each(function(){
                let cell = $(this);
                let temp = cell.find("ytd-thumbnail");
                temp.hover(function(e){
                    if(e.ctrlKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function(){
                            $("yt-formatted-string:contains('Not interested')").click();
                        }, 50);
                    }
                    else if(e.altKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function(){
                            $(`yt-formatted-string:contains("Don't recommend channel")`).click();
                        }, 50);
                    }
                });
            });
            cells.addClass("fucked");
        }), 2000);
    }
})();
