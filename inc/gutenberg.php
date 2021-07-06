<?php

	//Custom Gutenberg Function
	function twitpos_default_cover_color ()
		{
			add_theme_support( 
				'editor-color-palette',
					// code...
					array(
						array(
						'name' => 'White',
						'slug' => 'white',
						'color' => '#ffffff'
					)
				)
			 );
	}

	add_action( 'init', 'twitpos_default_cover_color' );