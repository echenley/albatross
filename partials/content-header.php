<div class="content-header cf">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="title-link-mobile"><?php bloginfo('name'); ?></a>
    <?php
        if (is_home() || is_single()) {
            // blog page
            $name = "Blog";
            $url =  site_url() . '/blog/';
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