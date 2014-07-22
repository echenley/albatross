<?php

// ALBATROSS SETUP FUNCTION

if (!function_exists('albatross_setup')) {
    function albatross_setup() {
    
        load_theme_textdomain('albatross', get_template_directory_uri() . '/languages');
        
        $locale = get_locale();
        $locale_file = get_template_directory_uri() . "/languages/$locale.php";
        if (is_readable($locale_file)) {
            require_once($locale_file);
        }   
        
        // Theme Support //
        add_theme_support('post-thumbnails');
        add_theme_support('automatic-feed-links');
        add_theme_support('custom-header', array(
            'flex-width' => true,
            'flex-height' => true,
            'default-image' => get_template_directory_uri() . '/images/header.jpg'
        ));
        
        // Sidebar Menu //
        register_nav_menu('primary', __('Primary', 'albatross'));

        // Remove Admin Bar //
        add_filter('show_admin_bar', '__return_false');
        
        // Content Width Setup //
        global $content_width;
        if (!isset($content_width)) $content_width = 1080;
    
    }
} // End Counterpoint Setup
add_action('after_setup_theme', 'albatross_setup');


// CUSTOM WP_TITLE

add_filter('wp_title', 'albatross_title', 10, 3); 
function albatross_title($title, $sep, $seplocation) {
    global $page, $paged;

    // Don't affect in feeds.
    if (is_feed()) return $title;

    // Add the blog's name
    if ('right' == $seplocation)
        $title .= get_bloginfo('name');
    else
        $title = get_bloginfo('name') . $title;

    // Add the blog description for the home/front page.
    $site_description = get_bloginfo('description', 'display');

    if ($site_description && (is_home() || is_front_page()))
        $title .= " {$sep} {$site_description}";

    // Add a page number if necessary:
    if ($paged >= 2 || $page >= 2)
        $title .= " {$sep} " . sprintf(__('Page %s', 'albatross'), max($paged, $page));

    return $title;
}


// ENQUEUE JAVASCRIPT, FONTS AND CSS

add_action('wp_enqueue_scripts', 'albatross_scripts', 11);
function albatross_scripts() {
    global $numpages;

    // CSS //
    wp_enqueue_style('albatross-fonts', albatross_font_url(), array(), null);
    wp_enqueue_style('albatross-style', get_template_directory_uri() . '/library/css/style.css');
        
    // Javascript //
    wp_enqueue_script('albatross-scripts', get_template_directory_uri() . '/library/js/scripts-min.js', array('jquery'), '', true);
    wp_localize_script('albatross-scripts', 'albatross_vars', array(
        'site_url' => get_site_url()
    ));

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
	}
}

// FONTS
 
function albatross_font_url() {
    $font_url = '';
    /*
     * Translators: If there are characters in your language that are not supported
     * by the current font, translate this to 'off'. Do not translate into your own language.
     */
    if ('off' !== _x('on', 'Open Sans font: on or off', 'albatross'))
        $font_url = add_query_arg('family', urlencode( 'Poiret One|Open Sans:300,400,300italic' ), '//fonts.googleapis.com/css');
    
    return $font_url;
}

// CATEGORIES DISPLAY

function albatross_categories() {
    $categories = get_the_category();
    $separator = ', ';
    $output = _n('Topic', 'Topics', count($categories), 'albatross') . ': ';
    if ($categories) {
        foreach ($categories as $category) {
            $output .= '<a href="' . get_category_link( $category->term_id ) . '"';
            $output .= ' title="' . esc_attr( sprintf( __('View all posts in %s', 'albatross'), $category->name ) ) . '">' . $category->cat_name . '</a>' . $separator;
        }
        echo trim($output, $separator);
    }
}

// LOAD TEMPLATE PART AS STRING

function albatross_get_template_string($template_name, $part_name = null) {
    ob_start();
    get_template_part($template_name, $part_name);
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}



?>