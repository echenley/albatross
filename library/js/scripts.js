(function($) {


/* Global Variables
================================== */

var site_url = albatross_vars.site_url,
	current_theme_template = albatross_vars.current_theme_template,
	$document = $(document),
	$body = $('body'),
	$dynamic = $('#dynamic'),
	$content = $('.content'),
	$sidebar = $('.sidebar'),
	$title = $('title'),
	$all_videos = $('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]');


/* Page Setup
================================== */

function position_vertically() {
	var $el = $('.sidebar'),
		el_height = $el.outerHeight(),
		container_height = $(window).height();
	$el.css('margin-top', (container_height - el_height) / 2);
}

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



/* History Management
================================== */

function set_history() {
	// set history state if there isn't one
	if (typeof history.replaceState !== 'undefined') {
		history.replaceState({
			slug: location.pathname.replace('/', '')
		}, null, null);
	}

	// event handler for back/forward
	window.onpopstate = function() {
		// load the new page
		load_new_page(window.location.href, true);
	};
}

function update_history(link, new_title) {
	history.pushState({
		ajaxload: true,
		slug: link
	}, new_title, link);
}



/* Dynamic Content
================================== */

function page_scroll(scrollto, speed) {
	$('html,body').stop().animate({ scrollTop: scrollto }, speed);
}

function toggle_sidebar(e) {
    var container = $('.sidebar, .menu-toggle');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $content.removeClass('slide');
        $sidebar.addClass('transparent');
    }
}

function set_menu_toggle() {
	$document.on('click', '.menu-toggle', function(e) {
		e.preventDefault();
		$sidebar.toggleClass('transparent');
		$content.toggleClass('slide');
	});

	// hide mobile menu on unfocus
    $document.mouseup(function(e) {
    	toggle_sidebar(e);
    }).on('touchend', function(e) {
    	toggle_sidebar(e);
    });
}

function activate_internal_links() {

	// menu toggle behavior
	if (!$body.hasClass('page-template-page-cover-php')) {
		set_menu_toggle();
	}

	var internal_links = 'a[href^="' + site_url + '"]:not(.page-numbers), a[href^="/"]:not(.page-numbers), a[href^="./"]:not(.page-numbers), a[href^="../"]:not(.page-numbers)';

	// main menu behavior
	$document.on('click', internal_links, function(e) {
		e.preventDefault();
		$('.current-menu-item').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
		$dynamic.addClass('fade');

		// unslide after a brief pause
		setTimeout(function() {
			if ($dynamic.hasClass('slide')) {
				$dynamic.removeClass('slide');
				// wait for slide, then load the new page
				setTimeout(function() { 
					window.location.href = e.target.href;
				}, 300);
			} else {
				// just load that shit
				window.location.href = e.target.href;
			}
			
		}, 200);

	});

	// pagination behavior
	$document.on('click', '.page-numbers', function(e) {
		e.preventDefault();
		var href = e.target.href;
		load_new_page(href);
		page_scroll(0, 600);
	});
}

function load_new_page(url, popstate) {

	// default popstate is false
	if (typeof popstate === 'undefined') {
		popstate = false;
	}

	// fade out the div
	if (!popstate) {
		$dynamic.addClass('fade');
	}

	// get it gurl
	$.getJSON(url, 'ajax', function(json_data) {

		// set new title
		$title.text(json_data.title);
		// load the content
		$dynamic.html(json_data.content);

		if (typeof history.pushState === 'undefined') {
			// Refresh the page to the new URL if pushState not supported
			location.href = url;
		}

		// update the history
		if (!popstate) {
			update_history(url, json_data.title);
		}

		// load the content, reset layout
		// setTimeout ensures the fade effect will occur before content is reloaded
		setTimeout(function() { 
			$dynamic.html(json_data.content);
			$sidebar.addClass('transparent');
			$dynamic.removeClass('slide fade');
		}, 500);

	});
}



/* Initialize
================================== */

function init() {

	// set onpopstate AND initial app state if there isn't one set (e.g. after reload)
	set_history();
	// position sidebar/cover-nav vertically
	position_vertically();
	// setup responsive videos
	responsive_video_setup();
	// set special link behavior
	activate_internal_links();

	if (current_theme_template === 'single.php') {
		add_end_mark();
	}

}

init();

})(jQuery);
