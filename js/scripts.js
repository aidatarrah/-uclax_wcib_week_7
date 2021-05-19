
//picture 1-1//
jQuery(function() {

let my_switch = false;

$('#1-1').mouseover(function() {

	if (my_switch == false) {
		my_switch = true;
		$('#1-1').attr('src', 'images/1200-1_1024x1024.png');
	} else {
		my_switch = false;
		$('#1-1').attr('src', 'images/TOPAZ-NECKLACE_1024x1024.png');
	}
		});

		$('#1-1').mouseleave(function() {

				$(this).attr('src', 'images/TOPAZ-NECKLACE_1024x1024.png');

				});
});

// view button 1-1 //

$(document).ready(function() {

	$('.description').hide();

	let my_switch = false;

	$('#view').click(function() {

		if (my_switch == false) {
			my_switch = true;

					$(this).html("Close");
			$('.description').show();

		} else {
			my_switch = false;
					$(this).html("More");
			$('.description').hide();
			$(this).css('padding', '6');
		}
			});
});



//picture 1-2//
jQuery(function() {

let my_switch = false;

$('#1-2').mouseover(function() {

	if (my_switch == false) {
		my_switch = true;
		$('#1-2').attr('src', 'images/SUN-NECKLACE-WEBSITE_1024x1024.png');
	} else {
		my_switch = false;
		$('#1-2').attr('src', 'images/SUN-NECKLACE_1024x1024.png');
	}
		});

		$('#1-2').mouseleave(function() {

				$(this).attr('src', 'images/SUN-NECKLACE_1024x1024.png');

				});
});

// view button 1-2 //

$(document).ready(function() {

	$('.description-1-2').hide();

	let my_switch = false;

	$('#more-1-2').click(function() {

		if (my_switch == false) {
			my_switch = true;

					$(this).html("Close");
			$('.description-1-2').show();

		} else {
			my_switch = false;
					$(this).html("More");
			$('.description-1-2').hide();
			$(this).css('padding', '6');
		}
			});
});

// picture 1-3 //

jQuery(function() {

let my_switch = false;

$('#1-3').mouseover(function() {

	if (my_switch == false) {
		my_switch = true;
		$('#1-3').attr('src', 'images/EVIL-EYE_1024x1024.png');
	} else {
		my_switch = false;
		$('#1-3').attr('src', 'images/AQUA-NECK_1024x1024.png');
	}
		});

		$('#1-3').mouseleave(function() {

				$(this).attr('src', 'images/AQUA-NECK_1024x1024.png');

				});
});


// view button 1-3 //

$(document).ready(function() {

	$('.description-1-3').hide();

	let my_switch = false;

	$('#more-1-3').click(function() {

		if (my_switch == false) {
			my_switch = true;

					$(this).html("Close");
			$('.description-1-3').show();

		} else {
			my_switch = false;
					$(this).html("More");
			$('.description-1-3').hide();
			$(this).css('padding', '6');
		}
			});
});
