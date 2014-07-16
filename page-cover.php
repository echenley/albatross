<?php
/*
Template Name: Cover Page
*/
?>

<?php get_header(); ?>

<div class="cover-nav">
	<h1 class="site-title">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="title-link"><?php bloginfo('name'); ?></a>
    </h1>
    <div class="site-tagline"><?php bloginfo('description'); ?></div>
    <hr>
    <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'primary-nav', 'menu_class' => 'primary-menu')); ?>
</div>

<?php get_footer(); ?>