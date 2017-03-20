var portfolioContents = [
	{
		name: "apollo13",
		title: "Apollo 13",
		category: "animation",
		thumbUrl: "url(assets/img/apollo13-thumb.png)",
		destinationURL: "apollo13.html",
	},
	{
		name: "mobilizeinfo",
		title: "Mobilize Infographic",
		category: "animation",
		thumbUrl: "url(assets/img/infographic-thumb.png)",
		destinationURL: "infographic.html",
	},
	{
		name: "tidedotcom",
		title: "Tide.com",
		category: "design",
		thumbUrl: "url(assets/img/tide-thumb.png)",
		detailViewName: "tideItems",
	},
	{
		name: "grumpypuzzle",
		title: "Purrrrzle",
		category: "programming",
		thumbUrl: "url(assets/img/grumpycat-thumb.png)",
		destinationURL: "grumpycat.html",
	},
];


function populateImages() {
	var portfolioContainer = document.querySelector(".portfolio-content");

	for (var i = portfolioContents.length - 1; i >= 0; i--) {

		var thumbImg = document.createElement("figure");
			thumbImg.classList.add("thumbnail");
			thumbImg.style.backgroundImage = portfolioContents[i].thumbUrl;

		var itemTitle = document.createElement("div");
			itemTitle.classList.add("item-title-nohover");
			itemTitle.innerHTML = portfolioContents[i].title;

		var portfolioItem = document.createElement("a");
			portfolioItem.classList.add("portfolio-item");
			thumbImg.appendChild(itemTitle);
			portfolioItem.appendChild(thumbImg);
			portfolioItem.setAttribute("data-name", portfolioContents[i].name);
			portfolioItem.setAttribute("data-title", portfolioContents[i].title);
			portfolioItem.setAttribute("data-category", portfolioContents[i].category);
			portfolioItem.setAttribute("data-thumbUrl", portfolioContents[i].thumbUrl);
			portfolioItem.addEventListener("mouseover", thumbHoverOn);
			portfolioItem.addEventListener("mouseout", thumbHoverOff);
			if (portfolioContents[i].destinationURL) {
				portfolioItem.href = portfolioContents[i].destinationURL;
			} else {
				portfolioItem.addEventListener("click", openTidePage);
				portfolioItem.setAttribute("data-detail-view-name", portfolioContents[i].detailViewName);
			}

		portfolioContainer.addEventListener("click", showPortfolioPage);
		portfolioContainer.appendChild(portfolioItem);
		
	}
};

function thumbHoverOn(e) {
	var itemTitle = document.createElement("div");
			itemTitle.classList.add("item-title");
			itemTitle.innerHTML = e.currentTarget.dataset.title;
			e.currentTarget.appendChild(itemTitle);
	e.currentTarget.childNodes[0].style.filter = "grayscale(0%)";
	e.currentTarget.appendChild(itemTitle);
}

function thumbHoverOff(e) {
	e.currentTarget.childNodes[0].style.filter = "grayscale(85%)";
	e.currentTarget.childNodes[1].remove(e.currentTarget.childNodes[1]);

}

function showPortfolioPage() {
	landingPage = document.querySelector(".landing-page");
	specificPages = document.querySelector(".specific-pages");
	landingPage.style.display = "none";
	specificPages.style.display = "flex";
	populateImages();
	addPortfolioButtonListeners();
}

function narrowByType(e) {
	console.log("working");
	allItems = document.querySelectorAll(".portfolio-item");

	if ( e.currentTarget.classList.contains("animation-link")) {
		for (var i = allItems.length - 1; i >= 0; i--) {
			if ( allItems[i].dataset.category != "animation") {
				allItems[i].classList.add("hidden");
			} else if ( allItems[i].dataset.category = "animation" ) {
				allItems[i].classList.remove("hidden");
			}
		}
	} else if ( e.currentTarget.classList.contains("programming-link")) {
		for (var i = allItems.length - 1; i >= 0; i--) {
			if ( allItems[i].dataset.category != "programming") {
				allItems[i].classList.add("hidden");
			} else if ( allItems[i].dataset.category = "programming") {
				allItems[i].classList.remove("hidden");
			}
		}
	} else if ( e.currentTarget.classList.contains("design-link")) {
		for (var i = allItems.length - 1; i >= 0; i--) {
			if ( allItems[i].dataset.category != "design") {
				allItems[i].classList.add("hidden");
			} else if ( allItems[i].dataset.category = "design") {
				allItems[i].classList.remove("hidden");
			}
		}
	}
}

function setLoadListeners() {
	var portfolioButton = document.querySelector(".portfolio-link");
	portfolioButton.addEventListener("click", showPortfolioPage);
}

	
function addPortfolioButtonListeners() {
	var allPortfolioButtons = document.querySelectorAll(".specific-page-selector");
	for (var i = allPortfolioButtons.length - 1; i >= 0; i--) {
		allPortfolioButtons[i].addEventListener("click", narrowByType);
	}

}	

