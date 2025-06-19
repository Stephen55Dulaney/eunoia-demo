/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  toggleButton.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 6/28/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio & Stephen Dulaney)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */



//==== Enable Submit Function for "Next" Button ============================//

function EnableSubmit(style,dir) {
  document.getElementById('next').className=style;
  document.getElementById('next').href=dir;
}


//==== Toggle Button Text ==================================================//


//==== Compare Plans Buttons ===============================================//


/* Compare Plans id = select */

$(function(){$('#select').click(function() {
  $(this).val() == "Set As Plan" ? select_int() : select_selectedPlan();
  });
});


  function select_int() {
    $('#select').val("Your Plan");
    // do play
  }

  function select_selectedPlan() {
    $('#select').val("Set As Plan");
    // do pause
  }


/* Compare Plans id = select2 */

$(function(){$('#select2').click(function() {
  $(this).val() == "Set As Plan" ? select2_int() : select2_selectedPlan();
  });
});

  function select2_int() {
    $('#select2').val("Your Plan");
    // do play
  }

  function select2_selectedPlan() {
    $('#select2').val("Set As Plan");
    // do pause
  } 


/* Compare Plans id = select3 */

$(function(){$('#select3').click(function() {
  $(this).val() == "Set As Plan" ? select3_int() : select3_selectedPlan();
  });
});

  function select3_int() {
    $('#select3').val("Your Plan");
    // do play
  }

  function select3_selectedPlan() {
    $('#select3').val("Set As Plan");
    // do pause
  }



//==== Plans Details Buttons ===============================================//

/* id = refPlan*/

$(function(){$('#refPlan').click(function() {
  $(this).val() == "Make Reference Plan" ? refPlan_int() : refPlan_selectedPlan();
  });
});

  function refPlan_int() {
    $('#refPlan').val("Reference Plan");
    // do play
  }

  function refPlan_selectedPlan() {
    $('#refPlan').val("Make Reference Plan");
    // do pause
  }


/* Employee Plan Details id = EMP_selectPlan */

$(function(){$('#EMP_selectPlan').click(function() {
  $(this).val() == "Make This My Plan" ? EMP_refPlan_int() : EMP_refPlan_selectedPlan();
  });
});

  function EMP_refPlan_int() {
    $('#EMP_selectPlan').val("Your Plan");
    // do play  
  }

  function EMP_refPlan_selectedPlan() {
    $('#EMP_selectPlan').val("Make This My Plan");
    // do pause
  }


/* SHOP Plan Details id = SHOP_selectPlan */

$(function(){$('#SHOP_selectPlan').click(function() {
  $(this).val() == "Set As Plan" ? SHOP_refPlan_int() : SHOP_refPlan_selectedPlan();
  });
});

  function SHOP_refPlan_int() {
    $('#SHOP_selectPlan').val("Your Plan");
  }

  function SHOP_refPlan_selectedPlan() {
    $('#SHOP_selectPlan').val("Set As Plan");
  }



/* SHOP Compare Plans id = compare2 */

$(function(){$('#compare2').click(function() {
  $(this).val() == "Set As Reference Plan" ? compare2_int() : compare2_selectedPlan();
  });
});

  function compare2_int() {
    $('#compare2').val("Reference Plan");
    // do play
  }

  function compare2_selectedPlan() {
    $('#compare2').val("Set As Reference Plan");
    // do pause
  } 


/* Compare Plans id = compare3 */

$(function(){$('#compare3').click(function() {
  $(this).val() == "Set As Reference Plan" ? compare3_int() : compare3_selectedPlan();
  });
});

  function compare3_int() {
    $('#compare3').val("Reference Plan");
    // do play
  }

  function compare3_selectedPlan() {
    $('#compare3').val("Set As Reference Plan");
    // do pause
  }



/* id = addToCart*/

$(function(){$('#addToCart').click(function() {
  $(this).val() == "Add To Cart" ? addToCart_int() : addToCart_selectedPlan();
  });
});

  function addToCart_int() {
    $('#addToCart').val("Your Plan");
    // do play
  }

  function addToCart_selectedPlan() {
    $('#addToCart').val("Add To Cart");
    // do pause
  }



/* id = addToCart2*/

$(function(){$('#addToCart2').click(function() {
  $(this).val() == "Add To Cart" ? addToCart2_int() : addToCart2_selectedPlan();
  });
});

  function addToCart2_int() {
    $('#addToCart2').val("Your Plan");
    // do play
  }

  function addToCart2_selectedPlan() {
    $('#addToCart2').val("Add To Cart");
    // do pause
  }



/* id = addToCart3*/

$(function(){$('#addToCart3').click(function() {
  $(this).val() == "Add To Cart" ? addToCart3_int() : addToCart3_selectedPlan();
  });
});

  function addToCart3_int() {
    $('#addToCart3').val("Your Plan");
    // do play
  }

  function addToCart3_selectedPlan() {
    $('#addToCart3').val("Add To Cart");
    // do pause
  }

