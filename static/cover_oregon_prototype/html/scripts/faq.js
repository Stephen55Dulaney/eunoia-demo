/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  faq.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 9/25/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Stephen Dulaney)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

      function showFAQs() {
//set variables used to get id from url
var url =window.location.search.substring(1);
var returnIndex = -1;
var FAQsId = decodeURIComponent(url.split("=")[1]);
  // alert(FAQsId);
// alert(glossary[3].Term == glossaryId);
// If no id in url proceed to load the general page
if (FAQsId !== "undefined") {

      if ($('#' + FAQsId).hasClass('active')) {
      // alert($(this).hasClass('active'));
      // if the FAQsId is in the url then set the category active 
    } else {
      $('li').removeClass('active');
     
      if (FAQsId == "Individuals and Families") {
        $('#Individuals_and_Families').addClass('active');
      }
      else    if (FAQsId == "Community Partners") {
        $('#Community_Partners').addClass('active');
      }
      else    if (FAQsId == "Tribal Organization") {
        $('#Tribal_Organization').addClass('active');
      }
      else{
      $('#' + FAQsId).addClass('active');
        }
      
    }
    // loop through and show all the question answer pairs in the category 
$.each(FAQs, function(index ){
 
  if (FAQs[index].Category == FAQsId) {

$("#faqList").append("<fieldset><div class='faqHeader clearfix'> <a class='minimize-button' href='#'></a>" + "<p>" + FAQs[index].Question + "</p>" + "</div><div class='faqContent' style='display: block;'>" + "<p>" + FAQs[index].Answer + "</p>" + "</div></fieldset>");

      
    }
});
 // alert(returnIndex);
}
else {

g_Group = [];
g_TermArray = [];
//alert(FAQs.length);

// loop through the array and show the FAQ's for the General category

$.each(FAQs, function(index ){
 
  if (FAQs[index].Category == "General") {
$("#faqList").append("<fieldset><div class='faqHeader clearfix'> <a class='minimize-button' href='#'></a>" + "<p>" + FAQs[index].Question + "</p>" + "</div><div class='faqContent' style='display: block;'>" + "<p>" + FAQs[index].Answer + "</p>" + "</div></fieldset>");
}

});
}
// function used to hide and show the answer
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


$('li').click(function(){
    
    var elid = $(this).attr('id');
    $('#faqList').html('');
    // alert(elid);

    if ($(this).hasClass('active')) {
  //    alert($(this).hasClass('active'));
    } else {
      $('li').removeClass('active');
      $(this).addClass('active');
       // alert($(this).attr('id'));
    }

if (elid == "Individuals_and_Families") {
  elid = "Individuals and Families";
}
if (elid == "Community_Partners") {
  elid = "Community Partners";
}
if (elid == "Tribal_Organization") {
  elid = "Tribal Organization";
}
    $.each(FAQs, function(index ){
 if (FAQs[index].Category == elid) {
//alert(FAQs[index].Answer.search('Tribal')>0);

$("#faqList").append("<fieldset><div class='faqHeader'> <a class='minimize-button' href='#'></a>" + "<p>" + FAQs[index].Question + "</p>" + "</div><div class='faqContent' style='display: block;'>" + FAQs[index].Answer + "</div></fieldset>");

  }

});



    

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

    
});


$('form').submit(function() { 
  var searchStr = $('#search_input').val();
    $('#faqList').html('');

   // alert(FAQs.length);
    $.each(FAQs,function(jindex){
      if ((FAQs[jindex].Answer.search(searchStr)>0)) {
        //alert(FAQs[jindex].Answer.search(searchStr));
        $("#faqList").append("<fieldset><div class='faqHeader'> <a class='minimize-button' href='#'></a>" + FAQs[jindex].Question + "</div><br><div class='faqContent' style='display: block;'>" + FAQs[jindex].Answer + "</div></fieldset>");
      }
      
    })
  return false;

    
  });
   


           
   
  }