var map = [[0,0,0],[0,0,0],[0,0,0]];
var currentPlayer = 1;
var isPlayable = true;

function klik(x,y)
{
	if(isPlayable)
	{
		if(map[x][y] == 0)
		{
			map[x][y] = currentPlayer;
			if(currentPlayer == 1)
			{	
				currentPlayer = 2;
				document.getElementById("currentPlayer").className = "kolko2";
			}
			else if(currentPlayer == 2)
			{	
				currentPlayer = 1;
				document.getElementById("currentPlayer").className = "krzyzyk2";
			}
		}
		
		redrawBoard();
		gameOverCheck();
	}
}

function clearBoard()
{
	map = [[0,0,0],[0,0,0],[0,0,0]];
}
function redrawBoard()
{
		for( let i = 0 ; i < 3 ; i++ )
			for( let j = 0 ; j < 3 ; j++ )
			{
				let temp = i.toString()+j.toString();
				if(map[i][j]==0)
				{
					document.getElementById(temp).className = "puste";
				}
				else if(map[i][j]==1)
				{
					document.getElementById(temp).className = "krzyzyk";
				}
				else if(map[i][j]==2)
				{
					document.getElementById(temp).className = "kolko";
				}
			
			}
}


function gameOverCheck()
{
	if( map[0][0] != 0 && map[0][0] == map[0][1] && map[0][0] == map[0][2] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win11.png')"}
	else if( map[1][0] != 0 && map[1][0] == map[1][1] && map[1][0] == map[1][2] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win12.png')"}
	else if( map[2][0] != 0 && map[2][0] == map[2][1] && map[2][0] == map[2][2] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win13.png')"}
	
	else if( map[0][0] != 0 && map[0][0] == map[1][0] && map[0][0] == map[2][0] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win21.png')"}
	else if( map[0][1] != 0 && map[0][1] == map[1][1] && map[0][1] == map[2][1] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win22.png')"}
	else if( map[0][2] != 0 && map[0][2] == map[1][2] && map[0][2] == map[2][2] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win23.png')"}
	
	else if( map[0][0] != 0 && map[0][0] == map[1][1] && map[0][0] == map[2][2] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win3.png')"}
	else if( map[0][2] != 0 && map[0][2] == map[1][1] && map[0][2] == map[2][0] ) {gameOver();document.getElementById("board").style.backgroundImage = "url('win4.png')"}
	else if(gameOverDrawCheck() == true) 
	{
		document.getElementById("wygrana").innerHTML = "Remis";
		isPlayable = false;
	}
	
	
}
function gameOverDrawCheck()
{
	var full = true;
	for( let i = 0 ; i < 3 ; i++ )
			for( let j = 0 ; j < 3 ; j++ )
			{
				if(map[i][j] == 0) 
				{
					full=false;
				}
			}
	return full;
}

function gameOver()
{
	if( currentPlayer==2 )
	{
		document.getElementById("wygrana").innerHTML = "Wygrał krzyżyk";
	}
	else if( currentPlayer==1 )
	{
		document.getElementById("wygrana").innerHTML = "Wygrało kółko";
	}
	
	isPlayable = false;
}
function restart()
{
	clearBoard();
	redrawBoard();
	isPlayable = true;
	document.getElementById("wygrana").innerHTML = "";
}




