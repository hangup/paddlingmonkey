	$(document).ready(function () {
		console.log("in ready");
		for (var i = 0; i <= 100; i++) {

			var newDivId = "div" + i;
			$("#helloWorldDiv").append("<div id='" + newDivId + "' style='display:none'><p>paddlingmonkeys are cool...</p></div>");
			$("#" + newDivId).fadeIn(i * 350);

		};
	});
