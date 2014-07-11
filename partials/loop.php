
<section class="post-list">

<div class="archive-header">
	<?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; ?>
	&mdash; <?php echo $paged; ?> &mdash;
</div>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<article class="post">
		<h1 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permalink to: <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>

	    <?php get_template_part('partials/post-meta'); ?>

        <div class="post-body">
			<?php the_content(); ?>
		</div>

		<?php if(has_tag()) { ?>
	        <div class="tags post-info">
	        	<img src="<?php echo get_template_directory_uri(); ?>/library/images/open-iconic/svg/tag.svg" alt="tag" class="icon">
        		<?php the_tags(); ?>
	        </div>
	    <?php } ?>
    </article>

    <hr>

<?php endwhile; else: ?>

	<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>

<?php endif; ?>

</section>

<?php get_template_part('partials/pagination'); ?>