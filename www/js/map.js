


$(document).ready(function(){
	var inAddMode = false;
	$("#myModal").modal({show : false});

	var mapWidth = $("#map_img").width();
	var mapHeight = $("#map_img").height();
	//Must keep the pixel ratio of original image constant
	var mapPinWidth = mapWidth*(0.05);
	var mapPinHeight = mapPinWidth;
	var pinOffsetLeft = mapPinWidth/2;
	var pinOffsetTop = mapPinHeight;

	//Hardcoded Example
	

	var lcMapPin =$('<img src="img/map_pin.png" />');
	lcMapPin.prop('id', 'map_pin');
	lcMapPin.css({
		position: 'absolute',
		width: mapPinWidth,
		height: mapPinHeight,
		left: 819.4,
		top: 55.8,
		cursor: 'pointer'
	});

	$("#map").append(lcMapPin);


	var footballMapPin =$('<img src="img/map_pin.png" />');
	footballMapPin.prop('id', 'map_pin');
	footballMapPin.css({
		position: 'absolute',
		width: mapPinWidth,
		height: mapPinHeight,
		left: 1205.4,
		top: 11.8,
		cursor: 'pointer'
	});

	$("#map").append(footballMapPin);

	var carnMapPin =$('<img src="img/map_pin.png" />');
	carnMapPin.prop('id', 'map_pin');
	carnMapPin.css({
		position: 'absolute',
		width: mapPinWidth,
		height: mapPinHeight,
		left: 715.4,
		top: 263.8,
		cursor: 'pointer'
	});

	$("#map").append(carnMapPin);

	var cHouseMapPin =$('<img src="img/map_pin.png" />');
	cHouseMapPin.prop('id', 'map_pin');
	cHouseMapPin.css({
		position: 'absolute',
		width: mapPinWidth,
		height: mapPinHeight,
		left: 218.4,
		top: 327.8,
		cursor: 'pointer'
	});


	$("#map").append(cHouseMapPin);
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
		left: mapWidth-offsetLeft - mapWidth*(0.01),
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
				var mapPinWidth = mapWidth*(0.05);
				var mapPinHeight = mapPinWidth;

				var pinOffsetLeft = mapPinWidth/2;
				var pinOffsetTop = mapPinHeight;

				mapPin.prop('id', 'map_pin');
				mapPin.css({
					position: 'absolute',
					width: mapPinWidth,
					height: mapPinHeight,
					left: e.pageX-pinOffsetLeft,
					top: e.pageY-pinOffsetTop,
					cursor: 'pointer'
				});
				
				$("#map").append(mapPin);
				location.href = "eventCreatorIonic.html";
				inAddMode = false;
			//Now make the app take you to the event creation page
			}
		});

	//end of addMode

		$(document).on('click', '#map_pin', function(){
			//display info about event
			$("#myModal").modal('show');
		});

		$("#rsvp").click(function(){
			this.innerHTML = "Going";
			$(this).css({color : 'green'});
		});
});
