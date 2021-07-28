 $(function(){
 	/*TweenMax.from($('.nut2'), 1, {y:200,opacity:0,scale:2});

 	TweenMax.from($('.nut1'),1,{x:-200,opacity:0,scale:2});

 	TweenMax.from($('.nut3'),1,{x:200,opacity:0,scale:2});*/

 	

 	$('.nut2').click(function(event) {
 		TweenMax.fromTo($('.nut1'),2,{x:-400},{x:400});
 		TweenMax.to($(this),1,{y:"+=100"});
 		TweenMax.to($('.nut3'),1,{scale:"+=0.3"});

 	});;
})  
 