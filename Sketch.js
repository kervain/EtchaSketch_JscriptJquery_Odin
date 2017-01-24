
var etch = $('#eas-screen'),
board = $('#eas');
$box = $('.box');

function findRBG() {

}

function changeBackground() {

}

function grid() {

}
etch.html("");

var width = $('#new-width').val(),
		boxSize = 480 / width;
	
	for (var i = 0; i < width; i += 1) {
		var row = $('<div class="row" id="' + i + '"></div>').css('height', boxSize + "px");
		for (var ib = 0; ib < width; ib += 1) {
			$('<span class="box"></span>').css({'width': boxSize + "px", 'height': boxSize + "px"}).appendTo(row);
		}
		etch.append(row);
	}
  
  $('.box').mouseenter(function() {
		if (board.hasClass('erase')) {
			board.removeClass('erase');
		}
		var curOp = parseFloat($(this).css('opacity'));
		$(this).css('opacity', curOp + .1);
	});

  $('#set-width').on('click', grid);
  
  $('#new-width').on('keydown', function(e) {
	if (e.which == 13) 
		grid();	
});$('#reset').on('click', function() {
	$('#eas').addClass('erase');
	$('.box').animate({opacity: 0}, 1000);
});


$(grid);

