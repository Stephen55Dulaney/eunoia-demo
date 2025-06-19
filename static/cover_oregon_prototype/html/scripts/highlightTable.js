/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  highlightTable.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 7/30/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/* Highlight table on How to Shop page*/
$("table").delegate('td','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') {
      $(this).parent().addClass("hover");
    }
    else {
      $(this).parent().removeClass("hover");
    }
});


/* Highlight list items within Corporate Glossary page */
$("ul").delegate('a','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') {
      $(this).parent().addClass("hover");
    }
    else {
      $(this).parent().removeClass("hover");
    }
});