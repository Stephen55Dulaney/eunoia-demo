/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  glossary.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 9/25/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Stephen Dulaney)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

      function glossaryTest() {

var url =window.location.search.substring(1);
var returnIndex = -1;
 var glossaryId = decodeURIComponent(url.split("=")[1]);
 //alert(glossaryId);
// alert(glossary[3].Term == glossaryId);
$.each(glossary, function(index ){
    if (glossary[index].Term == glossaryId) {
        returnIndex = index;
        return false;
    }
});
// alert(returnIndex);




g_Group = [];
g_TermArray = [];

//alert(glossary.length);
$("#search_input").keypress(function(e){
    if(event.keyCode == 13) {
    //var url =window.location.search.substring(1);
    //alert(url);
    //var searchStr = url.split("=")[1];
    var searchStr2 = $('#search_input').val();
    //alert("search string " + searchStr + " " + searchStr2);
    if (!searchStr2) {
        alert("If");
    }
    else {
        alert("else");
    }
}
});

if (returnIndex == -1) {

$.each(glossary, function(index ){
  
 
     $("#myDivTerm").append("<div class='clearfix twoColumn'><div class='firstColumn'><p>" + glossary[index].Term + "</p></div>" + "<div class='secondColumn'><p>" + glossary[index].Definition + "</p></div></div>")


});
   }
   else {
    $("#myDivTerm").append("<div class='clearfix twoColumn'><div class='firstColumn'><p>" + glossary[returnIndex].Term + "</p></div>" + "<div class='secondColumn'><p>" + glossary[returnIndex].Definition + "</p></div></div>")
   }


$('li').click(function(){
    
    var elid = $(this).attr('id');
    $('#myDivTerm').html('');
   // alert(elid);
   // alert($(this).hasClass('active'));
    if ($(this).hasClass('active')) {
  //    alert($(this).hasClass('active'));
    } else {
      $('li').removeClass('active');
      $(this).addClass('active');
    }

    
    $.each(glossary, function(index ){
 if (glossary[index].Group == elid) {

$("#myDivTerm").append("<div class='clearfix twoColumn'><div class='firstColumn'><p>" + glossary[index].Term + "</p></div>" + "<div class='secondColumn'><p>" + glossary[index].Definition + "</p></div></div>");
  }

});
    
    
});

$.each(glossary, function(index) {
    var iGroup =glossary[index].Group;
    if ($.inArray(iGroup, g_Group) == -1) {

        g_Group.push(iGroup);
        
    }
});

g_Group.sort();

$.each(g_Group, function(i) {
    $("#DropDown_Group").append('<option value="' + g_Group[i] + '">' + g_Group[i] + '</option>');
});

$('#DropDown_Group').change(function() {
    var val = $(this).val();
    $('.GroupClass').html(val);
    setGroup(val);
});

$('#DropDown_Term').change(function() {
    var val = $(this).val();
    $('.TermClass').html(val);

});

 

    
    function setGroup(theGroup) {       
        $("#DropDown_Term option").remove();
        
        $.each(glossary, function(index) {
            var sTerm = glossary[index].Term;
            if ($.inArray(sTerm, g_TermArray) == -1 && glossary[index].Group == theGroup) {
                g_TermArray.push(sTerm);
            }
        });
        $.each(g_TermArray, function(i) {
            $("#DropDown_Term").append('<option value="' + g_TermArray[i] + '">' + g_TermArray[i] + '</option>');

        });
    }


            $('select').change(function () {
                $('#tableID tr').remove();
                var newRows = "";
                $.each(glossary, function (index) {
                    if (glossary[index].Term == $('#DropDown_Term').val() && glossary[index].Group == $('#DropDown_Group').val()) {
                        newRows += "<tr><td></td><td class='GroupClass'>" + glossary[index].Group + "</td>";
                        newRows += "<td>Term</td><td class='TermClass'>" + glossary[index].Term + "</td>";
                        newRows += "<td>Deffinition</td><td class='DefinitionClass'>" + glossary[index].Definition + "</td>";
                        ;
                    }
                });
                $('#tableID').append(newRows);
            });
   
  }