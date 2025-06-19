/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  languages.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 8/26/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ============================================================================== */


//==== Displays Languages Sections on Language Help Page ========================= //
function languageId() {
var url =window.location.search.substring(1);

 var languageId = url.split("=")[1];
  

  $('#'+ languageId).on('click', function() {
       // alert($(this).text());
    });
    $('#'+ languageId).trigger('click');
    
}



$(document).ready(function(){

    $('.languagesContainer').hide();

    //Show English (default) language
    $('#englishContent').show();


    //==== Displays Spanish Content ============================================== //
    $('#spanish').on('click', function(event) {

        //Hide already opened language sections
        $(".languagesContainer").css("display","none");

        //Show selected language content
        $('#spanishContent').show();
        
    });


    //==== Displays Russian Content ============================================== //
    $('#russian').on('click', function(event) {  

        //Hide already opened language sections
        $(".languagesContainer").css("display","none");

        //Show selected language content
        $('#russianContent').show();
        
    });


    //==== Displays Vietnamese Content ============================================== //
    $('#vietnamese').on('click', function(event) {

        //Hide already opened language sections
        $(".languagesContainer").css("display","none");        

        //Show selected language content
        $('#vietnameseContent').show();
        
    });


    //==== Displays Korean Content ============================================== //
    $('#korean').on('click', function(event) {

        //Hide already opened language sections
        $(".languagesContainer").css("display","none");        

        //Show selected language content
        $('#koreanContent').show();
        
    });


    //==== Displays Vietnamese Content ============================================== //
    $('#chinese').on('click', function(event) {

        //Hide already opened language sections
        $(".languagesContainer").css("display","none");        

        //Show selected language content
        $('#chineseContent').show();
        
    });     

});