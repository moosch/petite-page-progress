var PetitePageProgressBasic = (function(){

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
		// Create new bar object
		var bar = new progressBar();

		var cont = document.querySelectorAll(selector);

		if( cont.length > 0 ){
			// Add target
			bar.target = cont[0];

			// Account for margins on body
			if( selector.toLowerCase() === 'body' ){
				bar.isbody = true;
				bar.addition = - window.innerHeight;
			}

			// Add progress bar
			buildBar( bar );

			// Listen for scroll
			watchForScroll( bar );
		}

		// Chainable only for color in basic. Who wouldn't want to change color?
		return {
			color: newColor,
			bar: bar // Attached to allow newColor to inherit scope
		}
	}

	var newColor = function( hex ){
		if( this.bar.indicator !== null )
			this.bar.indicator.style.backgroundColor = hex;
	}

	// Allow options
	return {
		start : create
	}
})();