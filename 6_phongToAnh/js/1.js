$(function() {
 	TweenMax.staggerFrom($('.tinto'),0.5,{top:100,opacity:0},0.1)

 			// HIỆU ỨNG 0
			$(".hieuung0-1").click(function() {
				$.fancybox.open('images/yen1.png');
			});

			$(".hieuung0-2").click(function() {
				$.fancybox.open({
					href : 'webCv/index.html',
					type : 'iframe',
					padding : 5
				});
			});

			$(".hieuung0-3").click(function() {
				$.fancybox.open([
					{
						href : 'images/yen1.png',
						title : 'haha'
					}, {
						href : 'images/yen2.png',
						title : 'hahaha'
					}, {
						href : 'images/yen3.png'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});

			$('.hieuung0-4').fancybox();
			
			// HIỆU ỨNG 1

			$(".hieuung1").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".hieuung1.1").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".hieuung1.2").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".hieuung1.3").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			
			

			// HIỆU ỨNG 2
			$(".hieuung2").fancybox();



			// HIỆU ỨNG 3
			$('.hieuung3').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


				// HIỆU ỨNG 4
			$('.hieuung4').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});


			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			



	
 });