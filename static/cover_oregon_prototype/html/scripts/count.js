/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  count.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 2/19/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Stephen Dulaney)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */


 // used for count increment by one

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
  if (value >0 ){
  	    	  value--;
  }
    document.getElementById('number').value = value;
}

function vincrementValue()
{
    var value = parseInt(document.getElementById('vnumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('vnumber').value = value;
}

function vdecrementValue()
{
    var value = parseInt(document.getElementById('vnumber').value, 10);
    value = isNaN(value) ? 0 : value;
  if (value >0 ){
            value--;
  }
    document.getElementById('vnumber').value = value;
}
