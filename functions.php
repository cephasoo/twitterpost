<?php
	//Enqueue Child Theme Stylesheet
	function my_theme_enqueue_styles() {
    	wp_enqueue_style( 'twenty-twenty-one-child-style', get_stylesheet_uri(),
        	array( 'twenty-twenty-one-style' ), 
        	wp_get_theme()->get('Version') // this only works if you have Version in the style header
    	);
	}

	add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

	// Custom Gutenberg block
	require get_stylesheet_directory() . '/inc/gutenberg.php';