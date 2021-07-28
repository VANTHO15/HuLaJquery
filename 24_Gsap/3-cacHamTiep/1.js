 $(function(){

 	 // goi ham ra su dung
	vdstaggerfrom() ;


 	function vdstaggerto()
 	{
 		//   mỗi phàn tử sẽ đi lệch nhau 0,2s
 		TweenMax.staggerTo($('.btn-primary'),2,{y:300,opacity:0},0.2);
 	}
 	
	function vdstaggerfrom()
 	{
 		TweenMax.staggerFrom($('.btn-primary'),2,{y:300,opacity:0,ease:Bounce.easeOut},0.2);
 	}


 	//TweenMax.fromTo($('.btn-primary'),1,{y:200,opacity:0},{y:0,opacity:1})
})  
 