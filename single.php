<?php get_header(); ?>

<div class="post">
	<h1 class="post-title"><?php the_title(); ?></h1>

    <?php get_template_part('partials/post-meta'); ?>

    <div class="post-body">
       	<?php while(have_posts()): the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; ?>
	</div>
</div>

<?php get_footer(); ?>