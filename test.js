$(function() {
	function BaseballPayroll(team, payroll) {
		this.team = team;
		this.payroll = payroll;
	}

	BaseballPayroll.prototype.toHtml = function() {
		return "<li class='team-list' data-value='" + this.payroll + "'>" + this.team + " <br>$" + this.payroll + " million<br><img src= img/" + this.team + ".png /></li>";
	}

	function Teams() {
		thisTeams = this;
		this.list = [
			{"team" : "Angels", "payroll" : 145.8},
			{"team" : "Dodgers", "payroll" : 264.9},
			{"team" : "Yankees", "payroll" : 211},
			{"team" : "Marlins", "payroll" : 49.7},
			{"team" : "Red_Sox", "payroll" : 169.3},
			{"team" : "Cubs", "payroll" : 112.1},
			{"team" : "Cardinals", "payroll" : 111.2},
			{"team" : "Astros", "payroll" : 63.3},
			{"team" : "Rangers", "payroll" : 135.2},
			{"team" : "Pirates", "payroll" : 67.7},
			{"team" : "White_Sox", "payroll" : 111.6},
			{"team" : "Tigers", "payroll" : 165.6},
			{"team" : "Mets", "payroll" : 87.9},
			{"team" : "Orioles", "payroll" : 90.9},
			{"team" : "Rays", "payroll" : 67.9},
			{"team" : "Giants", "payroll" : 150.8},
			{"team" : "Nationals", "payroll" : 150.4},
			{"team" : "Royals", "payroll" : 85.7},
			{"team" : "Athletics", "payroll" : 68},
			{"team" : "Mariners", "payroll" : 115.8},
			{"team" : "Rockies", "payroll" : 85.9},
			{"team" : "Diamondbacks", "payroll" : 71.6},
			{"team" : "Twins", "payroll" : 100.9},
			{"team" : "Reds", "payroll" : 99.5},
			{"team" : "Brewers", "payroll" : 91.5},
			{"team" : "Braves", "payroll" : 76.4},
			{"team" : "Padres", "payroll" : 83.6},
			{"team" : "Phillies", "payroll" : 129.8},
			{"team" : "Blue_Jays", "payroll" : 115.9},
			{"team" : "Indians", "payroll" : 79.2}
		];

		$.each(thisTeams.list, function() {
			var addTeam = new BaseballPayroll(this.team, this.payroll);
			$("#unsorted").append(addTeam.toHtml());
		});
	}

	function insertionSort() {
		var len, $current, i;
		
		len = $("li").length;

		for (i = 0; i < len; i++) {
			$current = $("li").eq(i);
			
			function move($current) {
				while ($current.data("value") < $current.prev().data("value")) {
					$current.prev().insertAfter($current);
				}
			}
			setTimeout(move, i * 1000, $current);
		}
	}

	// var timeout = function() {
	// 	setTimeout(insertionSort, 1000);
	// }

	var shuffle = function(m) {
		var $temp, rand;
		rand = Math.floor(Math.random() * m--);
		$temp = $(".team-list:eq(" + m + ")");
		$rand = $(".team-list:eq(" + rand + ")");

		$temp.before($rand);
		$(".team-list:eq(" + rand + ")").before($temp);

		if(m) {
			setTimeout(shuffle, 1000, m);
		}
	};

	teams = new Teams();
	$("#sort").on("click", insertionSort);

	$("#reset").on("click", function() {
		shuffle($("#unsorted .team-list .team-payroll").length)
	});

});