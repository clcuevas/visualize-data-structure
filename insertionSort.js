$(function() {
	var list = [];

	function Team(name, payroll) {
		this.name = name;
		this.payroll = payroll;
	}

	var addTeams = function(name, payroll) {
		var teams = new Team(name, payroll);
		list.push(teams);
		$("#team-list").append("<li class='team-display'>" + teams.name + " $" + teams.payroll + "<img src='img/" + teams.name + ".png' /></li>");
	}

	addTeams("Angels", 180);
	addTeams("Dodgers", 265);
	addTeams("Yankees", 211);
	addTeams("Reds", 89.9);
	addTeams("Cubs", 102.6);
	addTeams("Cardinals", 111.2);
	addTeams("Red Sox", 169);
	addTeams("White Sox", 111.6);
	addTeams("Tigers", 164);
	addTeams("Blue Jays", 116);
	addTeams("Giants", 154);
	addTeams("Mariners", 115.8);
	addTeams("Nationals", 150);
	addTeams("Phillies", 130);
	addTeams("Rangers", 132);

});