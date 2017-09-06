$( function() {
	  var cache = [];
		  // Arguments are image paths relative to the current page.
		  $.preLoadImages = function() {
			var args_len = arguments.length;
			for (var i = args_len; i--;) {
			  var cacheImage = document.createElement('img');
			  cacheImage.src = arguments[i];
			  cache.push(cacheImage);
			}
		  }
	  
	
	  // Screw Example Animation Start
	  var animationFile = 0,
		  imageContainer = $(".information__circle_animation > img"),
		  start = 18;
	  
	  
    $( "#animation__slider" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 18,
      step: 1,
      value: 18,
      slide: function( event, ui ) {
		$(".information__circle_highlight").hide();
        imageContainer.attr("src", "images/animation/animation"+-(ui.value-start)+".png");
		  if (ui.value === 18)
		  {
			  $(".information__circle_highlight").show();			  
		  }
	  }
    });
	
	$("#circle__trigger").click(function(e){
		e.preventDefault();
		$(".information__circle_highlight").hide();
		for(var i=0; i <= start; i++){
			(function(i){
				setTimeout(function(){
					if(i===start)
						{
							setTimeout(function(){
								$(".information__circle_highlight").show();
								imageContainer.attr("src", "images/animation/animation0.png");
							}, 100*i);							
						}
				 imageContainer.attr("src", "images/animation/animation"+i+".png");
				}, 50 * i);
			}(i));	
		}

	});
	  
	var growCount = 3;
	 
	  $(".circle").each(function(i){
		var theName = $(this);	
		  
	  	setTimeout( function(){ animateCircle(theName); }, 2000*i);
	  
	  });
	  
	  function animateCircle(name){
		  
		 for(x=0; x < growCount; x++) {
			 
			name.addClass("open").delay(1000).queue(function(){
				$(this).removeClass("open").dequeue();
			});
	  	} 
	  }
	  
	  
	

	$( ".circle__highlight_first").click(function(){
		var imageContainer = $(".information__circle_first"),
			imageNormal = imageContainer.find('.hide__mobile').find("img"),
			imageMobile = imageContainer.find('.show__mobile').find("img");
		
		if(imageNormal.hasClass('active')){
			imageNormal.attr("src","images/animation/topofscrew_blank.png");
			imageNormal.removeClass("active");
		} else {
			imageNormal.attr("src","images/animation/topofscrew.png");
			imageNormal.addClass("active");
		}
		
		if(imageMobile.hasClass('active')){
			imageMobile.attr("src","images/animation/topofscrew_mobile_blank.png");
			imageMobile.removeClass("active");
		} else {
			imageMobile.attr("src","images/animation/topofscrew_mobile.png");
			imageMobile.addClass("active");
		}
		
	});

	$( ".circle__highlight_second").click(function(){
		
		var imageContainer = $(".information__circle_second"),
			imageNormal = imageContainer.find('.hide__mobile').find("img"),
			imageMobile = imageContainer.find('.show__mobile').find("img");

		if(imageNormal.hasClass('active')){
			imageNormal.attr("src","images/animation/draw_tight_shank_blank.png");
			imageNormal.removeClass("active");
		} else {
			imageNormal.attr("src","images/animation/draw_tight_shank.png");
			imageNormal.addClass("active");
		}
		
		if(imageMobile.hasClass('active')){
			imageMobile.attr("src","images/animation/draw_tight_shank_mobile_blank.png");
			imageMobile.removeClass("active");
		} else {
			imageMobile.attr("src","images/animation/draw_tight_shank_mobile.png");
			imageMobile.addClass("active");
		}
	});

	$( ".circle__highlight_third").click(function(){
		var imageContainer = $(".information__circle_third"),
			imageNormal = imageContainer.find('.hide__mobile').find("img"),
			imageMobile = imageContainer.find('.show__mobile').find("img");

		if(imageNormal.hasClass('active')){
			imageNormal.attr("src","images/animation/point_of_screw_blank.png");
			imageNormal.removeClass("active");
		} else {
			imageNormal.attr("src","images/animation/point_of_screw.png");
			imageNormal.addClass("active");
		}
		if(imageMobile.hasClass('active')){
			imageMobile.attr("src","images/animation/point_of_screw_mobile_blank.png");
			imageMobile.removeClass("active");
		} else {
			imageMobile.attr("src","images/animation/point_of_screw_mobile.png");
			imageMobile.addClass("active");
		}
		
	});
  	
  
  });