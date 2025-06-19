/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  shoppingCart.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 6/4/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

function incrementValue(style){

    var value = parseInt(document.getElementById('number').value, 5);
    value = isNaN(value) ? 0 : value;
    value++;

    document.getElementById('number').value = value;

    //Change Text on the Button 
    $('#addToCart').val("Your Plan");
    
    //Change button style to inactive
    document.getElementById('addToCart').className=style;

    //Disable "Add To Cart" button
    $("#addToCart").attr("disabled", "disabled");

    //Hide cart empty message
    $("#cartEmptyMsg").css("display","none");

    //Show Shopping Cart Contents
    $("#cartContents").css("display","block");

}

function decrementValue(style){

  var value = parseInt(document.getElementById('number').value, 5);
  value = isNaN(value) ? 0 : value;
  if (value >0 ){
  	    	  value--;
  }

  document.getElementById('number').value = value;

  //Change Text on the Button 
  $('#addToCart').val("Add To Cart");

  //Change button style back to green
  document.getElementById('addToCart').className=style;

  //Enable "Add To Cart" button
  $("#addToCart").removeAttr("disabled");

  //Show cart empty message
  $("#cartEmptyMsg").css("display","block");

  //Hide Shopping Cart Contents
  $("#cartContents").css("display","none");
}

