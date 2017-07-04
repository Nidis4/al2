$(document).ready(function () {
  var windowheight = $( window ).height();
  //alert(windowheight);
  $( "#draw-area" ).css( "height", windowheight-10 );
  $( "#actions" ).css( "height", windowheight-10 );
  $( ".panel-body" ).css( "max-height", windowheight-170 );
  //$("#DynContainer").css({height:'<?php echo $containerHeight; ?>px'})
});

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
    var clicked = this.id;
    var issueColor = 0;
    //alert(clicked);
	   if (clicked == "c1" || clicked == "c2" || clicked == "c3" || clicked == "c4" || clicked == "c5" || clicked == "c6" || clicked == "c7" || 
      clicked == "c8" || clicked == "c9" || clicked == "c10" || clicked == "c11" || clicked == "c12" || clicked == "c13" ||clicked == "c14" || 
      clicked == "c15" || clicked == "c16" ||clicked == "c17" ||clicked == "c18" || clicked == "c19" || clicked == "c20" || clicked == "c21" || 
      clicked == "c22" || clicked == "c23" || clicked == "c24" || clicked == "c25" || clicked == "c26" || clicked == "c27" || clicked == "c28"|| 
      clicked == "c29" || clicked == "c30" || clicked == "c31" || clicked == "c32" || clicked == "c33" || clicked == "c34"){
      var color = 1;
     }
     else{
      color=0;
     }
  	//$( ".draggable.active" ).css( "background", "transparent url('images/xromatologio/"+clicked+".jpg') no-repeat scroll 0% 0% / cover" );

    // Add Canvas to Closed
    $( ".draggable.active" ).each(function( index, element ) {
      //alert (this);
      if ( $( this ).hasClass("ms017") || $( this ).hasClass("ms018") || $( this ).hasClass("ms019") || $( this ).hasClass("ms020") || 
        $( this ).hasClass("ms021") || $( this ).hasClass("ms022") || $( this ).hasClass("ms023") || $( this ).hasClass("ms024") || $( this ).hasClass("ms025") || 
        $( this ).hasClass("ms026") || $( this ).hasClass("ms051") || $( this ).hasClass("ms052") || $( this ).hasClass("ms053") || $( this ).hasClass("ms054") || 
        $( this ).hasClass("ms055")  ){

        if (color==0){
          $( this ).css( "background", "transparent url('images/xromatologio/"+clicked+".jpg') no-repeat scroll 0% 0% / cover" );
          $( this ).css( "border" , "7px solid transparent");
          $( this ).css( "border-image" , "url(images/xromatologio/"+clicked+".jpg) 30 round");
        }
        else{
          issueColor = 1;
        }
      }
      else{
        $( this ).css( "background-image", "url('images/background_nobord.png'), url('images/xromatologio/"+clicked+".jpg')" );
      }
    });

	    if (issueColor > 0 ){
	      alert('Color cannot be applied to Open Elements');
	    }
	    else{
		    if (clicked.indexOf("c5") >= 0 || clicked.indexOf("c24") >= 0 || clicked.indexOf("c14") >= 0 || clicked.indexOf("transparent") >= 0 
		    	|| clicked.indexOf("volakas") >= 0){
		      $( ".draggable.active" ).css( "color", "black" );
		    }
		    else{
		      $( ".draggable.active" ).css( "color", "white" );
		    }
	    	$(".draggable").removeClass("active");
	    }
	} // active length
	else{
		alert("Please select an element!");
	}
});


$(document).on('click', '.draggable', function() { 
	$( this ).toggleClass( "active" ); 
});

$( "#clear-all" ).click(function() {
  $( ".area" ).empty();
});
$( "#select-all" ).click(function() {
  $( ".draggable" ).addClass( "active" );
});
$( "#deselect-all" ).click(function() {
  $( ".draggable" ).removeClass( "active" );
});

$( "#delete-selected" ).click(function() {
  if($('.active').length === 0){
    alert("Please select an element");
  }
  else{
    $( ".active" ).remove();
  }
  
});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$( "#sub" ).click(function() {
    html2canvas($( ".area" ), {
      onrendered: function(canvas) {
      	$( "#selectedCanvas" ).html(canvas);
      	var dataURL = canvas.toDataURL();
      	var name = $('#inputName').val();
        var email = $('#inputEmail').val();
        var telephone = $('#inputTelephone').val();
        

        $.ajax({
          type: "POST",
          url: "script.php",
          data: { 
             imgBase64: dataURL,
             nameF: name,
             email: email,
             mobile: telephone
          }
        }).done(function(o) {
          alert(o);

          //console.log('saved'); 
          // If you want the file to be visible in the browser 
          // - please modify the callback in javascript. All you
          // need is to return the url to the file, you just saved 
          // and than put the image in your browser.
        });
        $("#myModal").removeClass("in");


        //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        //window.location.href=image; // 
        //document.getElementById("selectedCanvas").html(canvas);
      }
    });
});
