 $(function(){
	 $('body').scrollspy({target:'.menutren'});

	  new WOW().init();
	 //ap dung ham click
	 $('.menutren ul li a').click(function(event) {
	 	var vitri = $(this).attr('href');     
	 	var toado = $(vitri).offset().top; 
	 	console.log(toado);
	 	 $('body').animate({scrollTop:toado});
	 	 return false ; 
	 });;

})  
 