!function(t){function e(){var e=t(".sidebar"),a=e.outerHeight(),n=t(window).height();e.add(".cover-nav").css("margin-top",(n-a)/2)}function a(){w.each(function(){var e=t(this);e.data("aspect_ratio",t(this).attr("height")/t(this).attr("width")).height(e.width()*e.data("aspect_ratio"))}),window.requestAnimationFrame(n)}function n(){window.requestAnimationFrame(n);var e=w.first().width(),a=t(".glass-post-body .glass-wrapper").width();a!==e&&w.each(function(){var e=t(this);e.width(a).height(a*e.data("aspect_ratio"))})}function r(){"undefined"!=typeof history.replaceState&&history.replaceState({slug:location.pathname.replace("/","")},null,null),window.onpopstate=function(){u(location.href,!0)}}function i(t,e){history.pushState({slug:t},e,t)}function o(e,a){t("html,body").stop().animate({scrollTop:e},a)}function s(e){var a=t(".sidebar, .menu-toggle");a.is(e.target)||0!==a.has(e.target).length||(g.removeClass("slide"),v.addClass("transparent"))}function c(){p.on("click",".menu-toggle",function(t){t.preventDefault(),v.toggleClass("transparent"),g.toggleClass("slide")}),p.mouseup(function(t){s(t)}).on("touchend",function(t){s(t)})}function l(){p.on("click",'a[href^="'+d+'"], a[href^="/"], a[href^="./"], a[href^="../"]',function(e){var a=t(this),n=a.attr("href");u(n),t('a[href="'+n+'"').addClass("current_link").parent().addClass("current_page_item"),e.preventDefault()}),p.on("click",".page-numbers",function(){o(0,500)})}function u(a,n){y.removeClass("current_link"),t(".current_page_item").removeClass("current_page_item"),"undefined"==typeof n&&(n=!1),t.get(a,function(r){var o=t(r),s=t("#dynamic",o).html(),c=o.filter("title").text(),l=r.replace(/<script/gi,"<albascript"),u=o.filter("style");f(t(l).filter("albascript").add(u),!0),"undefined"==typeof history.pushState&&(location.href=a),n||i(a,c),m.html(s),a.slice(0,-1)===d?(e(),m.addClass("cover")):m.removeClass("cover")}).done(function(){v.addClass("transparent"),m.removeClass("slide")})}function f(e,a){e.each(function(){var e=t(this).attr("src");e&&-1===t.inArray(e,_)&&(_.push(e),a&&t.getScript(e))}),window.console.log(_)}function h(){r(),e(),a(),l(),c(),f(t("script").add("style"),!1)}var d=albatross_vars.site_url,p=t(document),m=t("#dynamic"),g=t(".content"),v=t(".sidebar"),w=t('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),y=t('a[href^="'+d+'"], a[href^="/"], a[href^="./"], a[href^="../"]'),_=[];h()}(jQuery);