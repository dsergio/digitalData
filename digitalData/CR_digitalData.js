//The root JavaScript Object (JSO) MUST be digitalData, and all data properties within this
	//specification MUST fall within the hierarchy of the digitalData object.
	//The following sub-objects are defined as children of the digitalData object.
javascript: (function() {
	window.digitalData = {};
	window.digitalData.page = {};
	window.digitalData.page.pageInfo = {};
	window.digitalData.search = {};
	window.digitalData.checkout = {};
	window.digitalData.confirmation = {};
	window.digitalData.version = "1.0";
	//
	//
	//
	//
	// **digitalData.page.pageInfo:**
	// Describes details about the page.
	//
	// **Reserved:** 
	// **pageID** (String), **pageName** (String), **destinationURL** (String), **referringURL**
	// (String), **sysEnv** (String), **variant** (String), **version** (String), **breadcrumbs** (Array::String),
	// **author** (String), **issueDate** (String or Date Object), **effectiveDate **(String or Date
	// Object), **expiryDate** (String or Date Object), **language** (String), **industryCodes** (String),
	// **publisher** (String)
	//
	// For destinationURL, and referringURL, RECOMMENDED values are
	// document.location, and document.referrer, respectively.
	// 
	window.digitalData.page.pageInfo = {
		pageID : null,
		pageName : null,
		destinationURL : document.URL,
		referringURL : document.referrer,
		sysEnv : null,
		variant : null,
		version : null,
		breadCrumbs : [],
		author : null,
		issueDate : null, // may be implemented as a String or Date Object.
		effectiveDate : null, // may be implemented as a String or Date Object.
		expiryDate : null, // may be implemented as a String or Date Object.
		language : null,
		geoRegion : null,
		industryCodes : null,
		publisher : null,
		visitCountry : null
	};
	//
	//
	//
	//
	// **digitalData.search:**
	// Describes details about the search.
	//
	//
	// 
	window.digitalData.search = {
		dropoffDate : null,
		dropoffLocationId : null,
		dropoffTime : null,
		pickupDate : null,
		pickupLocationId : null,
		pickupTime : null,
		rentalDuration : null,
		pickupTermSearched : null,
		dropoffTermSearched : null
	};
	//
	//
	//
	//
	// **digitalData.result:**
	// Describes details about the search result.
	//
	//
	// 
	window.digitalData.result = {
		numberOfCarsReturned : null,
		lowestRateReturned : null,
		highestRateReturned : null,
		search_trigger_location : null,
		piaQueryTime: null
	};
	//
	//
	//
	//
	// **digitalData.checkout:**
	// Describes details about the checkout.
	//
	//
	// 
	window.digitalData.checkout = {
		supplier_id : null,
		car_acriss_code : null,
		car_model : null,
		product_id : null
	};
	//
	//
	//
	//
	// **digitalData.confirmation:**
	// Describes details about the confirmation.
	//
	//
	// 
	window.digitalData.confirmation = {
		supplier_id : null,
		gross_booking_amount : null,
		tresa_confirmation_id : null,
		car_acriss_sipp_code : null,
		booking_status : null,
		payment_model : null,
		booking_date : null,
		booking_time : null,
		supplier_confirmation_id : null,
		sales_channel : null
	};
})();
 
