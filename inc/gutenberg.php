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
					),
						array(
						'name' => 'Black',
						'slug' => 'black',
						'color' => '#000000'
					),
						array(
						'name' => 'Orange',
						'slug' => 'orange',
						'color' => '#ffa500'
					),
						array(
						'name' => 'Navy Blue',
						'slug' => 'navy-blue',
						'color' => '#000080'
						)
					)
				);
			}

	add_action( 'init', 'twitpos_default_cover_color' );