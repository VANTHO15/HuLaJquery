$(function() {
	// sua loi load ban dau  
	window.dispatchEvent(new Event('resize'));


	 $('.content ul').isotope({
	 	itemSelector:'li'
	 });

	 // code cho phan nut 
	 $('nav ul li a').click(function(event) {
	 	
	 	var danhmuc = $(this).data('danhmucanh');

	 	var ten = $(this).text();
	 	//console.log(danhmuc);
	 	//console.log(ten);
	 	//dat ten vao trong h1

	 	if(danhmuc == 'all'){
			$('section h1').text("Tất cả ảnh");
	 		$('.content ul').isotope({filter:'*'});
	 	}
	 	else {
	 		$('section h1').text(ten);
	 		$('.content ul').isotope({filter:danhmuc});
	 	}
	 	

	 	

	 	return false;
	 });;
 });