!function($){function t(){var t=$(".sidebar"),e=t.outerHeight(),n=$(window).height();t.add(".cover-nav").css("margin-top",(n-e)/2)}function e(){v.each(function(){var t=$(this);t.data("aspect_ratio",$(this).attr("height")/$(this).attr("width")).height(t.width()*t.data("aspect_ratio"))}),window.requestAnimationFrame(n)}function n(){window.requestAnimationFrame(n);var t=v.first().width(),e=$(".glass-post-body .glass-wrapper").width();e!==t&&v.each(function(){var t=$(this);t.width(e).height(e*t.data("aspect_ratio"))})}function a(){"undefined"!=typeof history.replaceState&&history.replaceState({slug:location.pathname.replace("/","")},null,null),window.onpopstate=function(){u(location.href,!0)}}function r(t,e){history.pushState({slug:t},e,t)}function i(t,e){t.each(function(){var t=$(this).attr("src");t&&-1===$.inArray(t,_)&&(_.push(t),e&&$.getScript(t))}),window.console.log("scripts.length = "+t.length),window.console.log("external_js.length = "+_.length),window.console.log("external_js = "),window.console.log(_)}function s(t,e){t.each(function(){var t=$(this).attr("href");-1===$.inArray(t,C)&&(C.push(t),e&&$("head").append('<link rel="stylesheet" type="text/css" href="'+t+'">'))})}function o(t,e){$("html,body").stop().animate({scrollTop:t},e)}function l(t){var e=$(".sidebar, .menu-toggle");e.is(t.target)||0!==e.has(t.target).length||(m.removeClass("slide"),w.addClass("transparent"))}function c(){p.on("click",".menu-toggle",function(t){t.preventDefault(),w.toggleClass("transparent"),m.toggleClass("slide")}),p.mouseup(function(t){l(t)}).on("touchend",function(t){l(t)})}function h(){p.on("click",'a[href^="'+d+'"], a[href^="/"], a[href^="./"], a[href^="../"]',function(t){var e=$(this),n=e.attr("href");u(n),$('a[href="'+n+'"').addClass("current_link").parent().addClass("current_page_item"),t.preventDefault()}),p.on("click",".page-numbers",function(){o(0,500)})}function u(e,n){y.removeClass("current_link"),$(".current_page_item").removeClass("current_page_item"),"undefined"==typeof n&&(n=!1),$.get(e).done(function(a){var o=$(a),l=$("#dynamic",o).html(),c=o.filter("title").text();s(o.filter('link[rel="stylesheet"]'),!0);var h=a.replace(/<script/gi,"<albascript").replace(/<\/script/gi,"</albascript");i($(h).filter("albascript"),!0),"undefined"==typeof history.pushState&&(location.href=e),n||r(e,c),g.html(l),e.slice(0,-1)===d?(t(),g.addClass("cover")):g.removeClass("cover"),w.addClass("transparent"),g.removeClass("slide")})}function f(){a(),t(),e(),h(),c(),s($('link[rel="stylesheet"]'),!1),i($("script"),!1)}var d=albatross_vars.site_url,p=$(document),g=$("#dynamic"),m=$(".content"),w=$(".sidebar"),v=$('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),y=$('a[href^="'+d+'"], a[href^="/"], a[href^="./"], a[href^="../"]'),_=[],C=[];f()}(jQuery);