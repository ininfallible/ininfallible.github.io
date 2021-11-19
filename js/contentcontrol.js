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

	updateContentCard();

	switch(currentPage)
	{
		case "home":
			$( "#info-box" ).text("home");
			break;
		default:
			$( "#info-box").load(`content.html #${currentPage}`);
			break;
	}

	if (currentPage != "home")
	{
		// $( "#info-box" ).delay( 1000 ).css({"visibility": "visible"});
		// $( "#info-box" ).css({"visibility": "visible"});
		$( "#info-box" ).delay( 800 ).fadeIn( 200 );
	}
	else
	{
		// $( "#info-box" ).css({"visibility": "hidden"});
		$( "#info-box" ).hide();
	}
	// $( "#info-box" ).load("test.html");

}
function updateContentCard()
{
	if (currentPage == "home")
	{
		$( ".content-card" ).css({
			"transform": "rotate(-5deg)",
			"left": "32.5%",
			"padding-left": "5%",
			"padding-right": "5%",
			"width": "25%"
		});
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
		// $( "h1" ).text("DJ");
	}
}

// $(".menu-link").css("border", "2px solid red");
