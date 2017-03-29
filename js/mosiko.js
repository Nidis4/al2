var counter = 0;
$( ".addMS" ).click(function() {
	counter++;
  var newID = "mos"+counter; 
  var clicked = this.id;
  var label = clicked.toUpperCase(); 

  var p = $( ".area" );
  var position = p.position();

  $( ".area" ).append( "<div id='"+newID+"' class='draggable draggableMS ui-widget-content "+clicked+" ms' style='position:absolute; top:" + position.top+"'><p>"+label+"</p></div>" );
  //alert("Button clicked, id "+this.id);
  $( ".draggableMS" ).draggable({ containment: ".area", grid: [ 50, 50 ] });
});

$( ".addCL" ).click(function() {
	if ( $( ".draggable.active" ).length ) {
		$( ".draggable.active" ).css( "background", "black" );
	}
	else{
		alert("Please select an element!");
	}
});


$(document).on('click', '.draggable', function() { 
	$( this ).toggleClass( "active" ); 
});
