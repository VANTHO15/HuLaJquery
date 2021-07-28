$(function() {

	 //viet cho nut 
	 $('nav ul li a').click(function(event) {
	 	//console.log('hello');

	 	// phat hien data class cua nut duoc click 
	 	var danhmuc = $(this).data('class');
	 	 console.log(danhmuc);
	 	var ten = $(this).text(); 

	 	$('section h1').text(ten)


	 	$('.content ul li').each(function() {  // lấy từng phần tử
	 		if($(this).hasClass(danhmuc))  // có class
	 		{
	 			$(this).show(300);
	 		}
	 		else 
	 		{
	 			$(this).hide(300);
	 		}
	 		 
	 	});

	 	// sua loi load ban dau  
	window.dispatchEvent(new Event('resize'));

	 	return false ; 
	 });
 });