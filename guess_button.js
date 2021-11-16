var luckyButton = Math.floor((Math.random() * 3) + 1);
var btn_numbers = 3;

function CreateButtonGroup() {
	btn_numbers = $('#buttons_number').val();
	if(btn_numbers < 2 || btn_numbers > 50)
		return alert("Number out of boundaries!");
	if(btn_numbers < 11)
		$("#game-area").css({"min-width" : (btn_numbers*100) + 'px'});
	$( "#game-area" ).empty();
	$('#game-area').append(`<div class="btn-group" role="group" aria-label="First group">`);
	for (var i = 1; i <= btn_numbers; i++) {
		$('#game-area').append(`<button id="` + i + `" type="button" class="btn btn-outline-secondary gameButtonSize" onClick="ChooseButton(this);">` + i 
			+ `</button>`);
	};
	$('#game-area').append(`</div>`);
	luckyButton = Math.floor((Math.random() * btn_numbers) + 1);
	return true;
}

function ChooseButton(obj) {
	var number = obj.id;
	if(number == luckyButton) {
		alert("Wohooo! You guessed it, now try again!");
		luckyButton = Math.floor((Math.random() * btn_numbers) + 1);
	}
}