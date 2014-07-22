<div class="content-header cf">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="content-header-title"><?php bloginfo('name'); ?></a>
    <?php
        if (is_home() || is_single()) {
            // blog page
            $name = 'Blog';
            $url = get_option('show_on_front') == 'page' ? get_permalink(get_option('page_for_posts')) : esc_url(home_url('/'));
        } else if (is_archive()) {
            $name = 'Archives';
            $url = get_option('show_on_front') == 'page' ? get_permalink(get_option('page_for_posts')) : esc_url(home_url('/'));;
        } else if (is_page() && !is_front_page()) {
            // regular page
            $name = get_the_title();
            $url =  get_permalink($post->ID);
        } else {
            $name = 0;
        }
        if ($name) {
            echo ' &rarr; <a href="' . $url . '">' . $name . '</a>';
        }
    ?>
    <a href="#" class="menu-toggle">&#9776;</a>
</div>