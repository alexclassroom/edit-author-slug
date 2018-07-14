( function() {
	var toggleHidden;

	// Toggle the .hidden class.
	toggleHidden = function( el ) {
		el.classList.toggle( 'hidden' );
	};

	// Run our code after the DOM is loaded.
	document.addEventListener( 'DOMContentLoaded', function() {
		var customInput = document.querySelector( 'input[name="ba_eas_author_slug_custom"]' ),
			front = document.querySelector( '.eas-demo-author-base-front' ),
			removeFront = document.querySelector( 'input[name="_ba_eas_remove_front"]' );

		// Hide the permalink front if remove front is on.
		if ( removeFront ) {
			if ( removeFront.checked ) {
				toggleHidden( front );
			}

			// Show/hide permalink front when remove front checkbox is toggled.
			removeFront.addEventListener( 'click', function() {
				toggleHidden( front );
			});
		}

		// Toggle checkbox sibling table rows.
		document.querySelectorAll( 'input[class="eas-checkbox"]' ).forEach( function( item ) {
			var siblingRow = item.parentNode.parentNode.nextElementSibling;

			// If the item isn't checked, hide it.
			if ( ! item.checked ) {
				toggleHidden( siblingRow );
			}

			// Listen for checkbox clicks, and hide the appropriate item.
			item.addEventListener( 'click', function() {
				toggleHidden( siblingRow );
			});
		});

		// Add click events to the user profile author slug radios.
		document.querySelectorAll( 'input[name="ba_eas_author_slug"]' ).forEach( function( item ) {

			// On click, set the custom author slug input value, to the value of
			// the radio item that was clicked.
			item.addEventListener( 'click', function() {
				if ( 'ba_eas_author_slug_custom_radio' !== item.id ) {
					customInput.value = item.value;
				}
			});
		});

		// When the custom author slug input is focused, set the custom radio as selected.
		customInput.addEventListener( 'focus', function() {
			document.querySelector( '#ba_eas_author_slug_custom_radio' ).checked = 'checked';
		});
	});
}() );
