!function(t){function e(){var e=t(".sidebar"),n=e.outerHeight(),a=t(window).height();e.add(".cover-nav").css("margin-top",(a-n)/2)}function n(){y.each(function(){var e=t(this);e.data("aspect_ratio",t(this).attr("height")/t(this).attr("width")).height(e.width()*e.data("aspect_ratio"))}),window.requestAnimationFrame(a)}function a(){window.requestAnimationFrame(a);var e=y.first().width(),n=t(".glass-post-body .glass-wrapper").width();n!==e&&y.each(function(){var e=t(this);e.width(n).height(n*e.data("aspect_ratio"))})}function r(){"undefined"!=typeof history.replaceState&&history.replaceState({slug:location.pathname.replace("/","")},null,null),window.onpopstate=function(){h(location.href,!0)}}function i(t,e){history.pushState({slug:t},e,t)}function o(e,n){t("html,body").stop().animate({scrollTop:e},n)}function s(e){var n=t(".sidebar, .menu-toggle");n.is(e.target)||0!==n.has(e.target).length||(w.removeClass("slide"),v.addClass("transparent"))}function l(){g.on("click",".menu-toggle",function(t){t.preventDefault(),v.toggleClass("transparent"),w.toggleClass("slide")}),g.mouseup(function(t){s(t)}).on("touchend",function(t){s(t)})}function c(){g.on("click",'a[href^="'+p+'"], a[href^="/"], a[href^="./"], a[href^="../"]',function(e){var n=t(this),a=n.attr("href");h(a),t('a[href="'+a+'"').addClass("current_link").parent().addClass("current_page_item"),e.preventDefault()}),g.on("click",".page-numbers",function(){o(0,500)})}function h(n,a){_.removeClass("current_link"),t(".current_page_item").removeClass("current_page_item"),"undefined"==typeof a&&(a=!1),t.get(n,function(r){var o=t(r),s=t("#dynamic",o).html(),l=o.filter("title").text();f(o.filter('link[rel="stylesheet"]'),!0);var c=r.replace(/<script/gi,"<albascript").replace(/<\/script/gi,"</albascript");u(t(c).filter("albascript"),!0),"undefined"==typeof history.pushState&&(location.href=n),a||i(n,l),m.html(s),n.slice(0,-1)===p?(e(),m.addClass("cover")):m.removeClass("cover")}).done(function(){v.addClass("transparent"),m.removeClass("slide")})}function u(e,n){e.each(function(){var e=t(this).attr("src");e&&-1===t.inArray(e,C)&&(C.push(e),n&&t.getScript(e))}),window.console.log("scripts.length = "+e.length),window.console.log("external_js.length = "+C.length),window.console.log("external_js = "),window.console.log(C)}function f(e,n){e.each(function(){var e=t(this).attr("href");-1===t.inArray(e,b)&&(b.push(e),n&&t("head").append('<link rel="stylesheet" type="text/css" href="'+e+'">'))})}function d(){r(),e(),n(),c(),l(),f(t('link[rel="stylesheet"]'),!1),u(t("script"),!1)}var p=albatross_vars.site_url,g=t(document),m=t("#dynamic"),w=t(".content"),v=t(".sidebar"),y=t('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),_=t('a[href^="'+p+'"], a[href^="/"], a[href^="./"], a[href^="../"]'),C=[],b=[];d()}(jQuery);