var Teams = ["Seahawks", "Patriots", "NY Giants", "LA Rams", "Dallas Cowboys", 
"Philly Eagles", "Cleavland Brown", "Colts", "SD Chargers", "Oakland Raiders",
"Chicago Bears", "GB Packers", "Detroit Lions", "Pitt Steelers", "Houston Texans",
"SF 49ers", "Jacksonville Jaguars", "Wasinghton Redskins", "Carolina Panthers",
"Minn Vikings", "Baltimore Ravens", "NYJ", "Cinn Bengals", "Miami Dolphins", "Buff Bills",
"Ari Cardinals", "Tampa Bucs", "Atlanta Falcons", "KC Chiefs", "NO Saints", "Tennesse Titans",
"Denver Broncos"]



	
function getscores(){
	var teamNumber = Math.floor(Math.random()*Teams.length);
	var teamNumber2 = Math.floor(Math.random()*Teams.length);
	var team1Score = Math.floor(Math.random()*70);
	var team2Score = Math.floor(Math.random()*70);
    	document.getElementById('FootballTeams').innerHTML = 
	Teams[teamNumber] + ": " + team1Score + " vs. " +
	Teams[teamNumber2] + ": " + team2Score;

	if (team1Score > team2Score) {
		document.getElementById('winner').innerHTML = Teams[teamNumber] + " wins";
	};
	if (team2Score > team1Score) {
		document.getElementById('winner').innerHTML = Teams[teamNumber2] + " wins";};
}


     

 