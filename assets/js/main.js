console.log("Hello World from main.js!");

// go get the buttons with the selectors 
// add event listeners to each button
// 	eventlistener function: 
// 		get all items by tag
// 		set display

var portfolioContents = [
	{ name: "Touch Agency",
	category: "web-design",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "web-design",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "development",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "development",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},
	
	{ name: "Touch Agency",
	category: "programming",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "programming",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "animation",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},

	{ name: "Touch Agency",
	category: "animation",
	course: "Web Dev 2",
	description: "A project for WD2 to show how to use responsive background images or something", 
	imgUrl: "../img/infographic.png",
	thumbUrl: "../img/test-image.png"},
];

var portfolioContainer = document.querySelector(".portfolio");

function createDataSets() {
	for (var i = portfolioContainer.length - 1; i >= 0; i--) {
		
	}
}

function selectImages(data, type) {
	var typeList = [];
	for (var i = data.length - 1; i >= 0; i--) {
		if (data[i].category == type) {
			typeList.push(data[i]);
		}
	}
	return typeList;
}

function populateImages(typeList) {

	for (var i = typeList.length - 1; i >= 0; i--) {
		var thumbNail = typeList[i].thumbUrl;

		var preview = document.createElement("div");
			preview.classList.add("portfolio-thumbnail");
			preview.style.backgroundImage = "url(assets/" + thumbNail + ")";

		var portfolioItem = document.createElement("div");
			portfolioItem.appendChild(preview);

		portfolioContainer.appendChild(portfolioItem);
	}
}

function buttonListener(a,b) {
	selectImages(a,b);
//this is how to pass through for the eventlisteners
//what i wanna do: 
	// function to select images
	// then append them	
	// should do the thing probably idfk
}

var allButton = document.querySelector(".all");
var webDesignButton = document.querySelector(".web-design");
var developmentButton = document.querySelector(".development");
var programmingButton = document.querySelector(".programming");
var animatioButton = document.querySelector(".animation");

allButton.addEventListener("click", )
webDesignButton.addEventListener("click", )
developmentButton.addEventListener("click", )
programmingButton.addEventListener("click", )
animatioButton.addEventListener("click", )







