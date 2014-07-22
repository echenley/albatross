<header class="sidebar<?php if (!is_page_template('page-cover.php')) echo ' transparent'; ?>">
    <h1 class="site-title">
    	<?php
    		if (is_page_template('page-cover.php')) {
				bloginfo('name');
    		} else { ?>
    			<a href="<?php echo esc_url(home_url('/')); ?>" class="title-link"><?php bloginfo('name'); ?></a>
    		<?php }
    	?>
    </h1>
    <div class="site-tagline"><?php bloginfo('description'); ?></div>
    <hr>
    <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'primary-nav', 'menu_class' => 'primary-menu')); ?>
</header>