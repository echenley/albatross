<?php get_header(); ?>
<?php get_template_part('partials/sidebar'); ?>
<?php get_template_part('partials/content-top'); ?>
<?php get_template_part('partials/content-header'); ?>

<div class="post">
	<h1 class="post-title"><?php the_title(); ?></h1>

    <div class="post-body">
	    <?php if (wp_attachment_is_image($post->ID)) : $att_image = wp_get_attachment_image_src($post->ID, 'full')[0]; ?>
	      <a href="<?php echo wp_get_attachment_url($post->ID); ?>" title="<?php printf( __( 'Attachment: %s', 'counterpoint' ), get_the_title() ); ?>" rel="attachment"><img src="<?php echo $att_image; ?>"  class="attachment-medium aligncenter" alt="<?php $post->post_excerpt; ?>" /></a>
	    <?php else : ?>
	      <a href="<?php echo wp_get_attachment_url($post->ID) ?>" title="<?php the_title(); ?>" rel="attachment"><?php echo wp_basename($post->guid); ?></a>
	    <?php endif; ?>
	</div>
</div>

<?php get_template_part('partials/content-bottom'); ?>
<?php get_footer(); ?>