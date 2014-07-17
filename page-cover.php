<?php
/*
Template Name: Cover Page
*/
?>

<?php get_header(); ?>

<div class="cover-nav">
	<h1 class="site-title"><?php bloginfo('name'); ?></h1>
    <div class="site-tagline"><?php bloginfo('description'); ?></div>
    <hr>
    <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'primary-nav', 'menu_class' => 'primary-menu')); ?>
</div>

<?php get_footer(); ?>