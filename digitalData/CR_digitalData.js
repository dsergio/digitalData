//The root JavaScript Object (JSO) MUST be digitalData, and all data properties within this
	//specification MUST fall within the hierarchy of the digitalData object.
	//The following sub-objects are defined as children of the digitalData object.
javascript: (function() {
	window.digitalData = {};
	window.digitalData.page = {};
	window.digitalData.page.pageInfo = {};
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
		publisher : null
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
		
	};


	
})();
 
