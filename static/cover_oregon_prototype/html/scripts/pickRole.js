/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  pickRole.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 7/17/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/*========================================================================== 
  Pick a Role: Individual 
========================================================================== */
$(function(){

    //Set URL for Next button
    $('#nextbuton').click(function() {
        
        if($('#selFamily').val() =="Selected") {                
            $("#nextbuton").attr("href", "DASH_individual_no_plan.html");       
        }

        if($('#selEmployer').val() =="Selected") {              
            $("#nextbuton").attr("href", "DASH_employer_no_plan.html"); 
        }           

        if($('#selTribal').val() =="Selected") {
           $("#nextbuton").attr("href", "DASH_tribal_noplanselected.html");       
        }      
      
    });
    
    //Hide "SELECTED" messages
    $("#familySelected").css("display","none");

    $('#selFamily').click(function() {
      $(this).val() == "Select" ? selFamily_int() : selFamily_selected();
    });
    
});

function selFamily_int() {

    //Change "Select" button value and add active state to icon
    $('#selFamily').val("Selected");
    $('#families').addClass("active");

    //Hide Individual/Family Select Button & show "SELECTED" message
    $('#selFamily').css("display","none");
    $('#familySelected').css("display","block");

    //Deselect other profile if they are selected
    $('#employers').removeClass('active');
    $('#selEmployer').val("Select");
    $('#tribal').removeClass('active');
    $('#selTribal').val("Select");

    //Hide any "SELECTED" messages if open and show buttons
    $('#selEmployer').css("display","block");
    $('#employerSelected').css("display","none");
    $('#selTribal').css("display","block");
    $('#tribalSelected').css("display","none");
}

function selFamily_selected() {
    $('#selFamily').val("Select");
    $('#families').removeClass("active");
}


/*========================================================================== 
  Pick a Role: Employer 
========================================================================== */

$(function(){

    //Hide "SELECTED" messages
    $("#familySelected").css("display","none");
    $("#employerSelected").css("display","none");
    $("#tribalSelected").css("display","none");

    $('#selEmployer').click(function() {
      $(this).val() == "Select" ? selEmployer_int() : selEmployer_selected();
    });
});    

function selEmployer_int() {

    //Change "Select" button value and add active state to icon
    $('#selEmployer').val("Selected");
    $('#employers').addClass("active");

    //Hide Employer Select Button & show "SELECTED" message
    $('#selEmployer').css("display","none");
    $('#employerSelected').css("display","block");    

    //Deselect other profile if they are selected
    $('#families').removeClass('active');
    $('#selFamily').val("Select");
    $('#tribal').removeClass('active');
    $('#selTribal').val("Select");

    //Hide any "SELECTED" messages if open and show buttons
    $('#selFamily').css("display","block");
    $('#familySelected').css("display","none");
    $('#selTribal').css("display","block");
    $('#tribalSelected').css("display","none");          
}

function selEmployer_selected() {
    $('#selEmployer').val("Select");
    $('#employers').removeClass("active");
}



/*========================================================================== 
  Pick a Role: Tribal 
========================================================================== */

$(function(){

    //Hide "SELECTED" messages
    $("#tribalSelected").css("display","none");

    $('#selTribal').click(function() {
      $(this).val() == "Select" ? selEmployee_int() : selEmployee_selected();
    });
});

function selEmployee_int() {

    //Change "Select" button value and add active state to icon
    $('#selTribal').val("Selected");
    $('#tribal').addClass("active");

    //Hide Employer Select Button & show "SELECTED" message
    $('#selTribal').css("display","none");
    $('#tribalSelected').css("display","block");       

    //Deselect other profile if they are selected
    $('#families').removeClass('active');
    $('#selFamily').val("Select");
    $('#employers').removeClass('active');
    $('#selEmployer').val("Select");

    //Hide any "SELECTED" messages if open and show buttons
    $('#selFamily').css("display","block");
    $('#familySelected').css("display","none");
    $('#selEmployer').css("display","block");
    $('#employerSelected').css("display","none");         
}

function selEmployee_selected() {
    $('#selTribal').val("Select");
    $('#tribal').removeClass("active");
}  

