(function($) {

	function toggle_menu(e) {
        var container = $('.sidebar, .menu-toggle');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.container').removeClass('slide');
        }
	}

	function mobile_menu() {
		$('.menu-toggle').click(function() {
			$('.container').toggleClass('slide');
		});

		// hide mobile menu on unfocus
	    $(document).mouseup(function(e) {
	    	toggle_menu(e);
	    }).on('touchend', function(e) {
	    	toggle_menu(e);
	    });
	}

	function init() {

		/*
		// sets the initial app state if there isn't one set (e.g. after reload)
		if (typeof history.replaceState !== 'undefined') {
			history.replaceState({
				slug: location.pathname.replace('/', '')
			}, null, null);
		}
		*/

		// click handler for sidebar
		mobile_menu();

	}

	init();

})(jQuery);