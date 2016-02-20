
var inAddMode = false;

$(document).ready(function(){
	//For Adding events on the map
		$('#map').click(function(e){
			if(inAddMode){
				var img = $('<img src="img/map_pin.png" />');
				var mapWidth = $("#map_img").width();
				var mapHeight = $("#map_img").height();

				//Must keep the pixel ratio of original image constant
				var mapPinWidth = mapWidth*(0.08);
				var mapPinHeight = mapPinWidth;

				var offsetLeft = mapPinWidth/2;
				var offsetTop = mapPinHeight;

				img.css({
					position: 'absolute',
					width: mapPinWidth,
					height: mapPinHeight,
					left: e.pageX-offsetLeft,
					top: e.pageY-offsetTop,
					cursor: 'pointer'
				});
				$("#map").append(img);
			//Now make the app take you to the event creation page
			}
		});


	//end of addMode
});

$(document).ready(function(){
			
		$('#add_button').click(function(){
			//inAddMode = true;
			alert(inAddMode);
		});
})