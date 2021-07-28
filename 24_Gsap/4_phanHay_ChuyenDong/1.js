 $(function(){
 	// dinh nghĩa một dòng thời gian
 	cd1 = new TimelineMax(); 

	 var nut1 = document.getElementsByClassName("nut1");
	 var nutstop = document.getElementsByClassName("nutstop");
	 var nutdaonguoc = document.getElementsByClassName("nutdaonguoc");
	 var nutplay = document.getElementsByClassName("nutplay");


 	cd1
 	.to(nut1[0],1,{x:-300})
 	.to(nut1[0],1,{y:300})
 	.to(nut1[0],1,{x:0},"+=1")
 	.to(nut1[0],1,{rotationX:360})
 	.to(nut1[0],1,{rotationX:0,y:0})

//code cho cac nut
nutstop[0].onclick = function()
{
	console.log("111");
	cd1.stop();
}
nutplay[0].onclick = function()
{
	console.log("222");
	cd1.play();
}
nutdaonguoc[0].onclick = function()
{
	console.log("333");
	cd1.reverse();
}

})  
 