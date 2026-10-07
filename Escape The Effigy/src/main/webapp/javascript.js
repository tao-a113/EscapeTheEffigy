var h = localStorage.getItem("timer");
console.log (h)

function startTimer() {

	duration = 60 * 60 * 2;
	display = document.querySelector('#time');

    var timer = duration, minutes, seconds;
	var howMuch = 0;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		
		howMuch++;
		localStorage.setItem("timer", howMuch);

        if (--timer < 0) {
            timer = 0;
			clearInterval(interval);
        }
    }, 1000);
}
var i;

function setTypeWriter() {
	i=0;
}

function successElectricLightsPuzzle () {

	var room = sessionStorage.getItem ("room");

	if (room == "bridge") {
		document.getElementById("bridgeBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/bridge.jpg') no-repeat";
		parent.document.getElementById("elevatorRoomAccess").style.display = "block";
	} else if (room == "cabin") {
		document.getElementById("cabinBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/cabin2.png') no-repeat";
		document.getElementById("cabinBody").style.backgroundSize = "cover";
		parent.document.getElementById("centralCorridorRoomAccess").style.display = "block";
	} else if (room == "engine") {
		document.getElementById("engineBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/engine.jpg') no-repeat";
		document.getElementById("engineBody").style.backgroundSize = "cover";
		parent.document.getElementById("lowerCorridorRoomAccess").style.display = "block";
	}

	var x = document.getElementsByClassName("buttons");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("darkenedButtons"); 
	}
}

$( document ).ready(function() {

// electric wires puzzle
	if (localStorage.getItem("isElectricLightPuzzleComplete") == "true") {
		var room = sessionStorage.getItem ("room");
		console.log(room);

		if (room == "bridge") {
			document.getElementById("bridgeBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/bridge.jpg') no-repeat";
			parent.document.getElementById("elevatorRoomAccess").style.display = "block";
		} else if (room == "cabin") {
			document.getElementById("cabinBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/cabin2.png') no-repeat";
			document.getElementById("cabinBody").style.backgroundSize = "cover";
			parent.document.getElementById("centralCorridorRoomAccess").style.display = "block";
		} else if (room == "engine") {
			document.getElementById("engineBody").style.background = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url('images/engine.jpg') no-repeat";
			document.getElementById("engineBody").style.backgroundSize = "cover";
			parent.document.getElementById("lowerCorridorRoomAccess").style.display = "block";
		}
		var x = document.getElementsByClassName("buttons");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].classList.remove("darkenedButtons");
		}
	}
// elevator puzzle
	if (localStorage.getItem("isElevatorPuzzleComplete") == "true") {
		var room = sessionStorage.getItem ("room");
		if (room == "elevatorRoom") {
			document.getElementById("button2").style.display = "block";
			document.getElementById("button3").style.display = "block";
		}
	}

// Here is where we check the answers to the puzzles are correct.
	$('.consoleButton').bind('click', function(){
		console.log ("ans attepmt of : " + $(".consoleText").val());
		if ($(".consoleText").val() == "#61-05-22") {
			localStorage.setItem("isElectricLightPuzzleComplete", "true");
			successElectricLightsPuzzle ();
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#10191") {
			localStorage.setItem("isElevatorPuzzleComplete", "true");
			var room = sessionStorage.getItem ("room");
			if (room == "elevatorRoom") {
				document.getElementById("button2").style.display = "block";
				document.getElementById("button3").style.display = "block";
			}
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#5561900") {
			localStorage.setItem("isShuttleGotOxygen", "true");
			localStorage.setItem("treeStage", "3");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#465510122") {
			localStorage.setItem("shuttleBayRoomCondition", "noOxygen");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#6546711") {
			localStorage.setItem("isShuttleBayGotOxygen", "true");
			localStorage.setItem("treeStage", "3");
			localStorage.setItem("shuttleBayRoomCondition", "fixed");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#8005893") {
			localStorage.setItem("isEngineOff", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#5415211") {
			localStorage.setItem("lifeSupportUnlocked", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#01189998819991197253") {
			localStorage.setItem("gotKeyFromAnimal", "true");
			localStorage.setItem("isShuttleGotMedicine", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#3747-1081") {
			localStorage.setItem("isSuitsReady", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#24700021") {
			localStorage.setItem("isShuttleGotPower", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#0955302") {
			localStorage.setItem("isChomperRoomUnlocked", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#0364111") {
			localStorage.setItem("isTransporterFixed", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#77473332") {
			localStorage.setItem("isShuttleGotFood", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#65653101") {
			localStorage.setItem("isToolsTransported", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#015591463211") {
			localStorage.setItem("blastDoorsFixed1", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);
		}
		if ($(".consoleText").val() == "#885086337") {
			localStorage.setItem("blastDoorsFixed2", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);		
		}
		if ($(".consoleText").val() == "#1138") {
			localStorage.setItem("secretFound", "true");
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);		
		}
		
		if ($(".consoleText").val() == "__p_win") {
			localStorage.setItem("isElectricLightPuzzleComplete", "true");
			localStorage.setItem("isElevatorPuzzleComplete", "true");
			localStorage.setItem("computerAttempts", "0");
			localStorage.setItem("treeStage", "0");
			
			//timers
			localStorage.setItem("fruitTimer", "0");
			localStorage.setItem("animalTimer", "0");
			
			localStorage.setItem("isShuttleGotOxygen", "true");
			localStorage.setItem("isEngineOff", "true");
			localStorage.setItem("isSuitsReady", "true");
			localStorage.setItem("isWearingSuit", "true");
			localStorage.setItem("gotBlacklight", "true");
			localStorage.setItem("gotKeyFromAnimal", "true");
			localStorage.setItem("isShuttleBayGotOxygen", "true");
			localStorage.setItem("lifeSupportUnlocked", "true");
			localStorage.setItem("shuttleBayRoomCondition", "fixed");
			localStorage.setItem("isShuttleGotMedicine", "true");
			localStorage.setItem("isShuttleGotPower", "true");
			localStorage.setItem("blastDoorsFixed1", "true");
			localStorage.setItem("blastDoorsFixed2", "true");
			localStorage.setItem("isChomperRoomUnlocked", "true");
			localStorage.setItem("isTransporterFixed", "true");
			localStorage.setItem("isShuttleGotFood", "true");
			localStorage.setItem("isToolsTransported", "true");
			localStorage.setItem("gotTools", "true");
			localStorage.setItem("handScanner", "true");
			localStorage.setItem("secretFound", "true");
			
			successElectricLightsPuzzle ();
			$("#consoleArea").val("Effigy systems updated");
			setTimeout(consoleReset, 6000);	
		}
	})
	
	function consoleReset () {
		$("#consoleArea").val("");
	}
	
});

function typeWriter(text) {
	var speed = 50;

  	if (i < text.length) {
    	document.getElementById("roomResponseText").innerHTML += text.charAt(i);
    	i++;
    	setTimeout(function() {typeWriter(text);}, speed);
  	}
}

function typeWriterChild(text) {
	var speed = 50;

  	if (i < text.length) {
		document.getElementById("mainFrame").contentWindow.document.getElementById("roomResponseText").innerHTML += text.charAt(i);
    	i++;
    	setTimeout(function() {typeWriterChild(text);}, speed);
  	}
}

function showElectricPuzzleAnswer(left, right) {

	left = Math.trunc(left);
	right = Math.trunc(right);
	var answer;

	var room = sessionStorage.getItem ("room");

	//61-05-22
	if (room == "bridge") {
		// 2 -> 3
		switch(left) {
		  case 25:
			if (right == 25) answer = "74-**-**";
			if (right == 158) answer = "14-**-**";
			if (right == 291) answer = "03-**-**";
			break;
		  case 158:
			if (right == 25) answer = "24-**-**";
			if (right == 158) answer = "50-**-**";
			if (right == 291) answer = "61-**-**"; //here
			break;
		  case 291:
			if (right == 25) answer = "17-**-**";
			if (right == 158) answer = "12-**-**";
			if (right == 291) answer = "05-**-**";
			break;
		}

	} else if (room == "cabin") {
		// 1 -> 2
		switch(left) {
		  case 25:
			if (right == 25) answer = "**-11-**";
			if (right == 158) answer = "**-05-**"; //here
			if (right == 291) answer = "**-62-**";
			break;
		  case 158:
			if (right == 25) answer = "**-34-**";
			if (right == 158) answer = "**-90-**";
			if (right == 291) answer = "**-37-**";
			break;
		  case 291:
			if (right == 25) answer = "**-10-**";
			if (right == 158) answer = "**-52-**";
			if (right == 291) answer = "**-65-**";
			break;
		}
	} else if (room == "engine") {
		// 3 -> 1
		switch(left) {
		  case 25:
			if (right == 25) answer = "**-**-78";
			if (right == 158) answer = "**-**-44";
			if (right == 291) answer = "**-**-59";
			break;
		  case 158:
			if (right == 25) answer = "**-**-22"; //here
			if (right == 158) answer = "**-**-00";
			if (right == 291) answer = "**-**-48";
			break;
		  case 291:
			if (right == 25) answer = "**-**-94";
			if (right == 158) answer = "**-**-82";
			if (right == 291) answer = "**-**-85";
			break;
		}
	}
	document.getElementById("answer").innerHTML = "#" + answer;
	
}