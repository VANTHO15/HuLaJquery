 $(function(){
	 var el=document.querySelector('.el');
var overshoot=1;
var period=0.3;
(function bounce(){
  TweenMax.to(el,0.5,{
    scale:0.3,
    onComplete:function(){
      TweenMax.to(el,1.4,{
        scale:1,
        ease:Elastic.easeOut,
        easeParams:[overshoot,period],
        onComplete:bounce
      })
    }
  })
}());

setInterval(function(){
  overshoot=document.querySelector('#overshoot').value;
period=document.querySelector('#period').value;
},500)

})  
 