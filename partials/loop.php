 
<section class="post-list">

<div class="archive-header">	
	<?php
		$pagenum = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$header_text = '&mdash; ';

		if (is_search()) {
			$header_text .= sprintf(__('Search Results For: <strong>%s</strong>', 'albatross'), get_search_query('', false));
		} else if (is_tag()) {
			$header_text .= sprintf(__('Tag Archives: <strong>%s</strong>', 'albatross'), single_tag_title('', false));
		} else if (is_category()) {
			$header_text .= sprintf(__('Category Archives: <strong>%s</strong>', 'albatross'), single_cat_title('', false));
		} else {
			$header_text .= $pagenum;
		}

		$header_text .= ' &mdash;';
		echo $header_text;
	?>
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

<?php endwhile; else : ?>

	<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>

<?php endif; ?>

</section>

<?php get_template_part('partials/pagination'); ?>