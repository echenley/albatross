<!DOCTYPE html>
<html class="no-js" <?php language_attributes() ?> style="background: url(<?php header_image(); ?>) fixed no-repeat center center; background-size: cover;">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php wp_title('|', true, 'right'); ?></title>
        <script>document.documentElement.className = document.documentElement.className.replace('no-js','fadein');</script>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div class="container cf">