<!DOCTYPE html>
<html <?php language_attributes() ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php wp_title('|', true, 'right'); ?></title>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>

        <header class="sidebar">

            <a href="<?php echo esc_url(home_url('/')); ?>" class="title-link"><div class="cover-photo" style="background: url(<?php header_image(); ?>) center center; background-size: cover;"></div></a>
            <h1 class="site-title">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="title-link"><?php bloginfo('name'); ?></a>
            </h1>
            <div class="site-tagline"><?php bloginfo('description'); ?></div>
            <hr>
            <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'primary-nav', 'menu_class' => 'primary-menu')); ?>
        </header>

        <div class="container cf">
            <section id="dynamic" class="content cf">
                <div class="content-header cf">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="title-link-mobile"><?php bloginfo('name'); ?></a>
                    <?php
                        if (is_home() || is_single()) {
                            // blog page
                            $name = "Blog";
                        } else if (is_page() && !is_front_page()) {
                            $name = get_the_title();
                        } else {
                            $name = 0;
                        }
                        if ($name) {
                            echo ' &rarr; <a href="#">' . $name . '</a>';
                        }
                    ?>
                    <a href="#" class="menu-toggle">&#9776;</a>
                </div>