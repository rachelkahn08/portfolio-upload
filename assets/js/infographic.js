console.log("Hello World from main.js!");

var lizPhone = document.querySelector(".left");
var lizComputer = document.querySelector(".right");
var kenAnimationsOne = document.querySelector(".ken-animations-one");
var kenAnimationsTwo = document.querySelector(".ken-animations-two");

function lizPhoneAnimation() {
	var lizPhoneTimeline = new TimelineMax();

	lizPhoneTimeline
		.to(".liz-phone-arm", 0.45, 
				{	x: "-0.1vw",
					y: "0.2vw",
					rotation: "34deg",
					yoyo: true
				}, .1)
		.to(".phone-pupils", 0.2,
				{	x: "+=3vw",
				}, .0)
		.to(".liz-left-hand-phone", 0.45, 
				{	ease: Power0.easeNone,
					rotation: "-6deg",
					repeat: 3,
					yoyo: true 
				}, 0.4)
}

function lizComputerAnimation() {
	var lizComputerTimeline = new TimelineMax();

	lizComputerTimeline
		.to(".liz-computer-pupils", 0.3, {y: "-=5vw"}, 0)
		.to(".liz-computer-gesture", 0.6,
			{	rotation: "47deg",
				translateX: "-0.29vw",
				translateY: "0.21vw"
			}, 0.2)
		.fromTo(".liz-computer-left-lower-arm", 0.5,
				{	translateX: "-0.29vw",
					translateY: "-0.3vw",
					rotation: "290deg"
				},
				{ 	translateX: "-0.29vw",
					translateY: "-0.3vw",
					rotation: "90deg"

				}, 0.3)
		.to(".liz-computer-gesture-hand", 0.3,
			{	rotation: "-44.4deg"
			}, 0.5)
		.to(".liz-sitting-arm-container", 0.15,
			{ y: "-=4vw",
				yoyo: true}, .9)
}

function kensBouncing() {
	var kenTimelines = new TimelineMax();

	kenTimelines
		.staggerTo(".ken-bouncing", 1.5,
			{y: "+=646.6vw"}, 1.5)
		.staggerTo(".ken-bouncing", 1.5, 
			{ 	y: "-=646.6vw",
			 	yoyo: true,
			 	repeat: 5},
			 	1.5)
		.staggerTo(".ken-bouncing", 1.5,
			{y: "-=646.6vw"}, 1.5)
	console.log("kensBouncing");
}

