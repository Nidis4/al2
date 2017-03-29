$( ".addMS" ).click(function() {
  var clicked = this.id;
  var label = clicked.toUpperCase(); 
  $( ".area" ).append( "<div id='"+clicked+"' class='draggable draggableMS ui-widget-content "+clicked+" ms' style='position:absolute; top:10px'><p>"+label+"</p></div>" );
  //alert("Button clicked, id "+this.id);
  $( ".draggableMS" ).draggable({ containment: ".area", grid: [ 50, 50 ] });
});