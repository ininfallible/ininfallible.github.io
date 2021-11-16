// pages are home, experience, education, misc
var currentPage = "home";

$( ".menu-item" ).click(function() {
	currentPage = $(this).attr("id").trim();
	updatePage();
});

$( "h1" ).click(function() {
	currentPage = $(this).attr("id").trim();
	updatePage();
});

function updatePage() {
	alert(currentPage);
	switch(currentPage)
	{
		case "experience":
			$( ".text-box" ).text("experience");
			updateContentCard();
			break;
		case "education":
			$( ".text-box" ).text("education");
			updateContentCard();
			break;
		case "misc":
			$( ".text-box" ).text("misc");
			updateContentCard();
			break;
		case "home":
			$( ".text-box" ).text("misc");
			updateContentCard();
			break;
	}
}
function updateContentCard()
{
	if (currentPage == "home")
	{
		$( ".content-card" ).css(
			"transform", "rotate(-10deg)"
		);
		// TODO: make nav reversible
	}
	else
	{
		$( ".content-card" ).css({
			"transform": "rotate(0deg)",
			"left": "0px",
			"padding-left": "3%",
			"padding-right": "3%",
			"width": "20%"
		});
		$( "h1" ).text("DJ");
	}
}

// $(".menu-link").css("border", "2px solid red");
