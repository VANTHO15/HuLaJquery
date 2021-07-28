$(function() {
	//cho tat ca noi dung thu lai 
	$('.ndmotkhoi').slideUp();

	// click vao the h3 
	$('.motkhoi h3').click(function(event) {
		// $('.ndmotkhoi').slideUp();
		
		console.log('Da chay duoc hieu ung click roi ')
		$(this).next().slideToggle();
		$(this).toggleClass('xanh')
	});
});

 