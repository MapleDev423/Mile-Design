// JavaScript Document

$(document).ready(function () {
	"use strict";
		var e = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
			t = new Date();
		t.setDate(t.getDate()),
			$("#date").html(["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"][t.getDay()] + " " + t.getDate() + " " + e[t.getMonth()] + " " + t.getFullYear()),
			$(".add-card")
				.find(".date-text")
				.html(t.getDate() + " " + e[t.getMonth()]),
			setInterval(function () {
				var e = new Date().getMinutes();
				$("#min").html((e < 10 ? "0" : "") + e);
			}, 1e3),
			setInterval(function () {
				var e = new Date().getHours();
				$("#hours").html((e < 10 ? "0" : "") + e);
			}, 1e3);
	});