$(document).ready(function() {
  $(window).scroll(function() {
    // Section 1
    if ($(window).scrollTop() <= 300) {
      $("#bubble").removeClass("hide");
    } else {
      $("#bubble").addClass("hide");
    }
    if ($(window).scrollTop() <= 500) {
      $("#bubble3").removeClass("hide");
    } else {
      $("#bubble3").addClass("hide");
    }
    if ($(window).scrollTop() <= 450) {
      $("#bubble5").removeClass("hide");
    } else {
      $("#bubble5").addClass("hide");
    }
    // Section 2
    if ($(window).scrollTop() >= 470 && $(window).scrollTop() <= 1200) {
      $("#sec_bubble").removeClass("hide");
    } else {
      $("#sec_bubble").addClass("hide");
    }
    if ($(window).scrollTop() >= 360 && $(window).scrollTop() <= 800) {
      $("#sec_bubble3").removeClass("hide");
    } else {
      $("#sec_bubble3").addClass("hide");
    }

    // Last section
    if ($(window).scrollTop() >= 1700) {
      $("#bubble").removeClass("hide");
      $("#sec_bubble3").removeClass("hide");
    }
    if ($(window).scrollTop() >= 1800) {
      $("#bubble5").removeClass("hide");
    }
    if ($(window).scrollTop() >= 1900) {
    }
    if ($(window).scrollTop() >= 2000) {
      $("#bubble3").removeClass("hide");
      $("#sec_bubble").removeClass("hide");
    }
  });
});
// const app = document.getElementById("root");

// var request = new XMLHttpRequest();

// request.open("GET", "https://official-joke-api.appspot.com/random_ten");
// request.onload = function(){
//   var data = JSON.parse(this.response);
//   if(request.status >= )
// }
// // "use strict";

// function setup() {
//   loadJSON("https://official-joke-api.appspot.com/random_ten", gotData);
// }

// function gotData() {
//   console.log("data");
// }

// fetch("https://official-joke-api.appspot.com/random_ten")
//   .then(response => response.json())
//   .then(json => this.setState({ jokes: json }))
//   .catch(error => alert(error.message));
