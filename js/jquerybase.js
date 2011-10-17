$(document).ready(function() { 
	
	app.loadPlugins()

	//Initialize for all pages
	app.init.main()
		
})

var app = {
	init: {
		main: function () {
			//Cache the DOM
			jQuery.root = jQuery(document)
			//This is how you use it:
			//jQuery.root.find('div.special-selector').doSomething()

			//Prevent blank links from having any effect
			$('a[href="#"]').click(function () { return false; })
		}
	},
	loadPlugins: function () {
		/* Plugins */
	}
}
