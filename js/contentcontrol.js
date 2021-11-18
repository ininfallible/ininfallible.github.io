// pages are home, experience, education, misc
var currentPage = "home";

/* 
$( document ).ready(function() {
	updatePage();
});
*/ 

$( ".menu-item" ).click(function() {
	currentPage = $(this).attr("id").trim();
	updatePage();
});

$( "h1" ).click(function() {
	currentPage = $(this).attr("id").trim();
	updatePage();
});

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

function updatePage() {
	// alert(currentPage);
	console.log("switching to page: " + currentPage);

	switch(currentPage)
	{
		case "experience":
			// $( ".info-box" ).html($.ajax("experience.html", {mimeType: 'text/html'}));
			$( ".info-box").load("experience.html");
			// $( ".info-box" ).text("education");
			break;
		case "education":
			$( ".info-box" ).text("education");
			break;
		case "misc":
			$( ".info-box" ).text("misc");
			break;
		case "home":
			$( ".info-box" ).text("home");
			break;
	}

	if (currentPage != "home")
	{
		$( ".info-box" ).css({"visibility": "visible"});
	}
	else
	{
		$( ".info-box" ).css({"visibility": "hidden"});
	}
	// $( "#info-box" ).load("test.html");

	updateContentCard();
}
function updateContentCard()
{
	if (currentPage == "home")
	{
		$( ".content-card" ).css({
			"transform": "rotate(-10deg)",
			"left": "32.5%",
			"padding-left": "5%",
			"padding-right": "5%",
			"width": "25%"
		});
		// TODO: make nav reversible
	}
	else
	{
		$( ".content-card" ).css({
			"transform": "rotate(0deg)",
			"left": "0px",
			"padding-left": "3%",
			"padding-right": "3%",
			"width": "15%"
		});
		$( "h1" ).text("DJ");
	}
}

// $(".menu-link").css("border", "2px solid red");
