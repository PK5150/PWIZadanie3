function hidePages()
{
	document.getElementById("contentTicTacToe").className = "elementDisabled";
	document.getElementById("contentMain").className = "elementDisabled";
	document.getElementById("contentContact").className = "elementDisabled";
	document.getElementById("contentAbout").className = "elementDisabled";
	
	document.getElementById("nav1").className = "";
	document.getElementById("nav2").className = "";
	document.getElementById("nav3").className = "";
	document.getElementById("nav4").className = "";
	

}
function changePage(i)
{
	hidePages();
	if(i == 1)	
	{		
		document.getElementById("contentMain").className = "elementEnabled";
		document.getElementById("nav1").className = "active";
	}	
	if(i == 2)	
	{
		document.getElementById("contentTicTacToe").className = "elementEnabled";
		document.getElementById("nav2").className = "active";
	}
	if(i == 3)	
	{
		document.getElementById("contentContact").className = "elementEnabled";
		document.getElementById("nav3").className = "active";
	}
	if(i == 4)	
	{
		document.getElementById("contentAbout").className = "elementEnabled";
		document.getElementById("nav4").className = "active";
	}
	

}
