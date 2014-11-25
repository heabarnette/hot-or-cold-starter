
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// newGame () activates on loading or when click a.new
	$(".new").click(function(){
		location.reload();
	});
// generate random number 1-100
	var num = Math.floor((Math.random()*100)+1);
	console.log(num)
// track number of guesses
	var guesscount = 0;
// compare input number to generated number
//	var numguess = parseInt()
	$("#guessButton").click(function(e){
		e.preventDefault();
		var guess = +$("#userGuess").val();		
		console.log(guess);
		guesscount = guesscount+1;
		console.log(guesscount);
// if too low, too high, or just right 
	if (guess < num) {
		console.log('Too low!');
	}
	else if (guess > num) {
		console.log('Too high!');
	}
	else {
		console.log('You got it!');
	}
// if > 50 away = ice cold, 30-50 away = cold, 20-30 away = warm, 10-20 away hot, 1-10 very hot
// output feedback to div#feedback
	var compare	=  Math.abs(guess - num);
	var winner = $('<h2 id="feedback">You got it!  It was ' + num +'!  It took you '+ guesscount +' tries.</h2>');
	if (compare > 50) {
	$('#feedback').replaceWith('<h2 id="feedback">Ice Cold!</h2>');
	}
	else if (compare > 30) {
	$('#feedback').replaceWith('<h2 id="feedback">Cold</h2>');
	}
	else if (compare > 20) {
	$('#feedback').replaceWith('<h2 id="feedback">Warm</h2>');
	}
	else if (compare > 10) {
	$('#feedback').replaceWith('<h2 id="feedback">Hot!</h2>');
	}
	else if (compare > 0) {
	$('#feedback').replaceWith('<h2 id="feedback">Very Hot!</h2>');
	}
	else if (compare = 0) {
	$('#feedback').replaceWith(winner);
	}
// error for NaN
	else {
	$('#feedback').replaceWith('<h2 id="feedback">Please enter a number!</h2>');
	}
//	# of guesses appear in span#count
	$('#count').replaceWith('<span id="count">'+ guesscount +'</span>');
//  add guessed numbers as a li to ul#guessList
	var listguess = $('<li>' + guess + '</li>');
	$('#guessList').append(listguess);


// optional, give directional feedback
	});
});


