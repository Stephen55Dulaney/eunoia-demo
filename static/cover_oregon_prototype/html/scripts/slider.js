/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  slider.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 3/19/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */


/* =============================================================================
    Medical Contributions
 ========================================================================== */

$(function() {

    /** Employees Contributions Slider **/
    $( "#employee-slider-range-min" ).slider({
      range: "min",
      min: 150,
      max: 500,
      step: 5,
      slide: function( event, ui ) {
        $( "#employeeAmount" ).val( "$" + ui.value );
        $( "#employeeTotalContribution" ).val( "$" +(ui.value)*3);
        $('#medicalTotalContribution').val((ui.value)*3 + $('#dependent-slider-range-min').slider("value")*4);
        $('#grandTotalContribution').val((ui.value)*3 + $('#dependent-slider-range-min').slider("value")*4 + $('#dental-employee-slider-range-min').slider("value")*3 + $('#dental-dependent-slider-range-min').slider("value")*4);
      }
    });

    $( "#employeeAmount" ).val( "$" + $( "#employee-slider-range-min" ).slider( "value") );
    $( "#employeeTotalContribution" ).val( "$" + ($( "#employee-slider-range-min" ).slider( "value" )*3) );

});


$(function() {      
    /** Dependets Contributions Slider **/
    $( "#dependent-slider-range-min" ).slider({
      range: "min",
      min: 0,
      max: 300,
      step: 5,
      slide: function( event, ui ) {
        $( "#dependentAmount" ).val( "$" + ui.value );
        $( "#dependentTotalContribution" ).val( "$" +(ui.value)*4);
        $('#medicalTotalContribution').val((ui.value)*4 + $('#employee-slider-range-min').slider("value")*3);
        $('#grandTotalContribution').val((ui.value)*4 + $('#employee-slider-range-min').slider("value")*3 + $('#dental-employee-slider-range-min').slider("value")*3 + $('#dental-dependent-slider-range-min').slider("value")*4);

      }
    });

    $( "#dependentAmount" ).val( "$" + $( "#dependent-slider-range-min" ).slider( "value") );
    $( "#dependentTotalContribution" ).val( "$" + ($( "#dependent-slider-range-min" ).slider( "value" )*4) );
    $('#medicalTotalContribution').val("$" + 1050 );
});

 /* =============================================================================
      Dental Contributions
   ========================================================================== */
$(function() {
    /** Employees Contributions Slider **/
    $( "#dental-employee-slider-range-min" ).slider({
      range: "min",
      min: 20,
      max: 300,
      step: 5,
      slide: function( event, ui ) {
        $( "#dentalEmployeeAmount" ).val( "$" + ui.value );
        $( "#dentalEmployeeTotalContribution" ).val( "$" +(ui.value)*3);
        $('#dentalTotalContribution').val((ui.value)*3 + $('#dental-dependent-slider-range-min').slider("value")*4);
        $('#grandTotalContribution').val((ui.value)*3 + $('#dependent-slider-range-min').slider("value")*4 + $('#employee-slider-range-min').slider("value")*3 + $('#dental-dependent-slider-range-min').slider("value")*4);

      }
    });
    $( "#dentalEmployeeAmount" ).val( "$" + $( "#dental-employee-slider-range-min" ).slider( "value") );
    $( "#dentalEmployeeTotalContribution" ).val( "$" + ($( "#dental-employee-slider-range-min" ).slider( "value" )*3) );
    $('#dentalTotalContribution').val("$" + 140 );
    $('#grandTotalContribution').val("$" + 1320 );
 
});