function kenRunning(){
	
// TRANSLATING THE WHOLE DIV ----
var translateKen = new TimelineMax();
	translateKen
			.to(".ken-running", 10, 
			{	marginLeft: "+=144vw"}, 0)
		
// ARMS -------


// LEGS --------
var moveKensLegs = new TimelineMax({repeat:-1});

	moveKensLegs
//stage1: 0-.09
		.to(".foreground-leg", .1, 
			{	rotation: "-65deg",
				ease: Power0.easeNone }, 0)
		.to(".foreground-calf", .1, 
			{	rotation: "70deg",
				ease: Power0.easeNone }, 0)
		.to(".ken-running", .1, 
			{	marginTop: "9.9vw"}, 0)

//stage2: .1-.19
		.to(".foreground-leg", .1,
			{	rotation: "-65deg",
				ease: Power0.easeNone }, .1)
		.to("foreground-calf", .1, 
			{	rotation: "35deg",
				y: "20vw"}, .1)
		.to(".ken-running-torso", .2, 
				{	rotation: "30deg"
					}, 0)
		.to(".ken-running-leg-container", .2,
			{	marginLeft: "-3vw"}, 0)
		.to(".ken-running", .1, 
			{	marginTop: "11vw"}, .1)

//stage3 .2-.29
		.to(".ken-running", .1, 
			{	marginTop: "7.6vw"}, .2)
		.to(".foreground-leg", .1,
			{	rotation: "-15deg"}, .2) 
		.to(".foreground-calf", .1,
			{	rotation: "27deg" }, .2)
		.to(".background-leg", .1, 
			{	rotation: "-29deg"}, .2)

//stage4 .3-.39
		.to(".ken-running", .1, 
			{	marginTop: "8.3vw"}, .3)
		.to(".ken-running-torso", .1, 
			{	rotation: "20deg"}, .3)
		.to(".ken-running-leg-container", .1, 
			{	marginLeft: "-1.75vw"}, .3)
		.to(".background-leg", .1,
			{	rotation: "-79deg",
				y: "-0.3vw"}, .3)
		.to(".foreground-leg", .1, 
			{	rotation: "-4deg"}, .3)

//stage5 .4-.49

		.to(".ken-running", .1, 
			{	marginTop: "8.7vw"}, .4)
		.to(".ken-running-torso", .1, 
			{	rotation: "15deg"}, .4)
		.to(".background-leg", .1,
			{	rotation: "-70deg"}, .4)
		.to(".foreground-leg", .1, 
			{	rotation: "26deg"}, .4)
		.to(".background-leg", .1, 
			{	rotation: "-70deg",
				y: "0.8vw"}, .4)
		.to(".background-calf", .1, 
			{	rotation: "71deg"}, .4)
		.to(".ken-background-shoe", .1, 
			{	rotation: "-41deg",
				y: "0.1vw"}, .4)

//stage6 .5-.59
		.to(".background-calf", .1, 
			{	rotation: "62deg"}, .5)
		.to(".ken-background-shoe", .1, 
			{	rotation: "-29deg"}, .5)
		.to(".foreground-calf", .1, 
			{	rotation: "60deg"}, .5)
		.to(".ken-background-shoe", .1, 
			{	rotation: "-29deg"}, .5)
		.to(".ken-foreground-shoe", .1, 
			{	rotation: "13deg"}, .5)

//stage7 .6-.69
		.to(".ken-running-leg-container", .1,
			{	marginLeft: "-1.35vw"}, .6)
		.to(".background-calf", .1, 
			{	rotation: "0deg"}, .6)
		.to(".background-leg", .1,
			{	rotation: "-30deg"}, .6)
		.to(".foreground-leg", .1, 
			{	rotation: "30deg"}, .6)
		.to(".ken-background-shoe", .1, 
			{	rotation: "13deg"}, .6)
		.to(".calf", .2, {marginLeft:"0.16vw"},.5)
		.to(".ken-running", .1, 
			{	marginTop: "9.3vw"}, .6)
		.to(".foreground-calf", .1, 
			{	rotation: "90deg"}, .6)
		.to(".foregrond-shoe", .1, 
			{	rotation: "18deg"}, .6)

//stage8 first reverse .7-.79

		.to(".background-leg", .1, 
			{	rotation: "-65deg",
				ease: Power0.easeNone }, .7)
		.to(".background-calf", .1, 
			{	rotation: "70deg",
				ease: Power0.easeNone }, .7)
		.to(".ken-running", .1, 
			{	marginTop: "9.9vw"}, .7)

//stage9 second reverse .8-.89
		.to(".background-leg", .1,
			{	rotation: "-65deg",
				ease: Power0.easeNone }, .8)
		.to("background-calf", .1, 
			{	rotation: "35deg",
				y: "20vw"}, .8)
		.to(".ken-running", .1, 
			{	marginTop: "11vw"}, .8)

//stage10 third reverse .9-.99
		.to(".ken-running", .1, 
			{	marginTop: "7.6vw"}, .9)
		.to(".background-leg", .1,
			{	rotation: "-15deg"}, .9) 
		.to(".background-calf", .1,
			{	rotation: "27deg" }, .9)
		.to(".foreground-leg", .1, 
			{	rotation: "-29deg"}, .9)

//stage11 fourth reverse 1-1.09
		.to(".ken-running", .1, 
			{	marginTop: "8.3vw"}, 1)
		.to(".ken-running-torso", .1, 
			{	rotation: "20deg"}, 1)
		.to(".ken-running-leg-container", .1, 
			{	marginLeft: "-1.75vw"}, 1)
		.to(".foreground-leg", .1,
			{	rotation: "-79deg",
				y: "-0.3vw"}, 1)
		.to(".background-leg", .1, 
			{	rotation: "-4deg"}, 1)

//stage12 fifth reverse 1.1-1.19
		.to(".foreground-calf", .1, 
			{	rotation: "62deg"}, 1.1)
		.to(".ken-foreground-shoe", .1, 
			{	rotation: "-29deg"}, 1.1)
		.to(".background-calf", .1, 
			{	rotation: "60deg"}, 1.1)
		.to(".ken-foreground-shoe", .1, 
			{	rotation: "-29deg"}, 1.1)
		.to(".ken-background-shoe", .1, 
			{	rotation: "13deg"}, 1.1)

//stage13 sixth reverse 1.2-1.29
		.to(".foreground-calf", .1, 
			{	rotation: "62deg"}, 1.2)
		.to(".ken-foreground-shoe", .1, 
			{	rotation: "-29deg"}, 1.2)
		.to(".background-calf", .1, 
			{	rotation: "60deg"}, 1.2)
		.to(".ken-foreground-shoe", .1, 
			{	rotation: "-29deg"}, 1.2)
		.to(".ken-background-shoe", .1, 
			{	rotation: "13deg"}, 1.2)

//stage14 seventh reverse, full cycle 1.3-1.39
		.to(".ken-running-leg-container", .1,
			{	marginLeft: "-1.35vw"}, 1.3)
		.to(".foreground-calf", .1, 
			{	rotation: "0deg"}, 1.3)
		.to(".foreground-leg", .1,
			{	rotation: "-30deg"}, 1.3)
		.to(".background-leg", .1, 
			{	rotation: "30deg"}, 1.3)
		.to(".ken-background-shoe", .1, 
			{	rotation: "13deg"}, 1.3)
		.to(".calf", .1, {marginLeft:"0.16vw"},.5)
		.to(".ken-running", .1, 
			{	marginTop: "9.3vw"}, 1.3)
		.to(".background-calf", .1, 
			{	rotation: "90deg"}, 1.3)
		.to(".backgrond-shoe", .1, 
			{	rotation: "18deg"}, 1.3)

	console.log("ken running");
}



kenAnimationsTwo.addEventListener("click", kenRunning);
kenAnimationsOne.addEventListener("click", kensBouncing);
lizPhone.addEventListener("click", lizPhoneAnimation);
lizComputer.addEventListener("click", lizComputerAnimation);
