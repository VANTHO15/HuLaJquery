$(function() {
	// sua loi load ban dau  
	window.dispatchEvent(new Event('resize'));


	 $('.content ul').isotope({
	 	itemSelector:'li'
	 });


	 // code cho phần search
	 $('.tukhoa').keypress(function(event) {
	 	if(event.keyCode=="13")  // 13 là nút enter
	 	{
	 		tu1=$(".tukhoa").val();
	 		console.log(tu1);
	 		tu1="."+tu1;
	 		$('.content ul').isotope({filter:tu1});

	 	}
	 });;


	 thoigian =setInterval(function(){   // không cần bấm enter mà sau mỗi khaonr time nó tự search từ khóa đẻ chay
	 		tu1=$(".tukhoa").val();
	 		console.log(tu1);
	 		tu1="."+tu1;
	 		$('.content ul').isotope({filter:tu1});
	 },200);


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