// ==UserScript==
// @name        I'm not interested in this YouTube video!
// @namespace   http://www.iamnotinterestedinthisyoutubevideo.com
// @version     1.1
// @description I'm not interested in this YouTube video!
// @match       *://www.youtube.com/*
// @run-at      document-end
// @require     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    if (/youtube\.com\/?$/.test(location.href)) {
        console.log("Youtube home page detected!");
    
        setInterval((function () {
            let cells = $("ytd-rich-item-renderer.ytd-rich-grid-renderer.style-scope:not(.fucked)");
    
            cells.each(function () {
                let cell = $(this);
                let temp = cell.find("ytd-thumbnail");
                temp.hover(function (e) {
                    if (e.ctrlKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function () {
                            $("yt-formatted-string:contains('Not interested')").click();
                        }, 50);
                    }
                    else if (e.altKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function () {
                            $(`yt-formatted-string:contains("Don't recommend channel")`).click();
                        }, 50);
                    }
                });
            });
            cells.addClass("fucked");
    
            let shorts = $("ytd-rich-item-renderer.ytd-rich-shelf-renderer.style-scope:not(.fucked)");
            shorts.each(function () {
                let cell = $(this);
                let temp = cell.find("ytm-shorts-lockup-view-model");
                temp.hover(function (e) {
                    if (e.ctrlKey || e.altKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button.yt-spec-button-shape-next").click();
                        setTimeout(function () {
                            $("span.yt-core-attributed-string:visible:contains('Not interested')").click();
                        }, 50);
                    }
                });
            });
            shorts.addClass("fucked");
        }), 2000);
    }
    
    if (/youtube\.com\/watch/.test(location.href)) {
        setInterval((function () {
            let cells = $("ytd-compact-video-renderer.style-scope:not(.fucked)");
            cells.each(function () {
                let cell = $(this);
                let temp = cell.find("ytd-thumbnail");
                temp.hover(function (e) {
                    if (e.ctrlKey) {
                        $(this).closest("ytd-compact-video-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function () {
                            $("yt-formatted-string:contains('Not interested')").click();
                        }, 50);
                    }
                    else if (e.altKey) {
                        $(this).closest("ytd-compact-video-renderer").find("button.style-scope.yt-icon-button").click();
                        setTimeout(function () {
                            $(`yt-formatted-string:contains("Don't recommend channel")`).click();
                        }, 50);
                    }
                });
            });
            cells.addClass("fucked");
        }), 2000);
    }
})();