$(function() {

  /** Dependets Contributions Slider **/
  $( "#dental-dependent-slider-range-min" ).slider({
    range: "min",
    min: 0,
    max: 200,
    step: 5,
    slide: function( event, ui ) {
      $( "#dentalDependentAmount" ).val( "$" + ui.value );
      $( "#dentalDependentTotalContribution" ).val( "$" +(ui.value)*4);
      $('#dentalTotalContribution').val((ui.value)*4 + $('#dental-employee-slider-range-min').slider("value")*3);
      $('#grandTotalContribution').val((ui.value)*3 + $('#dependent-slider-range-min').slider("value")*4 + $('#dental-employee-slider-range-min').slider("value")*3 + $('#dependent-slider-range-min').slider("value")*4);

    }
  });
  $( "#dentalDependentAmount" ).val( "$" + $( "#dental-dependent-slider-range-min" ).slider( "value") );
  $( "#dentalDependentTotalContribution" ).val( "$" + ($( "#dental-dependent-slider-range-min" ).slider( "value" )*4) );

});



 /* =============================================================================
      Left Nav Filter Sliders for view/compare plans 
   ========================================================================== */


 $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 0, 5000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });



 $(function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount2" ).val( "$" + $( "#slider-range2" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range2" ).slider( "values", 1 ) );
  });


  $(function() {
    $( "#slider-range3" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount3" ).val( "$" + $( "#slider-range3" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range3" ).slider( "values", 1 ) );
  });


 $(function() {
    $( "#slider-range4" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount4" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount4" ).val( "$" + $( "#slider-range4" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range4" ).slider( "values", 1 ) );
  });


 $(function() {
    $( "#slider5" ).slider({
      value: 0,
      min: 0,
      max: 2400,
      step: 25,
      slide: function( event, ui ) {
        $( "#amount5" ).val( "$" + ui.value );
      }
    });
    $( "#amount5" ).val( "$" + $( "#slider" ).slider( "value" ) );
  });


/* Primary Office Visit Slider */
$(function() {
    $( "#office_visit_slider_range" ).slider({
      range: true,
      min: 0,
      max: 40,
      values: [ 0, 40 ],
      slide: function( event, ui ) {
        $( "#office_visit_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#office_visit_amount" ).val( "$" + $( "#office_visit_slider_range" ).slider( "values", 0 ) +
      " - $" + $( "#office_visit_slider_range" ).slider( "values", 1 ) );
  });



/* Out of Pocket Slider */
 $(function() {
    $( "#OOP_slider_range" ).slider({
      range: true,
      min: 0,
      max: 6350,
      values: [ 0, 6350 ],
      slide: function( event, ui ) {
        $( "#OOP_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#OOP_amount" ).val( "$" + $( "#OOP_slider_range" ).slider( "values", 0 ) +
      " - $" + $( "#OOP_slider_range" ).slider( "values", 1 ) );
  });


/** Annual Maximum Slider**/
  $(function() {
    $( "#annualMaxSlider" ).slider({      
      range: true,
      min: 0,
      max: 300,
      step: 5,
      values: [ 30, 150 ],
      slide: function( event, ui ) {
        $( "#annualMax" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    
    $( "#annualMax" ).val( "$" + $( "#annualMaxSlider" ).slider( "values", 0 ) +
      " - $" + $( "#annualMaxSlider" ).slider( "values", 1 ) );

  });


/** Dental Annual Maximum Slider**/
  $(function() {
    $( "#annualMaxDentalSlider" ).slider({      
      range: true,
      min: 0,
      max: 2000,
      step: 5,
      values: [ 0, 2000 ],
      slide: function( event, ui ) {
        $( "#annualMaxDentalAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    
    $( "#annualMaxDentalAmount" ).val( "$" + $( "#annualMaxDentalSlider" ).slider( "values", 0 ) +
      " - $" + $( "#annualMaxDentalSlider" ).slider( "values", 1 ) );

  });


/** Dental Deductible Slider**/
  $(function() {
    $( "#deductibleDentalSlider" ).slider({      
      range: true,
      min: 0,
      max: 100,
      step: 5,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#deductibleDentalAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    
    $( "#deductibleDentalAmount" ).val( "$" + $( "#deductibleDentalSlider" ).slider( "values", 0 ) +
      " - $" + $( "#deductibleDentalSlider" ).slider( "values", 1 ) );

  });


  /** Planning Tools: Tax Credit Allocation Slider **/
  $(function() {
    $( "#taxCreditSlider" ).slider({
      range: "min",
      //premium:300,
      taxcredit:0,
      value: 100,
      min: 0,
      max: 300,
      slide: function( event, ui ) {
        //$( "#premium" ).val( "$" + (300-ui.value ));
        $( "#taxcredit2" ).val( "$" +(0+(ui.value)));
      }
    });
    //$( "#premium" ).val( "$" + ($( "#taxCreditSlider" ).slider( "value" )*300) );
    $( "#taxcredit2" ).val( "$" + ($( "#taxCreditSlider" ).slider( "value" )) );
  });

  /** Planning Tools: Tax Credit Allocation Slider **/
  $(function() {
    $( "#taxCreditSlider2" ).slider({
      range: "min",
      //premium:300,
      taxcredit:0,
      value: 6000,
      min: 0,
      max: 8000,
      slide: function( event, ui ) {
        $( "#taxcredit2" ).val( "$" +(0+(ui.value)));
      }
    });
    $( "#taxcredit2" ).val( "$" + ($( "#taxCreditSlider2" ).slider( "value" )) );
  });


 /* =============================================================================
      Set Tolerance Level Slider
   ========================================================================== */

$(function() {

  $( "#set-tolerance-slider-range-min" ).slider({
    range: "min",
    min: 5,
    max: 300,
    step: 5,
    slide: function( event, ui ) {
      $( "#setToleranceAmount" ).val( "$" + ui.value );      
    }
  });

  $( "#setToleranceAmount" ).val( "$" + $( "#set-tolerance-slider-range-min" ).slider( "value") );   

});



 /* =============================================================================
      Tax Credit Allocation
   ========================================================================== */

   $(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      premium:300,
      taxcredit:0,
      value: 0,
      min: 0,
      max: 300,
      slide: function( event, ui ) {
        $( "#premium" ).val( "$" + (300-ui.value ));
        $( "#taxcredit" ).val( "$" +(0+(ui.value)));
      }
    });
    $( "#premium" ).val( "$" + ($( "#slider-range-min" ).slider( "value" )*300) );
    $( "#taxcredit" ).val( "$" + ($( "#slider-range-min" ).slider( "value" )) );
  });

