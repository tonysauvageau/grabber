// Application Animation
	  
$(".application__container").bind("mouseenter", function(){
	var icon = $(this).find(".application__container_icon"),
		content = $(this).find(".application__container_content"),
		hover = $(this).find(".application__container_hover"),
		topLayer = $(this).find(".application__container_toplayer");

	hover.stop().animate({"left":"0", "width":"150%"}, 500);
	topLayer.stop().animate({"left":"0"}, 500);

	content.stop().delay(100).animate({"top":"63%"});
	icon.stop().delay(200).animate({ whyNotToUseANonExistingProperty: 100 }, {
		step: function() {
			$(this).css('-webkit-transform',"scale( 1 )");
		},
		duration:1000
	},1200);


});

$(".application__container").bind("mouseleave", function(){
	var icon = $(this).find(".application__container_icon"),
		content = $(this).find(".application__container_content"),
		hover = $(this).find(".application__container_hover"),
		topLayer = $(this).find(".application__container_toplayer");

	//topLayer.hide();
	hover.stop().animate({"left":"-130%", "width":"130%"},600);
	topLayer.stop().animate({"left":"-130%"}, 600);
	icon.stop().animate({ whyNotToUseANonExistingProperty: 100 }, {
		step: function() {
			$(this).css('-webkit-transform',"scale( 0 )");
		},
		duration:'fast'
	},'linear');
	//content.delay(600).slideDown("slow");
	content.stop().animate({"top":"-60%"});

});