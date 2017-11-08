	//creates the array of playable words.
	var words = ["airplane", "suitcase", "hotel", "cruiseship"];
	
	
	 // Randomly chooses a choice from the options array.
      var newGame = words[Math.floor(Math.random() * words.length)];
      var underScores = [];
      var correctGuess = [];
      var wrongGuess = [];
    


      //DOM
    var targetDiv = document.getElementById("underscore")
    document.getElementById("incorrectGuess")
    document.getElementById('underscore').innerHTML = genUnderscores();

 	

 	//functions and conditions
 	console.log(newGame)

      //creates underscores for random game chosen
      function genUnderscores(){
      	for (var i = 0; i < newGame.length; i++) {
      		underScores.push("_");
      	}
      	return underScores;
      }

      // This function is run whenever the user presses a key.
    	document.addEventListener('keypress', function keyword(event) {
    		// body...
 		var keyword = String.fromCharCode(event.keyCode);

 		
 	// user guess
 	if (newGame.indexOf(keyword) > -1){
 	
 	//correct guess goes to correct letters array
 	correctGuess.push(keyword); 
  

 	//change unerscore to correct letter
 	underScores[newGame.indexOf(keyword)] = keyword;
 	document.getElementById('underscore'[0]);
  targetDiv.innerHTML = underScores.join("");
console.log(keyword)


 	if (underScores.join(' ') === newGame) {
 		alert('You Win!');
 		}
 	
}
 	else {

 	// inccorect guess goes to wrong letter array
 	wrongGuess.push(keyword);
 	document.getElementById('incorrectGuess'[0]);
  innerHTML = underScores.join(' ');

  console.log(incorrectGuess)
 	}

});





	
 