(function($) {


/* Global Variables
================================== */

// albatross_vars defined via wp_localize_script
var site_url = albatross_vars.site_url,
	$document = $(document),
	$dynamic = $('#dynamic'),
	$content = $('.content'),
	$sidebar = $('.sidebar'),
	$all_videos = $('iframe[src*="//www.youtube.com"], iframe[src*="//player.vimeo.com"]'),
	$internal_links = $('a[href^="' + site_url + '"], a[href^="/"], a[href^="./"], a[href^="../"]');


/* Page Setup
================================== */

function position_vertically() {
	var $el = $('.sidebar'),
		el_height = $el.outerHeight(),
		container_height = $(window).height();
	$el.add('.cover-nav').css('margin-top', (container_height - el_height) / 2);
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
		new_vid_width = $('.glass-post-body .glass-wrapper').width();

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

	if (typeof history.replaceState !== 'undefined') {
		history.replaceState({
			slug: location.pathname.replace('/', '')
		}, null, null);
	}

	// event handler for back/forward
	window.onpopstate = function() {
		// load_new_page WITH popstate (only triggered with browser back/forward buttons)
		load_new_page(location.href, true);
	};
}

function update_history(link, new_title) {
	history.pushState({
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
	$document.on('click', 'a[href^="' + site_url + '"], a[href^="/"], a[href^="./"], a[href^="../"]', function(e) {
		var $this = $(this),
			href = $this.attr('href');
		load_new_page(href);
		$('a[href="' + href + '"').addClass('current_link').parent().addClass('current_page_item');
		e.preventDefault();
	});

	$document.on('click', '.page-numbers', function() {
		page_scroll(0, 500);
	});
}

function load_new_page(url, popstate) {

	$internal_links.removeClass('current_link');
	$('.current_page_item').removeClass('current_page_item');

	// default popstate is false
	if (typeof(popstate) === 'undefined') {
		popstate = false;
	}

	$.get(url, function(new_page) {
		var $new_page = $(new_page),
			new_content = $('#dynamic', $new_page).html(),
			new_title = $new_page.filter('title').text();

		if (typeof history.pushState === "undefined") {
			// Refresh the page to the new URL if pushState not supported
			location.href = url;
		}

		// update the history
		if (!popstate) {
			update_history(url, new_title);
		}
		// load the content
		$dynamic.html(new_content);

		// if going to homepage
		if (url.slice(0,-1) === site_url) {
			position_vertically();
			$dynamic.addClass('cover');
		} else {
			$dynamic.removeClass('cover');
		}

		
	}).done(function() {
		$sidebar.addClass('transparent');
		$dynamic.removeClass('slide');
	});
}



/* Miscellaneous
================================== */


function init() {

	// // if there is a background-image, store it
	// if ($body.css('background-image') !== 'none') {
	// 	header_image_url = $body.css('background-image');
	// 	header_image_url = header_image_url.replace('url(','').replace(')','');
	// }

	// set onpopstate AND initial app state if there isn't one set (e.g. after reload)
	set_history();
	// position sidebar/cover-nav vertically
	position_vertically();
	// setup responsive videos
	responsive_video_setup();
	// set internal link transitions
	activate_internal_links();
	// add click handlers for menu toggle
	set_menu_toggle();

}

init();

})(jQuery);