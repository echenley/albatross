<?php

$albatross_json = array(
	'title' => wp_title('|', false, 'right'),
	'content' => albatross_get_template_string('partials/content-top') . 
				 albatross_get_template_string('partials/content-header') .
				 albatross_get_template_string('partials/loop') .
				 albatross_get_template_string('partials/content-bottom')
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
	echo $albatross_json['content'];
	get_footer();

} ?>