$(function() {
	// khi chua lam gi ca thi tinh luon vitrimenu
	var vitrimenu = $('.menutren').offset().top;

	$(window).scroll(function(event) {
		var vitribody = $('body,html').scrollTop();

		console.log(vitribody);

		// code cho menu
		//tinh vitri menu 
		if(vitribody >= vitrimenu){
			//console.log('bien hinh thanh mabu beo');
			$('.menutren').addClass('mabubeo');
		}
		else{
			//console.log('bien hinh thanh mabu beo');
			$('.menutren').removeClass('mabubeo');
		}

	});
});