!function($,e){function t(){var e=$(".post-body"),t=e.children().last();t.is("p")?t.append(" &#8718;"):e.append('<hr class="endpost">')}function n(){w.each(function(){var e=$(this);e.data("aspect_ratio",$(this).attr("height")/$(this).attr("width")).height(e.width()*e.data("aspect_ratio"))}),window.requestAnimationFrame(a)}function a(){window.requestAnimationFrame(a);var e=w.first().width(),t=$(".post-body").width();t!==e&&w.each(function(){var e=$(this);e.width(t).height(t*e.data("aspect_ratio"))})}function i(e){var t=$(".sidebar, .menu-toggle");t.is(e.target)||0!==t.has(e.target).length||(d.removeClass("slide"),h.addClass("transparent"))}function o(){c.on("click",".menu-toggle",function(e){e.preventDefault(),h.toggleClass("transparent"),d.toggleClass("slide")}),c.mouseup(function(e){i(e)}).on("touchend",function(e){i(e)})}function r(){l.hasClass("page-template-page-cover-php")||o();var e='a[href^="'+m+'"]:not(.menu-toggle), a[href^="http://stinky.local"]:not(.menu-toggle), a[href^="/"]:not(.menu-toggle), a[href^="./"]:not(.menu-toggle), a[href^="../"]:not(.menu-toggle)';c.on("click",e,function(e){e.metaKey||e.ctrlKey||(e.preventDefault(),$(".current-menu-item").removeClass("current-menu-item"),$(this).parent().addClass("current-menu-item"),d.addClass("fade"),setTimeout(function(){d.hasClass("slide")?(d.removeClass("slide"),setTimeout(function(){window.location.href=e.currentTarget.href},300)):window.location.href=e.currentTarget.href},200))})}function s(){n(),r(),"single.php"===u&&t()}var m=e.site_url,u=e.current_theme_template,c=$(document),l=$("body"),d=$("#dynamic"),h=$(".sidebar"),w=$('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]');s()}(jQuery,albatross_vars),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-e)),i=window.setTimeout(function(){t(n+a)},a);return e=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();