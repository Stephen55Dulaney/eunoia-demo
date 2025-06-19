/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  common.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 2/10/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio & Stephen Dulaney)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */



//==== Financial Assistance Question ========================================//

$(document).ready(function(){

    $("#highlight_box").css("display","none");
            
    $(".finQuestion").click(function(){
        if ($('input[name=coverage]:checked').val() == "Not Sure" ) {
            $("#highlight_box").slideDown("fast"); 
            localStorage.setItem('financialAssistance',"full_time_student_question.html");//Slide Down Effect  
           
        } else {
            if ($('input[name=coverage]:checked').val() == "No" ) {
                localStorage.setItem('financialAssistance',"application_summary_overview.html");    
            }

            if ($('input[name=coverage]:checked').val() == "Yes" ) {
                localStorage.setItem('financialAssistance',"full_time_student_question.html");
            }

            $("#highlight_box").slideUp("fast");    //Slide Up Effect
            $("#good_news").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

function load() {
    var storedValue = localStorage.getItem('financialAssistance');
    if (storedValue) {
        document.getElementById('textfield').value = storedValue;

    }
}

function remove() {
    document.getElementById('textfield').value = '';
    localStorage.revoveItem('financialAssistance');
}

function clearLocal() {
    clear: localStorage.clear();
    return false;
}

function showHide() {
    var ele = document.getElementById("good_news");
    if(ele.style.display == "block") {
            ele.style.display = "none";
      }
    else {
        ele.style.display = "block";
    }
}

//$(document).ready(function(){
            
    //$("#good_news").css("display","none");

    // $(".button blue").click(function(){
    //     return showHide();
        // if ($('input[name=howmuch]:').val().length != 0 ) {
        //     //$("#good_news").slideDown("fast"); //Slide Down Effect   
        //     }); 
        // } else {
        //     $("#good_news").slideUp("fast");    //Slide Up Effect
        // }
     // }); 

//});


//==== Displays Full-time Student User List ================================//

$(document).ready(function(){

 $("#household_member_list").css("display","none");
            
    $(".member_list_full_time_student").click(function(){
        if ($('input[name=show_member_list]:checked').val() == "Yes" ) {
            $("#household_member_list").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#household_member_list").slideUp("fast"); //Slide Up Effect
        }
     });

    });


//==== Pregnancy Question ========================================//

$(document).ready(function(){

	$("#whoispregnant").css("display","none");
            
    $(".pregnancy").click(function(){
    	if ($('input[name=pregnant]:checked').val() == "Yes" ) {
        	$("#whoispregnant").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#whoispregnant").slideUp("fast");	//Slide Up Effect
        }
     }); 

});


//==== How many babies and what due date ========================//

$(document).ready(function(){

    $("#penelopehowmanybabies").css("display","none");
            
    $(".babiesTotal").click(function(){
        if ($('input[name=penelopePregnant]:checked').val() == "Yes" ) {
            $("#penelopehowmanybabies").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#penelopehowmanybabies").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

$(document).ready(function(){

    $("#vanessahowmanybabies").css("display","none");
            
    $(".babiesTotal").click(function(){
        if ($('input[name=vanessaPregnant]:checked').val() == "Yes" ) {
            $("#vanessahowmanybabies").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#vanessahowmanybabies").slideUp("fast");    //Slide Up Effect
        }
     }); 

});




//==== Residential Address Question ===================================//

$(document).ready(function(){

 $("#not_at_address").css("display","none");
            
    $(".residency").click(function(){
        if ($('input[name=residential_address]:checked').val() == "No" ) {
            $("#not_at_address").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#not_at_address").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays reason Jason not living at address =====================//

$(document).ready(function(){

 $("#jasonreason").css("display","none");
            
    $(".notathome").click(function(){
        if ($('input[name=jason]:checked').val() == "Yes" ) {
            $("#jasonreason").slideDown("fast"); //Slide Down Effect
        } else {
            $("#jasonreason").slideUp("fast"); //Slide Up Effect
            $("#visitingFamilyAddress_Jason").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Jason's Address Section ======================//

$(document).ready(function(){

 $("#visitingFamilyAddress_Jason").css("display","none");
            
    $(".jasonReasonResponse").click(function(){
        if ($('select[name=jasonReasonResponse]').val() == "visiting" ) {
            $("#visitingFamilyAddress_Jason").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#visitingFamilyAddress_Jason").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays reason Penelope not living at address =====================//

$(document).ready(function(){

 $("#penelopereason").css("display","none");
            
    $(".notathome").click(function(){
        if ($('input[name=penelope]:checked').val() == "Yes" ) {
            $("#penelopereason").slideDown("fast"); //Slide Down Effect
        } else {
            $("#penelopereason").slideUp("fast"); //Slide Up Effect
            $("#visitingFamilyAddress_Penelope").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Penelope's Address Section ======================//

$(document).ready(function(){

 $("#visitingFamilyAddress_Penelope").css("display","none");

    $(".penelopeReasonResponse").click(function(){        
        if ($('select[name=penelopeReasonResponse]').val() == "visiting" ) {
            $("#visitingFamilyAddress_Penelope").slideDown("fast"); //Slide Down Effect
        } else {
            $("#visitingFamilyAddress_Penelope").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays reason Vanessa not living at address =====================//

$(document).ready(function(){

 $("#vanessareason").css("display","none");
            
    $(".notathome").click(function(){
        if ($('input[name=vanessa]:checked').val() == "Yes" ) {
            $("#vanessareason").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#vanessareason").slideUp("fast"); //Slide Up Effect
            $("#visitingFamilyAddress_Vanessa").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Vanessa's Address Section ======================//

$(document).ready(function(){

 $("#visitingFamilyAddress_Vanessa").css("display","none");
            
    $(".vanessaReasonResponse").click(function(){
        if ($('select[name=vanessaReasonResponse]').val() == "visiting" ) {
            $("#visitingFamilyAddress_Vanessa").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#visitingFamilyAddress_Vanessa").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays stay in Oregon question ================================//

$(document).ready(function(){

 $("#whonotstayinoregon").css("display","none");
            
    $(".Stay_in_Oregon").click(function(){
        if ($('input[name=Stay_in_Oregon_Question]:checked').val() == "No" ) {
            $("#whonotstayinoregon").slideDown("fast"); //Slide Down Effect   
        } else {            
            $("#whonotstayinoregon").slideUp("fast"); //Slide Up Effect
        }
     });

    });




//==== Disability Question ===================================//

$(document).ready(function(){

 $("#whohasdisability").css("display","none");
            
    $(".member_list_disable").click(function(){
        if ($('input[name=disability]:checked').val() == "Yes" ) {
            $("#whohasdisability").slideDown("fast"); //Slide Down Effect   
        } else {
            //Disable Checkbox if "No" above is selected
            $('input[name=jasonDisable]:checked').attr('checked',false);
            $('input[name=penelopeDisable]:checked').attr('checked',false);
            $('input[name=vanessaDisable]:checked').attr('checked',false);

            $("#whohasdisability").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays Tobacco Question User List ================================//

$(document).ready(function(){

 $("#tobacco_user_list").css("display","none");
            
    $(".tobacconist").click(function(){
        if ($('input[name=tobacco_usage]:checked').val() == "Yes" ) {
            $("#tobacco_user_list").slideDown("fast"); //Slide Down Effect   
        } else {
            //Disable Checkbox if "No" above is selected
            $('input[name=jasonTobaccoUser]:checked').attr('checked',false);
            $('input[name=penelopeTobaccoUser]:checked').attr('checked',false);
            $('input[name=vanessaTobaccoUser]:checked').attr('checked',false);

            $("#tobacco_user_list").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays Long Term Care User List ================================//

$(document).ready(function(){

 $("#long_term_care_question").css("display","none");
            
    $(".member_list_long_term_care").click(function(){
        if ($('input[name=long_term_care]:checked').val() == "Yes" ) {
            $("#long_term_care_question").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#long_term_care_question").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays Unpaid Medical Bills User List ================================//

$(document).ready(function(){

 $("#unpaidBillsQuestion").css("display","none");
            
    $(".member_list_bills").click(function(){
        if ($('input[name=bills]:checked').val() == "Yes" ) {
            $("#unpaidBillsQuestion").slideDown("fast"); //Slide Down Effect   
        } else {
            //Disable Checkbox if "No" above is selected
            $('input[name=jasonBills]:checked').attr('checked',false);
            $('input[name=penelopeBills]:checked').attr('checked',false);
            $('input[name=vanessaBills]:checked').attr('checked',false);

            $("#unpaidBillsQuestion").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays Blindness Question User List ================================//

$(document).ready(function(){

 $("#blindnessQuestion").css("display","none");
            
    $(".member_list_blind").click(function(){
        if ($('input[name=blindness]:checked').val() == "Yes" ) {
            $("#blindnessQuestion").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#blindnessQuestion").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Displays No Home Address Section ====================================//

$(document).ready(function(){

 $("#fixedAddress").css("display","none");
            
    $(".no_fixed_address").click(function(){
        if ($('input[name=no_fixed_address]:checked').val() == "Yes" ) {
            $("#fixedAddress").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#fixedAddress").slideUp("fast"); //Slide Up Effect
        }
     });

});


//===========================================================================//
//==== Displays Access to Coverage Questions  for Jason =====================//
//===========================================================================//


// Displays Who has coverage? question =======================================//

$(document).ready(function(){

 $("#whoHashealthcoverage").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=yesnoQuestion]:checked').val() == "Yes" ) {
            $("#whoHashealthcoverage").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#whoHashealthcoverage").slideUp("fast"); //Slide Up Effect

            $("#jasonreason").slideUp("fast"); //Hide Jason's 1st Follow up Question
            $("#jasonfollowup2").slideUp("fast"); //Hide Jason's Employer Coverage Question (YES)
            $("#jasonfollowup3").slideUp("fast"); //Hide Jason's Employer Coverage Question (YES) - Part 2
            $("#jasonfollowup3Part2").slideUp("fast"); //Hide Jason's Employer Coverage  (NO) Question
            $("#indJasonPart1").slideUp("fast"); //Hide Jason's Individual Coverage Question
            $("#indJasonPart2").slideUp("fast"); //Hide Jason's Individual Coverage Question - Part 2
            $('input[name=jason]:checked').attr('checked',false); //Disable Checkbox


            $("#penelopereason").slideUp("fast"); //Hide Penelope's 1st Follow up Question
            $("#penelopefollowup2").slideUp("fast"); //Hide Penelope's Individual Coverage Question
            $("#indPenelopePart2").slideUp("fast"); //Hide Penelope's Individual Coverage Question Part 2
            $('input[name=penelope]:checked').attr('checked',false); //Disable Checkbox

            $("#vanessareason").slideUp("fast"); //Hide Vanessa's 1st Follow up Question
            $("#vanessafollowup2").slideUp("fast"); //Hide Vanessa's 2nd Follow up Question
            $('input[name=vanessa]:checked').attr('checked',false); //Disable Checkbox
            $('input[name=employercoverage]:checked').attr('checked',false); //Disable Checkbox
        }
     });

    });


//==== Displays Jason's 1st follow up question =====================================//

$(document).ready(function(){

 $("#jasonreason").css("display","none");
            
    $(".notathome").click(function(){
        if ($('input[name=jason]:checked').val() == "Yes" ) {
            $("#jasonreason").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#jasonreason").slideUp("fast"); //Slide Up Effect

            $("#jasonfollowup2").slideUp("fast"); //Hide Jason's 2nd Follow up Question
            $("#jasonfollowup3").slideUp("fast"); //Hide Jason's 3rd Follow up Question
        }
     });

    });

//==== Displays Jason's 2nd follow up question =====================================//

$(document).ready(function(){

 $("#jasonfollowup2").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=employercoverage]:checked').val() == "Jason" ) {
            $("#jasonfollowup2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#jasonfollowup2").slideUp("fast"); //Slide Up Effect
            
            $("#jasonfollowup2").slideUp("fast"); //Hide Jason's 2nd Follow up Question
            $("#jasonfollowup3").slideUp("fast"); //Hide Jason's 3rd Follow up Question
            $("#jasonfollowup3Part2").slideUp("fast"); //Hide Jason's 3rd Follow up Question - Part 2
        }
     });

    });


//==== Displays Jason's 3rd follow up question Employer Coverage = YES ==============//

$(document).ready(function(){

 $("#jasonfollowup3").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=hasEmployerCoverage]:checked').val() == "Yes" ) {
            $("#jasonfollowup3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#jasonfollowup3").slideUp("fast"); //Slide Up Effect
        }
     });

    });


//==== Displays Jason's 3rd follow up question Employer Coverage = NO ==============//

$(document).ready(function(){

 $("#jasonfollowup3Part2").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=hasEmployerCoverage]:checked').val() == "No" ) {
            $("#jasonfollowup3Part2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#jasonfollowup3Part2").slideUp("fast"); //Slide Up Effect
        }
     });

    });


//==== Displays Jason's 3rd follow up question Medicaid = YES ==============//

//Display State option for Medicaid
$(document).ready(function(){

 $("#medicaid1").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Jason" ) {
            $("#medicaid1").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#medicaid1").slideUp("fast"); //Slide Up Effect
        }
     });

});


//Display 2nd Medicaid Question

$(document).ready(function(){

 $("#jasonfollowup2Medicaid").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Jason" ) {
            $("#jasonfollowup2Medicaid").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#jasonfollowup2Medicaid").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays Jason's 2nd follow up question individualcoverage = YES ==//

//Part 1
$(document).ready(function(){

 $("#indJasonPart1").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=individualcoverage]:checked').val() == "Jason" ) {
            $("#indJasonPart1").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#indJasonPart1").slideUp("fast"); //Slide Up Effect            
            $("#indJasonPart2").slideUp("fast"); //Hide Jason's Individual Coverage Question - Part 2
        }
     });

});


//Part 2
$(document).ready(function(){

 $("#indJasonPart2").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=jEnrolledIndiv]:checked').val() == "Yes" ) {
            $("#indJasonPart2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#indJasonPart2").slideUp("fast"); //Slide Up Effect
        }
     });

});

//===========================================================================//
//==== Displays Access to Coverage Questions  for Penelope ==================//
//===========================================================================//


//==== Displays Penelope's 2nd follow up question individualcoverage = YES ==//

//Part 1
$(document).ready(function(){

 $("#penelopefollowup2").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=individualcoverage]:checked').val() == "Penelope" ) {
            $("#penelopefollowup2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#penelopefollowup2").slideUp("fast"); //Slide Up Effect
            $("#indPenelopePart2").slideUp("fast"); //Hide Penelope's Individual Coverage Question Part 2
        }
     });

});


//Part 2
$(document).ready(function(){

 $("#indPenelopePart2").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=penelopefollowup2]:checked').val() == "Yes" ) {
            $("#indPenelopePart2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#indPenelopePart2").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays Penelope's 3rd follow up question employerCoverage = YES ====//

$(document).ready(function(){

 $("#penelopefollowup3").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=employercoverage]:checked').val() == "Penelope" ) {
            $("#penelopefollowup3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#penelopefollowup3").slideUp("fast"); //Slide Up Effect
        }
     });

    });


//==== Displays Penelope's 3rd follow up question Medicaid = YES ==============//

$(document).ready(function(){

 $("#medicaid2").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Penelope" ) {
            $("#medicaid2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#medicaid2").slideUp("fast"); //Slide Up Effect
        }
     });

    });

//==== Displays Penelope's 3rd follow up part 2 question Medicaid = YES ==============//

$(document).ready(function(){

 $("#mediPenelopefollowup2").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Penelope" ) {
            $("#mediPenelopefollowup2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#mediPenelopefollowup2").slideUp("fast"); //Slide Up Effect
        }
     });

});


//===========================================================================//
//==== Displays Access to Coverage Questions  for Vanessa ===================//
//===========================================================================//


//==== Displays Vanessa 2nd follow up additional question =====================//

$(document).ready(function(){
     
 $("#vanessafollowup2").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Vanessa" ) {
            $("#vanessafollowup2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#vanessafollowup2").slideUp("fast"); //Slide Up Effect
        }
     });

    });

//==== Displays Vanessa's 3rd follow up question Medicaid = YES ==============//

$(document).ready(function(){

 $("#vanessafollowup3").css("display","none");
            
    $(".answer").click(function(){
        if ($('input[name=vanessafollowup2]:checked').val() == "Yes" ) {
            $("#vanessafollowup3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#vanessafollowup3").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays Vanessa's 3rd follow up question - part 2 Medicaid = YES ======//

$(document).ready(function(){

 $("#medicaid3").css("display","none");
            
    $(".healthCoverageType").click(function(){
        if ($('input[name=medicaid]:checked').val() == "Vanessa" ) {
            $("#medicaid3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#medicaid3").slideUp("fast"); //Slide Up Effect
        }
     });

});




//==== Household Member Count ========================================//

$(document).ready(function(){ 

$("#memberOne_test").css("display","none");
    
    $(".addMember").click(function(){
        $("#memberOne").show();

     });

});

//==== Displays the grouping Options  //

$(document).ready(function(){

 $("#groupingOptions").css("display","none");
            
    $(".preDefinedGroup").click(function(){
        if ($('input[name=groupradio]:selected').val() == "predefined" ) {
            $("#groupingOptions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#groupingOptions").slideUp("fast"); //Slide Up Effect
        }
     });

    });



//==== Find Agent ==============================================//

$(document).ready(function(){

    $("#findAgent").css("display","none");
            
    $(".agent").click(function(){
        if ($('input[name=agent]:checked').val() == "Yes" ) {
            $("#findAgent").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#findAgent").slideUp("fast");    //Slide Up Effect
        }
     }); 

});    


//==== Show Find Agent Results =======================================//

$(document).ready(function(){
    $("#findAgentResults").css("display","none");
    $('#hideshow').on('click', function(event) {        
         $('#findAgentResults').toggle('show');
    });
});



//==== Find Provider  =======================================//

$(document).ready(function(){
    $("#findProvider").css("display","none");
    $('#hideshow').on('click', function(event) {        
         $('#findProvider').toggle('show');
    });
});



//==== Show Find Provider Results =======================================//

$(document).ready(function(){
    $("#findProviderResults").css("display","none");
    $('#hideshowresults').on('click', function(event) {        
         $('#findProviderResults').toggle('show');
    });

    //Show Selected Providers
    $('#jake').on('click', function(event) {        
         $('#providerJake').toggle('show');
    });

    $('#jane').on('click', function(event) {        
         $('#providerJane').toggle('show');
    });

    $('#jon').on('click', function(event) {        
         $('#providerJon').toggle('show');
    });

    $('#juliana').on('click', function(event) {        
         $('#providerJuliana').toggle('show');
    });

    $('#angela').on('click', function(event) {        
         $('#providerAngela').toggle('show');
    });

    //Hide Selected Providers
    $('#hideJake').on('click', function(event) {        
        $('#providerJake').toggle('hide');
        $('#jake').prop('checked',false);
    });

    $('#hideJane').on('click', function(event) {        
         $('#providerJane').toggle('hide');
         $('#jane').prop('checked',false);
    });

    $('#hideJon').on('click', function(event) {        
         $('#providerJon').toggle('hide');
         $('#jon').prop('checked',false);
    });

    $('#hideJuliana').on('click', function(event) {        
         $('#providerJuliana').toggle('hide');
         $('#juliana').prop('checked',false);
    });

    $('#hideAngela').on('click', function(event) {        
         $('#providerAngela').toggle('hide');
         $('#angela').prop('checked',false);
    });
});



//==== Section 125 Follow Up=========================================//

$(document).ready(function(){

    $("#sectionFollowUp").css("display","none");
            
    $(".sectionPlan").click(function(){
        if ($('input[name=sectionPlan]:checked').val() == "Yes" ) {
            $("#sectionFollowUp").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#sectionFollowUp").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//==== US Citizenship Question ========================================//

$(document).ready(function(){

    $("#citizenshipStatus").css("display","none");
            
    $(".citizenship").click(function(){
        if ($('input[name=citizenship]:checked').val() == "No" ) {
            $("#citizenshipStatus").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#citizenshipStatus").slideUp("fast");    //Slide Up Effect
        }
     }); 

});



//==== Spouse/Domestic Partner Details==================================//

$(document).ready(function(){

    $("#spouseDetails").css("display","none");
            
    $(".enrollSpouse").click(function(){
        if ($('input[name=enrollSpouse]:checked').val() == "Yes" ) {
            $("#spouseDetails").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#spouseDetails").slideUp("fast");    //Slide Up Effect
        }

     }); 
});

//==== Spouse/Domestic Partner COBRA Question Dates =========================//

$(document).ready(function(){

    $("#spouseCobra").css("display","none");
            
    $(".spouseCobraAnswer").click(function(){
        if ($('input[name=spouseCobraAnswer]:checked').val() == "Yes" ) {
            $("#spouseCobra").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#spouseCobra").slideUp("fast");    //Slide Up Effect
        }

     }); 
});



//==== Employee: Child One Details ==================================//

$(document).ready(function(){

    $("#childOneDetails").css("display","none");
            
    $(".enrollChild").click(function(){
        if ($('input[name=enrollChild]:checked').val() == "Yes" ) {
            $("#childOneDetails").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#childOneDetails").slideUp("fast");    //Slide Up Effect
        }
     });

    $('#hideChild').on('click', function(event) {        
         $('#childOneDetails').toggle('hide');

         //Hide Warning Modal
         $('#hideChildModal').dialog('close');
         return false;
    });

    //Hide Warning Modal if "No" is clicked on the Warning Modal
    $('#keepChild').on('click', function(event) {                     
         $('#hideChildModal').dialog('close');
         return false;
    });
});



//==== Employee: Child Two Details ==================================//

$(document).ready(function(){

    $("#childTwoDetails").css("display","none");

    $('#addChildTwo').on('click', function(event) {        
         
         $('#childTwoDetails').toggle('show');
         
         $("#addChildTwo").css("display","none");

        $('#hide2Child').on('click', function(event) {        
             $('#childTwoDetails').toggle('hide');

             //Hide Warning Modal
             $('#hideChild2Modal').dialog('close');
             return false;
        });

        //Hide Warning Modal if "No" is clicked on the Warning Modal
        $('#keepChild2').on('click', function(event) {                     
             $('#hideChild2Modal').dialog('close');
             return false;
        });

    });

});


//==== Authorized Representative Question ========================================//

$(document).ready(function(){

    $("#repDetails").css("display","none");
            
    $(".representative").click(function(){
        if ($('input[name=representative]:checked').val() == "Yes" ) {
            $("#repDetails").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#repDetails").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//==== New Phone Number - Upload Documentation  ===================================//

$(document).ready(function(){

    $("#newPhoneNumber").css("display","none");
            
    $(".new_Phone").click(function(){
        if ($('input[name=phone]:checked').val() == "new" ) {
            $("#newPhoneNumber").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#newPhoneNumber").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//==== COBRA or State Continuation Follow up Questions ============================//

//Employee
$(document).ready(function(){

    $("#cobraQuestions").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=employeeContinuation_1]:checked').val() == "Yes" ) {
            $("#cobraQuestions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#cobraQuestions").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Employee 2
$(document).ready(function(){

    $("#cobraQuestions_2").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=employeeContinuation_2]:checked').val() == "Yes" ) {
            $("#cobraQuestions_2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#cobraQuestions_2").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Employee 3
$(document).ready(function(){

    $("#cobraQuestions_3").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=employeeContinuation_3]:checked').val() == "Yes" ) {
            $("#cobraQuestions_3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#cobraQuestions_3").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Spouse/Domestic Partner
$(document).ready(function(){

    $("#spouseCobraQuestions").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=spouseContinuation_1]:checked').val() == "Yes" ) {
            $("#spouseCobraQuestions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#spouseCobraQuestions").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Spouse/Domestic Partner 2
$(document).ready(function(){

    $("#spouseCobraQuestions_2").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=spouseContinuation_2]:checked').val() == "Yes" ) {
            $("#spouseCobraQuestions_2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#spouseCobraQuestions_2").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Spouse/Domestic Partner 3
$(document).ready(function(){

    $("#spouseCobraQuestions_3").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=spouseContinuation_3]:checked').val() == "Yes" ) {
            $("#spouseCobraQuestions_3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#spouseCobraQuestions_3").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//Child
$(document).ready(function(){

    $("#childCobraQuestions").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=child1_Continuation_1]:checked').val() == "Yes" ) {
            $("#childCobraQuestions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#childCobraQuestions").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//Child 2
$(document).ready(function(){

    $("#child2CobraQuestions").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=child2_Continuation_1]:checked').val() == "Yes" ) {
            $("#child2CobraQuestions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#child2CobraQuestions").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//Child 3
$(document).ready(function(){

    $("#child3CobraQuestions").css("display","none");
            
    $(".continuation").click(function(){
        if ($('input[name=child1_Continuation_3]:checked').val() == "Yes" ) {
            $("#child3CobraQuestions").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#child3CobraQuestions").slideUp("fast");    //Slide Up Effect
        }
     }); 

});

//==== Tribal Member Info Branchout ========================================//

$(document).ready(function(){

    $("#tribal").css("display","none");
            
    $(".tribalMember").click(function(){
        if ($('input[name=tribalMember_3]:checked').val() == "Yes" ) {
            $("#tribal").slideDown("fast");   // Show Tribal Flow Buttons
            $("#indButtons").slideUp("fast"); // Hide Individual Flow Buttons    
        } else {
            $("#tribal").slideUp("fast");    // Hide Tribal Flow Buttons

        }
     }); 

});


//==== START: Tribal Member Affiliation Questions ========================================//

//Show Tribe Question
$(document).ready(function(){

    $("#tribeNameContainer").css("display","none");
            
    $(".sameTribe").click(function(){
        if ($('input[name=sameTribeMembers]:checked').val() == "Yes" ) {
            $("#tribeNameContainer").slideDown("fast");   // Show tribeNameContainer            
        } else {
            $("#tribeNameContainer").slideUp("fast");    // Hide tribeNameContainer
            $("#searchTribeContainer").slideUp("fast"); // Hide searchTribeContainer
        }
     }); 

});

//Tribal Member Search Modal
$(document).ready(function(){

 $("#searchTribeContainer").css("display","none");
            
    $(".tribeName").click(function(){
        if ($('select[name=tribeName]').val() == "Other" ) {
            $("#searchTribeContainer").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#searchTribeContainer").slideUp("fast"); //Slide Up Effect
        }
     });
});

//==== END: Tribal Member Affiliation Questions ========================================//


//=====Start: TRB Coverage branch for yes / no radio selection =========================//

  function doSubmit(form) {
    var urls = form['url'];

    var fieldValue = $('input[name=url]:checked').val();    
    localStorage.setItem('url', fieldValue);

    var i = urls && urls.length;
    while (i--) {
      if (urls[i].checked) {
        window.location = urls[i].value;
      }
    }
    return false;
  }

//=====end: TRB Coverage branch for yes / no radio selection =========================//


//=====START: SHOW TPSP Eligibility Enrollment based on yes / no radio selection on household_member_info_3 -Vanessa's page =========================//

  function showTPSP () {

    if(localStorage.getItem('url') == 'TRB_entity_affiliation.html' ) {
      window.location.href = "TPSP_eligibility_enrollment.html";
    }
    else {
      window.location.href = "how_to_shop.html";
    }

  }

//=====end: SHOW TPSP Eligibility Enrollment =========================//



//=====Start: SHOP Am I Eligible For Coverage yes/no branch =========================//

  // function doSubmit(form) {
  //   var urls = form['url'];
  //   var i = urls && urls.length;
  //   while (i--) {
  //     if (urls[i].checked) {
  //       window.location = urls[i].value;
  //     }
  //   }
  //   return false;
  // }

//=====end: TRB SHOP Am I Eligible For Coverage yes/no branch =========================//




//==== Show Provider Search Additional Info =======================================//

$(document).ready(function(){
    $("#additionalOptions").css("display","none");
    
    //Show additional options div
    $('#hideshow').on('click', function(event) {        
         $('#additionalOptions').toggle('show');
    });


    //Hide using close button
    $('#hide').on('click', function(event) {        
         $('#additionalOptions').toggle('hide');
    });
});



//==== Displays Full Determination Follow Up Question for Jason ========================//

$(document).ready(function(){

 $("#fullDetermination").css("display","none");
            
    $(".fDetermination").click(function(){
        if ($('input[name=jasonFullDetermination]:checked').val() == "Yes" ) {
            $("#fullDetermination").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#fullDetermination").slideUp("fast"); //Slide Up Effect
        }
     });

});


//==== Displays Full Determination Follow Up Question for Penelope ========================//

$(document).ready(function(){

 $("#fullDetermination2").css("display","none");
            
    $(".fDetermination").click(function(){
        if ($('input[name=penelopeFullDetermination]:checked').val() == "Yes" ) {
            $("#fullDetermination2").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#fullDetermination2").slideUp("fast"); //Slide Up Effect
        }
     });

});



//==== Displays Full Determination Follow Up Question for Jason ========================//

$(document).ready(function(){

 $("#fullDetermination3").css("display","none");
            
    $(".fDetermination").click(function(){
        if ($('input[name=vanessaFullDetermination]:checked').val() == "Yes" ) {
            $("#fullDetermination3").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#fullDetermination3").slideUp("fast"); //Slide Up Effect
        }
     });

});



//==== Displays No Fixed address Follow up Fields ==================================//

$(document).ready(function(){

    $("#fixedAddress").css("display","none");
            
    $("#no_fixed_address").click(function(){
        if ($('input[name=no_fixed_address]:checked').val() == "Yes" ) {
            $("#fixedAddress").slideDown("fast"); //Slide Down Effect   
        } else {
            $("#fixedAddress").slideUp("fast");    //Slide Up Effect
        }
     }); 

});


//==== Displays Carrier Groups on Static Pages ==================================//

$(document).ready(function(){    
    $('#selectCarrier').change(function(){
        $('.carrierLogosContainer.clearfix').hide();
        $('#' + $(this).val()).show();
    });
});

