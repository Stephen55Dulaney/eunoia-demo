/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  tabs.js
 * ===== VERSION: v0.2
 * ===== UPDATED: 2/1/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

$(function() {  
  // Tabs
  var $tabs = $("#tabbed_area").tabs();
});

//Go to Next Tab
$(function() {
  $( "#tabbed_area" ).tabs();
  $('a.tabLink').click(function(e) { 
      var tab = $(this).attr('href'); 
      $(tab).click();

      $( "#tabbed_area" ).scrollTop();
  });
});

$(function() {  
  // Dashboard Pages Tabs
  var $tabs = $("#dashboard_tabbed_area").tabs();  
});


//Vertical Tabs
// $(function() {
//     $( ".vertical" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
//     $( ".vertical li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
// });
