$(function() {
	
	// xu ly cho nut .nut click vao 
	$('.nut').click(function(event) {
		 
		 //xử lý class cho noidung
		 $('.noidung').addClass('noidunghienra');

		 // xu ly class cho .momo
		 $('.momo').addClass('momodira');
	});

	//jquery cho nut close 
	$('.nutdong, .momo').click(function(event) {
 		 //xử lý class cho noidung
		 $('.noidung').removeClass('noidunghienra');

		 // xu ly class cho .momo
		 $('.momo').removeClass('momodira');

 	});

	 
});