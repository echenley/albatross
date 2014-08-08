<?php

$albatross_json = array(
	'title' => wp_title('|', false, 'right'),
	'content' => albatross_get_template_string('partials/spinner')
				 albatross_get_template_string('partials/content-header') .
				 albatross_get_template_string('partials/loop')
);

// return json if called with ajax
if (isset($_GET['ajax'])) {

	$albatross_json_string = json_encode($albatross_json);

	header('Content-Type: application/json');
	echo $albatross_json_string;
	exit();
	
// otherwise load page normally
} else {
	
	get_header();
	get_template_part('partials/content-top');
	echo $albatross_json['content'];
	get_template_part('partials/content-bottom');
	get_footer();

} ?>