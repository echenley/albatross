!function(t){function e(){var e=t(".sidebar"),a=e.outerHeight(),n=t(window).height();e.add(".cover-nav").css("margin-top",(n-a)/2)}function a(){d.each(function(){var e=t(this);e.data("aspect_ratio",t(this).attr("height")/t(this).attr("width")).height(e.width()*e.data("aspect_ratio"))}),window.requestAnimationFrame(n)}function n(){window.requestAnimationFrame(n);var e=d.first().width(),a=t(".glass-post-body .glass-wrapper").width();a!==e&&d.each(function(){var e=t(this);e.width(a).height(a*e.data("aspect_ratio"))})}function r(){"undefined"!=typeof history.replaceState&&history.replaceState({slug:location.pathname.replace("/","")},null,null),window.onpopstate=function(){l(location.href,!0)}}function i(t,e){history.pushState({slug:t},e,t)}function o(e){var a=t(".sidebar, .menu-toggle");a.is(e.target)||0!==a.has(e.target).length||(p.removeClass("slide"),m.addClass("transparent"))}function s(){h.on("click",".menu-toggle",function(t){t.preventDefault(),m.toggleClass("transparent"),p.toggleClass("slide")}),h.mouseup(function(t){o(t)}).on("touchend",function(t){o(t)})}function c(){h.on("click",'a[href^="'+g+'"], a[href^="/"], a[href^="./"], a[href^="../"]',function(e){var a=t(this),n=a.attr("href");l(n),t('a[href="'+n+'"').addClass("current_link").parent().addClass("current_page_item"),e.preventDefault()})}function l(a,n){v.removeClass("current_link"),t(".current_page_item").removeClass("current_page_item"),"undefined"==typeof n&&(n=!1),t.get(a,function(r){var o=t(r),s=t("#dynamic",o).html(),c=o.filter("title").text();"undefined"==typeof history.pushState&&(location.href=a),n||i(a,c),f.html(s),a.slice(0,-1)===g?(e(),f.addClass("cover")):f.removeClass("cover")}).done(function(){m.addClass("transparent"),f.removeClass("slide")})}function u(){m.addClass("transparent"),r(),e(),a(),c(),s()}var h=t(document),d=t('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),f=t("#dynamic"),p=t(".content"),m=t(".sidebar"),g=location.protocol+"//"+top.location.host.toString(),v=t('a[href^="'+g+'"], a[href^="/"], a[href^="./"], a[href^="../"]');u()}(jQuery);