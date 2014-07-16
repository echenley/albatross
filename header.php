<!DOCTYPE html>
<html <?php language_attributes() ?> style="background: url(<?php header_image(); ?>) fixed no-repeat center center; background-size: cover;">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php wp_title('|', true, 'right'); ?></title>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div class="container cf">

            <?php get_template_part('partials/sidebar'); ?>

            <section id="dynamic" class="content cf <?php if (is_page_template('page-cover.php')) echo 'cover'; ?>">