// ==UserScript==
// @name        I'm not interested in this YouTube video!
// @namespace   http://www.iamnotinterestedinthisyoutubevideo.com
// @version     1.1
// @description I'm not interested in this YouTube video!
// @match       *://www.youtube.com/*
// @run-at      document-end
// @require     https://update.greasyfork.org/scripts/487311/1327382/My%20Trusted-Types%20Helper.js
// @require     https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    if (/youtube\.com\/?$/.test(location.href)) {
        console.log("Youtube home page detected!");

        setInterval((function () {
            let cells = $("ytd-rich-item-renderer.ytd-rich-grid-renderer:not(.fucked)");

            cells.each(function () {
                let cell = $(this);
                let temp = cell.find("yt-thumbnail-view-model");
                temp.hover(function (e) {
                    if (e.ctrlKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button-view-model > button").click();
                        setTimeout(function () {
                            $("span:contains('Not interested')").click();
                        }, 50);
                    }
                    else if (e.altKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button-view-model > button").click();
                        setTimeout(function () {
                            $(`span:contains("Don't recommend channel")`).click();
                        }, 50);
                    }
                });
            });
            cells.addClass("fucked");

            let shorts = $("ytd-rich-item-renderer.ytd-rich-shelf-renderer:not(.fucked)");
            shorts.each(function () {
                let cell = $(this);
                let temp = cell.find("ytm-shorts-lockup-view-model");
                temp.hover(function (e) {
                    if (e.ctrlKey || e.altKey) {
                        $(this).closest("ytd-rich-item-renderer").find("button-view-model > button").click();
                        setTimeout(function () {
                            $("span:visible:contains('Not interested')").click();
                        }, 50);
                    }
                });
            });
            shorts.addClass("fucked");
        }), 2000);
    }

    if (/youtube\.com\/watch/.test(location.href)) {
        setInterval((function () {
            let cells = $("ytd-compact-video-renderer:not(.fucked)");
            cells.each(function () {
                let cell = $(this);
                let temp = cell.find("yt-thumbnail-view-model");
                temp.hover(function (e) {
                    if (e.ctrlKey) {
                        $(this).closest("ytd-compact-video-renderer").find("button-view-model > button").click();
                        setTimeout(function () {
                            $("span:contains('Not interested')").click();
                        }, 50);
                    }
                    else if (e.altKey) {
                        $(this).closest("ytd-compact-video-renderer").find("button-view-model > button").click();
                        setTimeout(function () {
                            $(`span:contains("Don't recommend channel")`).click();
                        }, 50);
                    }
                });
            });
            cells.addClass("fucked");
        }), 2000);
    }
})();



