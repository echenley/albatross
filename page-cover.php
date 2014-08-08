<?php
/*
Template Name: Cover Page
*/
?>

<?php get_header(); ?>

<div class="cover-container">
	<?php get_template_part('partials/sidebar'); ?>
	<div class="upcoming">
		<?php dynamic_sidebar('event-widget'); ?>
	</div>
</div>

<?php get_footer(); ?>