$(function() {
	$(window).scroll(function(event) {
		var vitribody = $('body,html').scrollTop();
		var vitrigiaodien = $('.giaodien').offset().top;
		vitrigiaodien = vitrigiaodien - 650 ; 

		if(vitribody >= vitrigiaodien){
			console.log('tada ! ');
			//doan nay add Class
			$('.giaodien').addClass('hienra');
		}
	});;
});