<nav class="pagination">
	<?php $big = 999999999;
	echo paginate_links(array(
		'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
		'format' => '?paged=%#%',
		'current' => max( 1, get_query_var('paged') ),
		'total' => $wp_query->max_num_pages,
        'prev_text' => __('Newer', 'albatross'),
        'next_text' => __('Older', 'albatross'),
        'end_size'  => 1,
        'mid_size'  => 2
	)); ?>
</nav>