jQuery(document).ready(function($){

	// This code is heavily inspired by http://zoerooney.com/blog/tutorials/clean-tabbed-product-descriptions-for-shopify/
	// Let's build Bootstrap tabs markup from <h5>s and correspondign <p>s from Shopify's RTE.

	// Add the opening list tag before the first <h5> within the product description.
	$('.product-description h5:first-of-type').before('<ul class="nav nav-tabs" role="tablist" />');

	// Loop through each <h5> in the product description.
	$('.product-description h5').each(function(index, value){
	    // Assign them each a number, in order
		var num = index + 1;

		// For each <h5>, wrap everything from after the heading to just before the next one in a div.
		// This is the actual tab content. Give each div a unique ID that includes those assigned numbers.
		// Add active class to first tab content <div>.

		if (index == 0) {

	    $(this).nextUntil('h5').wrapAll('<div class="tab-pane active" id="tab' + num + '" />');

			// For each <h5>, wrap the <h5> itself in a list item and add an anchor to the div.
			// These <h5>s are the actual tabs.
			// Add active class to first tab.

			$(this).wrap('<li role="presentation" class="single-tab active"><a href="#tab' + num + '" aria-controls="tab' + num + '" role="tab" data-toggle="tab"></a></li>');
		}

		else {
			$(this).nextUntil('h5').wrapAll('<div class="tab-pane" id="tab' + num + '" />');
	    $(this).wrap('<li role="presentation" class="single-tab"><a href="#tab' + num + '" aria-controls="tab' + num + '" role="tab" data-toggle="tab"></a></li>');
		}
	});

	// Wrap the entire list and the tab content divs in a wrapper div.
	$('.tab-pane').wrapAll('<div class="tab-content" />');

	// Loop through the list items (the actual tabs.)
	$('.single-tab').each(function(){
	    // Move the list items into the list element.
		$(this).appendTo('ul.nav-tabs');
	});
});
