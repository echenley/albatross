(function($, albatross_vars) {


/* Global Variables
================================== */

var site_url = albatross_vars.site_url,
	current_theme_template = albatross_vars.current_theme_template,
	$document = $(document),
	$body = $('body'),
	$dynamic = $('#dynamic'),
	$sidebar = $('.sidebar'),
	$all_videos = $('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]');


/* Page Setup
================================== */

// adds end mark to end of posts
function add_end_mark() {
	var $wrapper = $('.post-body'),
		$last_element = $wrapper.children().last();

	if ($last_element.is('p')) {
		$last_element.append(' &#8718;');
	} else {
		$wrapper.append('<hr class="endpost">');
	}
}


/* Responsivity
================================== */

// strips iframes of their height/width attributes
function responsive_video_setup() {

	$all_videos.each(function() {
	    var $el = $(this);
	    $el.data('aspect_ratio', $(this).attr('height') / $(this).attr('width'))
	    	.height($el.width() * $el.data('aspect_ratio'));
	});

	// check if videos need resize
	window.requestAnimationFrame(resize_videos);
}

// resizes iframes to fit container
function resize_videos() {

	window.requestAnimationFrame(resize_videos);

	var old_vid_width = $all_videos.first().width(),
		new_vid_width = $('.post-body').width();

	if (new_vid_width !== old_vid_width) {
		$all_videos.each(function() {
		    var $el = $(this);
		    $el.width(new_vid_width).height(new_vid_width * $el.data('aspect_ratio'));
		});
	}
}



/* Dynamic Content
================================== */

function toggle_sidebar(e) {
    var container = $('.sidebar, .menu-toggle');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $dynamic.removeClass('slide');
        $sidebar.addClass('transparent');
    }
}

function set_menu_toggle() {
	$document.on('click', '.menu-toggle', function(e) {
		e.preventDefault();
		$sidebar.toggleClass('transparent');
		$dynamic.toggleClass('slide');
	});

	// hide mobile menu on unfocus
    $document.mouseup(function(e) {
    	toggle_sidebar(e);
    }).on('touchend', function(e) {
    	toggle_sidebar(e);
    });
}

function activate_internal_links() {

	// set menu toggle behavior
	if (!$body.hasClass('page-template-page-cover-php')) {
		set_menu_toggle();
	}

	var not = ':not(.menu-toggle)';

	var internal_links = 'a[href^="' + site_url + '"]' + not + ', ' +
		'a[href^="http://stinky.local"]' + not + ', ' +
		'a[href^="/"]' + not + ', ' +
		'a[href^="./"]' + not + ', ' +
		'a[href^="../"]' + not;

	// main menu behavior
	$document.on('click', internal_links, function(e) {

		// allow command-click and control-click to open new tab
		if (e.metaKey || e.ctrlKey) {  
		    return;
		}

		e.preventDefault();

		var href = e.target.href || e.currentTarget.href;

		$('.current-menu-item').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');

		$dynamic.addClass('fade');

		// unslide after a brief pause
		setTimeout(function() {
			if ($dynamic.hasClass('slide')) {
				$dynamic.removeClass('slide');
				// wait for slide, then load the new page
				setTimeout(function() { 
					window.location.href = href;
				}, 300);
			} else {
				// just load that shit
				window.location.href = href;
			}
			
		}, 100);

	});
}



/* Initialize
================================== */

function init() {

	// setup responsive videos
	responsive_video_setup();
	// set special link behavior
	activate_internal_links();

	if (current_theme_template === 'single.php') {
		add_end_mark();
	}

}

init();

})(jQuery, albatross_vars);


/* Plugins/Shims
============================================== */

// window.requestAnimationFrame() Shim
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
  	}
 
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

// END window.requestAnimationFrame() Shim
