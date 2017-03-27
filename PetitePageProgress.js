var PetitePageProgress = (function(){

	var camelCase = function( s ){
		return s.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
		}).replace(/\s+/g, '');
	}

	var overrideSettings = function( bar, settings ){
		for( k in settings.css ){
			// Convert to camelCase
			key = camelCase(k);
			// Check exists then overwrite
			if( bar.indicator.styles[key] != undefined ) bar.indicator.styles[key] = settings.css[key];
		}
	}

	var getScrollPercentage = function( bar ){
		if( bar.isbody ){
			bar.progress = bar.target.scrollTop / ( bar.target.scrollHeight + bar.addition ) * 100;
		} else {
			bar.progress = bar.target.scrollTop / ( bar.target.scrollHeight - bar.target.clientHeight ) * 100;
		}
	}

	var progressBar = function(){
		return {
			target 		: null,
			progress 	: 0,
			indicator 	: null,
			position 	: 0,
			isbody 		: false,
			addition 	: 0,
			styles 		: {
				position 		: 'fixed',
				left 			: 0,
				top 			: 0,
				height 			: '3px',
				backgroundColor : '#58a050',
				zIndex 			: 100
			}
		}
	}

	var buildBar = function( bar ){
		var indicator = document.createElement('div');

		// Apply styles
		for( k in bar.styles )
			indicator.style[k] = bar.styles[k];

		// Add to bar
		bar.target.appendChild(indicator);
		bar.indicator = indicator;
	}

	var updateBarPercentage = function( bar ){
		getScrollPercentage( bar );
		bar.position = bar.target.scrollTop; // Update position to compare in watchForScroll
		bar.indicator.style.width = bar.progress + '%';
	}

	var watchForScroll = function( bar ){
		requestAnimationFrame(function(){
			// Is scroll position different
			if( bar.position !== bar.target.scrollTop)
				updateBarPercentage( bar )
			watchForScroll( bar );
		})
		
	}

	var create = function( selector ){
		var settings = {};

		// Create new bar object
		var bar = new progressBar();

		// If selector is an object then we can extract settings and the true selector
		if( typeof selector === 'object' ){
			settings = selector; // Create settings
			selector = selector.container;
		}

		var cont = document.querySelectorAll(selector);

		if( cont.length === 0 )
			return false;

		// Add target
		bar.target = cont[0];

		// Account for margins on body
		if( selector.toLowerCase() === 'body' ){
			bar.isbody = true;
			bar.addition = - window.innerHeight;
		}

		// Set any additional styles
		overrideSettings( bar, settings );

		// Add progress bar
		buildBar( bar );

		// Listen for scroll
		watchForScroll( bar );
	}

	// Allow options
	return {
		start : create
	}
})();
