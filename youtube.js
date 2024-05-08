// var menuIcon = document.querySelector(".menu-icon");
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".left-nav");
var container= document.querySelector(".list_container");
var home_filter= document.querySelector(".home-filter");

menuIcon.onclick = function(){
	sidebar.classList.toggle("small-left-nav");
	container.classList.toggle("large-list_container");
    home_filter.classList.toggle("large-home-filter");
}