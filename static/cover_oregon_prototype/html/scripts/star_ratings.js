/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  star_ratings.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 3/5/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/* Table of Contents
    1. Star Ratings

*/


/* =============================================================================
   Star Ratings
   ========================================================================== */


$(function() {
  
    /* Default*/
    $('.default-demo').raty();

    /* Score with Saved Rating of '3'*/
     $('.score-demo').raty({ score: 3 });

    /* Custom Number of Stars*/
    $('.number-demo7').raty({ number: 7 });

    /* Half Star */
    $('.halfShow-true-demo').raty({ half: true });

    /* Readonly: Score 1 */
    $('.readOnly-demo1').raty({ readOnly: true, score: 1 });

    /* Readonly: Score 2 */
    $('.readOnly-demo2').raty({ readOnly: true, score: 2 });

    /* Readonly: Score 3 */
    $('.readOnly-demo3').raty({ readOnly: true, score: 3 });

    /* Readonly: Score 4 */
    $('.readOnly-demo4').raty({ readOnly: true, score: 4 });

    /* Readonly: Score 5 */
    $('.readOnly-demo5').raty({ readOnly: true, score: 5 });

});