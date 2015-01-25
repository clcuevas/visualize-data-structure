$(function() {
	var list = [];

	function Team(name, payroll) {
		this.name = name;
		this.payroll = payroll;
	}

	var addTeams = function(name, payroll) {
		var teams = new Team(name, payroll);
		list.push(teams);
		teams.domElement = $("<li class='team-display' value='" + teams.payroll + "'>" + teams.name + " $" + teams.payroll + "<img src='img/" + teams.name + ".png' /></li>");
		$("#unsorted").append(teams.domElement);
	};

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

	function insertion() {
		var len     = list.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section
    
    for (i=0; i < len; i++) {
    
        // store the current value because it may shift later
        value = list.eq(i);
        
        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && list[j] > value; j--) {
            list[j+1] = list[j];
        }

        list[j+1] = value;
    }
    
    
	}
	
	$("#sort").on("click", insertion);

	$("#reset").on("click", function() {
		history.go(0);
	});
});


	// $("#sort").on("click", function() {
	// 	$("li").map(function() {
	// 		// return console.log(this.value);
	// 		var $items = this.value;
	// 		// return console.log($items);
	// 		var len = list.length;
	// 		// return console.log(len);
	// 		var i, j, value;

	// 		for (i=0; i < len; i++) {
	// 			value = list[i];

	// 			for(j = i-1; (j > -1) && ($items[j] > value); j--) {
	// 				$items[j + 1] = $items[j];
	// 			}
	// 			$items[j + 1] = value;
	// 		}
	// 		return console.log($items);
	// 	});
	// });

