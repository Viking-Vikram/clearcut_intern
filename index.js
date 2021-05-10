const navicon = document.querySelector(".nav-icon");
const navlinks = document.querySelector(".nav-links");
// const navicon = document.querySelector(".nav-icon");

// navicon.addEventListener("mouseover", () => {
// 	navlinks.classList.add("hover");
// });
// navicon.addEventListener("mouseleave", () => {
// 	navlinks.classList.remove("hover");
// });
navicon.addEventListener("click", () => {
	// navlinks.classList.remove("hover");
	navlinks.classList.toggle("open");
});

var myNav = document.getElementById("nav");

window.onscroll = function () {
	"use strict";
	if (
		document.body.scrollTop >= 500 ||
		document.documentElement.scrollTop >= 500
	) {
		myNav.classList.add("scroll");
	} else {
		myNav.classList.remove("scroll");
	}
};
