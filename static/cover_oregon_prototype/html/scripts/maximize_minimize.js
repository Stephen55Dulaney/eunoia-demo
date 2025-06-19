/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  maximize_minimize.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 8/8/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/*========================================================================== 
  Open close buttons for FAQs
========================================================================== */

$(function(){ 

  $('.faqContent').hide();
  $('.minimize-button').click(function() {
    var $a = $(this);
    $(this).parents('fieldset').find('.faqContent').slideToggle(function() {
      if ($(this).is(':hidden')) {
        $a.removeClass('open');
            } else {
                $a.addClass('open');
            }
    });
    return false;
  });

});


  		