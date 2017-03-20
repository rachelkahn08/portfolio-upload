console.log("Hello World from main.js!");

// go get the buttons with the selectors 
// add event listeners to each button
// 	eventlistener function: 
// 		get all items by tag
// 		set display

var portfolioContents = [
	{
		name: "apollo13",
		title: "Apollo 13",
		category: "animation",
		thumbUrl: "url(assets/img/apollo13-thumb.png)",
	},
	{
		name: "mobilizeinfo",
		title: "Mobilize Infographic",
		category: "animation",
		thumbUrl: "url(assets/img/infographic-thumb.png)",
	},
	{
		name: "tidedotcom",
		title: "Tide.com",
		category: "design",
		thumbUrl: "url(assets/img/tide-thumb.png)",
	},
	{
		name: "grumpypuzzle",
		title: "Purrrrzle",
		category: "programming",
		thumbUrl: "url(assets/img/grumpycat-thumb.png)",
	},
];

function populateImages() {
	var portfolioContainer = document.querySelector(".portfolio-content");

	for (var i = portfolioContents.length - 1; i >= 0; i--) {

		var thumbImg = document.createElement("figure");
			thumbImg.classList.add("thumbnail");
			thumbImg.style.backgroundImage = portfolioContents[i].thumbUrl;

		var portfolioItem = document.createElement("div");
			portfolioItem.classList.add("portfolio-item");
			portfolioItem.appendChild(thumbImg);
			portfolioItem.setAttribute("data-name", portfolioContents[i].name);
			portfolioItem.setAttribute("data-title", portfolioContents[i].title);
			portfolioItem.setAttribute("data-category", portfolioContents[i].category);
			portfolioItem.setAttribute("data-thumbUrl", portfolioContents[i].thumbUrl);
			portfolioItem.addEventListener("mouseover", thumbHoverOn);
			portfolioItem.addEventListener("mouseout", thumbHoverOff);
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
	console.dir(e.currentTarget);
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
		console.log(allPortfolioButtons[i]);
	}

}	
	
	
	


// function addPortfolioButtonListeners() {
// 	var allButton = document.querySelector(".all-link");
// 	var animationButton = document.querySelector(".animation-link");
// 	var designButton = document.querySelector(".web-design-link");
// 	var developmentButton = document.querySelector(".development-link");
// 	var programmingButton = document.querySelector(".programming-link");

// 	// allButton.setEventListener("click", narrowByType)
// 	// animationButton.setEventListener("click", narrowByType)
// 	// designButton.setEventListener("click", narrowByType)
// 	// developmentButton.setEventListener("click", narrowByType)
// 	// programmingButton.setEventListener("click", narrowByType)

// 	console.dir(allButton);


// }

window.addEventListener("load", setLoadListeners);









