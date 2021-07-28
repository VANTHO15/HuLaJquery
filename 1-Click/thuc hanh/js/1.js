$(function() {
	
	// dau tien la chua co gi hien ra 
	//$('.dangnhap').animate({opacity:0,marginLeft:-100})
	$('.dangky').animate({opacity:0,marginLeft:-100});

	// ap dung 3 phan tu cua cau lenh jquery 
	$('.nutso2').click(function(event) {
		/* Act on the event */
		$('.dangnhap').animate({opacity:0,marginLeft:-100}); 

		// dang ky di vao 
		$('.dangky').animate({opacity:1,marginLeft:0}); 
	});


	$('.nutso1').click(function(event) {
		/* Act on the event */

		$('.dangky').animate({opacity:0,marginLeft:-100});
		$('.dangnhap').animate({opacity:1,marginLeft:0});
		
	});;
});
