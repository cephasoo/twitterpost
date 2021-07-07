const { registerBlockType } = wp.blocks;

	//built-in attributes
	registerBlockType('twitpos/custom-tweet', {
		title: 'Tweet Block',
		description: 'Block to generate custom tweet elements',
		icon: 'twitter',
		category: 'layout',

	//Custom Attributes
	attributes: {},
	
	//Custom Functions
	
	//built-in functions
	edit() {},

	save() {}
	
	}
);