var tideItems = [
	{
		imgURL: "url(assets/img/tide-landing-mobile.png",
		screenSize: "mobile",
		compCategory: "Landing Page",
		categoryID: "landing",
		isHighlighted: "false",
	},
	{
		imgURL: "url(assets/img/tide-browse-products-mobile.png",
		screenSize: "mobile",
		compCategory: "Browse Products",
		categoryID: "browse",
		isHighlighted: "false",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-mobile.png",
		screenSize: "mobile",
		compCategory: "Product Detail",
		categoryID: "product",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-landing-tablet.png",
		screenSize: "tablet",
		compCategory: "Landing Page",
		categoryID: "landing",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-browse-products-tablet.png",
		screenSize: "tablet",
		compCategory: "Browse Products",
		categoryID: "browse",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-tablet.png",
		screenSize: "tablet",
		compCategory: "Product Detail",
		categoryID: "product",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-landing-desktop.png",
		screenSize: "desktop",
		compCategory: "Landing Page",
		categoryID: "landing",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-browse-products-desktop.png",
		screenSize: "desktop",
		compCategory: "Browse Products",
		categoryID: "browse",
		isHighlighted: "",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-tablet.png",
		screenSize: "tablet",
		compCategory: "Product Detail",
		categoryID: "product",
		isHighlighted: "",
	},	
];

function openTidePage() {
	var projectHeader = document.querySelector(".specific-page-header");
		projectHeader.innerHTML = "Tide(&ensp;);";
	var portfolioContent = document.querySelector(".portfolio-content");
		portfolioContent.firstChild.parentNode.style.display = "none";
		portfolioContent.firstChild.parentNode.style.marginLeft = "1000%";
	var dropdownMenu = document.querySelector(".portfolio-navbar-dropdown-container");
		dropdownMenu.firstChild.parentNode.style.display = "none";
		dropdownMenu.firstChild.parentNode.style.marginLeft = "1000%";
	var categorySelectorMenu = document.querySelector(".portfolio-navbar");
		categorySelectorMenu.firstChild.parentNode.style.display = "none";
		categorySelectorMenu.firstChild.parentNode.style.marginLeft = "1000%";
	var parentContainer = document.querySelector(".specific-page-content");	
	var parentContainer = document.querySelector(".specific-page-content");
	var tideContent = document.createElement("div");
		tideContent.classList.add("specific-content");
		tideContent.classList.add("tide-content");
	var highlightedContainer = document.createElement("div");
		highlightedContainer.classList.add("highlighted-item-container");
	var thumbnailsContainer = document.createElement("div");
		thumbnailsContainer.classList.add("thumbnails-container");

	populateDivs(highlightedContainer, thumbnailsContainer);

	tideContent.appendChild(highlightedContainer);
	tideContent.appendChild(thumbnailsContainer);	

	parentContainer.appendChild(tideContent);
	console.dir(parentContainer);
}

function populateDivs(highlightedContainer, thumbnailsContainer) {
	finalItem = tideItems[tideItems.length];	

	for (var i = 0; i < tideItems.length; i++) {		
		var itemSizeContainer = document.createElement("div");
			itemSizeContainer.classList.add("tide-item-description");
		var itemCategoryContainer = document.createElement("div");
			itemCategoryContainer.classList.add("tide-item-description");
		var itemDescriptionContainer = document.createElement("div");
			itemDescriptionContainer.classList.add("item-description");
		var itemImage = document.createElement("figure");
			itemImage.classList.add("tide-item-image");
		var projectItemContainer = document.createElement("div");
				projectItemContainer.classList.add("tide-project-item");

		itemSizeContainer.innerHTML = tideItems[i].screenSize;
		itemCategoryContainer.innerHTML = tideItems[i].compCategory;

		itemDescriptionContainer.appendChild(itemCategoryContainer);
		itemDescriptionContainer.appendChild(itemSizeContainer);
		
		itemImage.classList.add(tideItems[i].screenSize);
			itemImage.style.backgroundImage = tideItems[i].imgURL;
		
		itemImage.appendChild(itemDescriptionContainer);
		
		var projectItem = document.createElement("div");
			projectItem.setAttribute("data-imgURL", tideItems[i].imgURL);
			projectItem.setAttribute("data-screen-size", tideItems[i].screenSize);
			projectItem.setAttribute("data-comp-category", tideItems[i].compCategory);
			projectItem.setAttribute("class", "tide-project-item")
		
		projectItem.appendChild(itemImage);
		projectItem.addEventListener("click", highlightItem);
		
		if ( i < (tideItems.length - 1)) { 
			thumbnailsContainer.appendChild(projectItem);
			projectItem.setAttribute("data-is-highlighted", "false");
		} else {
			projectItem.setAttribute("data-is-highlighted", "true");
			highlightedContainer.appendChild(projectItem);
		}
	}
}
	

function highlightItem(e) {
	var allTheKids = e.currentTarget.parentNode.children;
	console.log(e.currentTarget);
	if ( e.currentTarget.dataset.isHighlighted !== "false" ) {
		for (var i =  allTheKids.length - 1; i >= 0; i--) {
			if ( allTheKids[i].dataset.isHighlighted !== "true" ) {
				console.log(allTheKids[i]);
				console.log("remove me");
				allTheKids[i].setAttribute("data-is-highlighted", "false");
			}
		}
	}
}

window.addEventListener("load", setLoadListeners);
// window.addEventListener("load", function() {
// 	landingPage = document.querySelector(".landing-page");
// 	specificPages = document.querySelector(".specific-pages");
// 	landingPage.style.display = "none";
// 	specificPages.style.display = "flex";
// 	openTidePage();
// });






