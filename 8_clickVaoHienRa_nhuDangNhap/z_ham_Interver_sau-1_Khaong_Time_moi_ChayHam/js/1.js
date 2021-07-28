$(function() {
	
	 $('.noidung').addClass('noidunghienra');
	 $('.momo').addClass('momodira');

	 var thongbao = setInterval(function(){
	 	 
 		//xử lý class cho noidung
		 $('.noidung').removeClass('noidunghienra');

		 // xu ly class cho .momo
		 $('.momo').removeClass('momodira');

	 	clearInterval(thongbao);
	 },4000);    // sau 4s mwos thực hiện cái hàm




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