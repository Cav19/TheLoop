


$(document).ready(function(){
	var inAddMode = false;

	//add the add_button
	var mapWidth = $('#map_img').width();
	var mapHeight = $('#map_img').height();
	var addSignWidth = mapWidth*(0.04);
	var addSignHeight = addSignWidth;

	var addSign =  $('<img src="img/add_img.png" >');
	var offsetLeft = addSignWidth;
	var offsetTop = addSignHeight;

	addSign.prop('id', 'add_button');
	addSign.css({
		position: 'absolute',
		width: addSignWidth,
		height: addSignWidth,
		left: mapWidth-offsetLeft - mapWidth*(0.001),
		top:  mapHeight*(0.04) ,
		cursor: 'pointer'
	});
	$("#map").append(addSign);
	//done adding add_button
	$("#add_button").click(function(e){
		inAddMode = !inAddMode;
	});

	//For Adding events on the map
		$('#map_img').click(function(e){
			if(inAddMode){
				var mapPin = $('<img src="img/map_pin.png" />');
				var mapWidth = $("#map_img").width();
				var mapHeight = $("#map_img").height();

				//Must keep the pixel ratio of original image constant
				var mapPinWidth = mapWidth*(0.08);
				var mapPinHeight = mapPinWidth;

				var offsetLeft = mapPinWidth/2;
				var offsetTop = mapPinHeight;

				mapPin.prop('id', 'map_pin');
				mapPin.css({
					position: 'absolute',
					width: mapPinWidth,
					height: mapPinHeight,
					left: e.pageX-offsetLeft,
					top: e.pageY-offsetTop,
					cursor: 'pointer'
				});

				$("#map").append(mapPin);
				inAddMode = false;
			//Now make the app take you to the event creation page
			}
		});

	//end of addMode

		$(document).on('click', '#map_pin', function(){
			//display info about event
			alert("Info needed");
		});
});
