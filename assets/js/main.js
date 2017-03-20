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
				portfolioItem.addEventListener("click", openTideItemDetails);
				portfolioItem.setAttribute("data-detail-view-name", portfolioContents[i].detailViewName);
			}

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
	},
	{
		imgURL: "url(assets/img/tide-browse-products-mobile.png",
		screenSize: "mobile",
		compCategory: "Browse Products",
		categoryID: "browse",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-mobile.png",
		screenSize: "mobile",
		compCategory: "Product Detail",
		categoryID: "product",
	},
	{
		imgURL: "url(assets/img/tide-landing-tablet.png",
		screenSize: "tablet",
		compCategory: "Landing Page",
		categoryID: "landing",
	},
	{
		imgURL: "url(assets/img/tide-browse-products-tablet.png",
		screenSize: "tablet",
		compCategory: "Browse Products",
		categoryID: "browse",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-tablet.png",
		screenSize: "tablet",
		compCategory: "Product Detail",
		categoryID: "product",
	},
	{
		imgURL: "url(assets/img/tide-landing-desktop.png",
		screenSize: "desktop",
		compCategory: "Landing Page",
		categoryID: "landing",
	},
	{
		imgURL: "url(assets/img/tide-browse-products-desktop.png",
		screenSize: "desktop",
		compCategory: "Browse Products",
		categoryID: "browse",
	},
	{
		imgURL: "url(assets/img/tide-individual-product-tablet.png",
		screenSize: "tablet",
		compCategory: "Product Detail",
		categoryID: "product",
	},	
];


function openTideItemDetails(e) {
	var everythingElse = document.querySelectorAll(".portfolio");
		for (var i = everythingElse.length - 1; i >= 0; i--) {
			everythingElse[i].childNodes[1].parentNode.style.display = "none";
		}

	var portfolioContent = document.querySelector(".portfolio-content");
		portfolioContent.firstChild.parentNode.style.display = "none";

	var projectHeader = document.querySelector(".specific-page-header");
		projectHeader.innerHTML = e.currentTarget.dataset.title + "(&ensp;);";

	var projectPage = document.createElement("div");
		projectPage.classList.add("specific-content");
		projectPage.classList.add("tide-content");


		var highlightedSize = document.createElement("div");
			highlightedSize.classList.add("item-size");

		var highlightedCategory = document.createElement("div");
			highlightedCategory.classList.add("item-category");

		var highlightedDescription = document.createElement("div");
			highlightedDescription.classList.add("tide-item-description");
			highlightedDescription.appendChild(highlightedCategory);
			highlightedDescription.appendChild(highlightedSize);

		var highlightedImage = document.createElement("figure");
			highlightedImage.classList.add("tide-item-image")
			highlightedImage.appendChild(highlightedCategory);

	var randomStartingItem = tideItems[(Math.ceil(Math.random() * tideItems.length)) -1] ;

	var highlightedContainer = document.createElement("div");
		highlightedContainer.appendChild(highlightedImage);
		highlightedContainer.classList.add("tide-project-item");
		highlightedContainer.classList.add("tide-project-highlighted-item");
		highlightedContainer.setAttribute("data-imgURL", randomStartingItem.imgURL);
		highlightedContainer.setAttribute("data-screen-size", randomStartingItem.screenSize);
		highlightedContainer.setAttribute("data-comp-category", randomStartingItem.compCategory);

	projectPage.appendChild(highlightedContainer);

	// tideItems.splice(randomStartingItem, 1);

	console.log(randomStartingItem);
	console.log(tideItems);

	portfolioContent.parentNode.appendChild(projectPage);

	for (var i = tideItems.length - 1; i >= 0; i--) {		

		var itemImage = document.createElement("figure");
			itemImage.style.backgroundImage = tideItems[i].imgURL;
			itemImage.classList.add("tide-item-image");
			itemImage.classList.add(tideItems[i].screenSize);

		var itemSize = document.createElement("div");
			itemSize.classList.add("item-description");
			itemSize.innerHTML = tideItems[i].screenSize;

		var itemCategory = document.createElement("div");
			itemCategory.classList.add("item-description");
			itemCategory.innerHTML = tideItems[i].compCategory;

		var itemDescription = document.createElement("div");
			itemDescription.classList.add("tide-item-description");
			itemDescription.appendChild(itemCategory);
			itemDescription.appendChild(itemSize);

		var projectItem = document.createElement("div");
			projectItem.classList.add("tide-project-item");
			projectItem.appendChild(itemImage);
			projectItem.appendChild(itemDescription);
			projectItem.setAttribute("data-imgURL", tideItems[i].imgURL);
			projectItem.setAttribute("data-screen-size", tideItems[i].screenSize);
			projectItem.setAttribute("data-comp-category", tideItems[i].compCategory);
			projectItem.addEventListener("click", highlightItem);

		projectPage.appendChild(projectItem);		
	}	
}	

function highlightItem(e) {
	var currentItem = document.querySelector(".tide-project-highlighted-item");
		currentItem.classList.remove("tide-project-highlighted-item");
	e.currentTarget.classList.add("tide-project-highlighted-item");
}

window.addEventListener("load", setLoadListeners);






