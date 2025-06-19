/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  selectRole.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 7/10/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/*========================================================================== 
  Login: Choose a profile: Select Individual Profile 
========================================================================== */
$(function(){

    //Set URL for Next button
    $('#nextbuton').click(function() {
        
        /* Individual */
        if($('#selFamily').val() =="Selected") {                
            $("#nextbuton").attr("href", "DASH_individual.html");            
        }

        /* Employer */
        if($('#selEmployer').val() =="Selected") {
            $("#nextbuton").attr("href", "login_MFA.html");


            //TO DO link MFA to dashboard
            // localStorage.setItem('chooseRole',"DASH_employer.html");
            // $('#goToDashboard').click(function() {
            //     $("#goToDashboard").attr('url');
            // });

        }


        /* Employee */
        if($('#selEmployee').val() =="Selected") {                
            $("#nextbuton").attr("href", "DASH_employee.html");       
        }         


        /* Tribal */
        if($('#addTribal').val() =="Selected") {
           $("#nextbuton").attr("href", "login_MFA.html");       
        }


        /* Agent */
        if($('#addAgent').val() =="Selected") {                
            $("#nextbuton").attr("href", "login_MFA.html");       
        } 


        /* Carrier */
        if($('#addCarrier').val() =="Selected") {                
            $("#nextbuton").attr("href", "login_MFA.html");       
        }

        /* Community Partner */
        if($('#addCP').val() =="Selected") {                
            $("#nextbuton").attr("href", "login_MFA.html");       
        }


        /* Community Partner Org */
        if($('#addCPAORG').val() =="Selected") {                
            $("#nextbuton").attr("href", "login_MFA.html");       
        }        
      
    });
    
    //Hide "SELECTED" messages
    $("#familySelected").css("display","none");

    $('#selFamily').click(function() {
      $(this).val() == "Select" ? selFamily_int() : selFamily_selected();
    });
    
});


// function load() {
//     var storedValue = localStorage.getItem('chooseRole');
//     if (storedValue) {
//         document.getElementById('goToDashboard').value = storedValue;

//     }
// }

// function remove() {
//     document.getElementById('goToDashboard').value = '';
//     localStorage.revoveItem('chooseRole');
// }

// function clearLocal() {
//     clear: localStorage.clear();
//     return false;
// }

// function doSubmit(form) {
//     var urls = form['url'];
//     var i = urls && urls.length;
//     while (i--) {
//       if (urls[i].checked) {
//         window.location = urls[i].value;
//       }
//     }
//     return false;
// }



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
    $('#employees').removeClass('active');
    $('#selEmployee').val("Select");

    //Hide any "SELECTED" messages if open and show buttons
    $('#selEmployer').css("display","block");
    $('#employerSelected').css("display","none");
    $('#selEmployee').css("display","block");
    $('#employeeSelected').css("display","none");
}

function selFamily_selected() {
    $('#selFamily').val("Select");
    $('#families').removeClass("active");
}


/*========================================================================== 
  Login: Choose a profile: Select Employer Profile 
========================================================================== */

$(function(){

    //Hide "SELECTED" messages
    $("#familySelected").css("display","none");
    $("#employerSelected").css("display","none");
    $("#employeeSelected").css("display","none");

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
    $('#employees').removeClass('active');
    $('#selEmployee').val("Select");

    //Hide any "SELECTED" messages if open and show buttons
    $('#selFamily').css("display","block");
    $('#familySelected').css("display","none");
    $('#selEmployee').css("display","block");
    $('#employeeSelected').css("display","none");          
}

function selEmployer_selected() {
    $('#selEmployer').val("Select");
    $('#employers').removeClass("active");
}



/*========================================================================== 
  Login: Choose a profile: Select Employee Profile 
========================================================================== */

$(function(){

    //Hide "SELECTED" messages
    $("#employeeSelected").css("display","none");

    $('#selEmployee').click(function() {
      $(this).val() == "Select" ? selEmployee_int() : selEmployee_selected();
    });
});

function selEmployee_int() {

    //Change "Select" button value and add active state to icon
    $('#selEmployee').val("Selected");
    $('#employees').addClass("active");

    //Hide Employer Select Button & show "SELECTED" message
    $('#selEmployee').css("display","none");
    $('#employeeSelected').css("display","block");       

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
    $('#selEmployee').val("Select");
    $('#employees').removeClass("active");
}  


/*========================================================================== 
  Login: Choose a profile section
========================================================================== */

$(function(){
    
    /* Login: Choose a profile: Add Tribal Profile ========================== */

    $("#pendingStatusTribal").css("display","none");
    $('#addTribal').on('click', function(event) {        
         
        //Show ADD pending status
         $('#pendingStatusTribal').toggle('show');

         //Hide ADD button
         $('#addTribal').css("display", "none");
         $('#addTribal').val("Selected");

         //Hide other ADD pending status if open & show ADD button
         $('#pendingStatusAgent').css("display","none");
         $('#addAgent').css("display", "block");
         $('#pendingStatusCarrier').css("display","none");
         $('#addCarrier').css("display", "block");
         $('#pendingStatusCP').css("display","none");
         $('#addCP').css("display", "block");
         $('#pendingStatusCPAORG').css("display","none");
         $('#addCPAORG').css("display", "block");

    });



    /* Login: Choose a profile: Add Agent Profile ============================ */

    $("#pendingStatusAgent").css("display","none");
    $('#addAgent').on('click', function(event) {        
         
        //Show ADD pending status
         $('#pendingStatusAgent').toggle('show');

         //Hide ADD button
         $('#addAgent').css("display", "none");
         $('#addAgent').val("Selected");

        //Hide other ADD pending status if open & show ADD button
         $('#pendingStatusTribal').css("display","none");
         $('#addTribal').css("display", "block");
         $('#pendingStatusCarrier').css("display","none");
         $('#addCarrier').css("display", "block");
         $('#pendingStatusCP').css("display","none");
         $('#addCP').css("display", "block");
         $('#pendingStatusCPAORG').css("display","none");
         $('#addCPAORG').css("display", "block");
    });




    /* Login: Choose a profile: Add Carrier Profile ========================== */

    $("#pendingStatusCarrier").css("display","none");
    $('#addCarrier').on('click', function(event) {        
         
        //Show ADD pending status
         $('#pendingStatusCarrier').toggle('show');

         //Hide ADD button
         $('#addCarrier').css("display", "none");
         $('#addCarrier').val("Selected");

        //Hide other ADD pending status if open & show ADD button
         $('#pendingStatusTribal').css("display","none");
         $('#addTribal').css("display", "block");
         $('#pendingStatusAgent').css("display","none");
         $('#addAgent').css("display", "block");
         $('#pendingStatusCP').css("display","none");
         $('#addCP').css("display", "block");
         $('#pendingStatusCPAORG').css("display","none");
         $('#addCPAORG').css("display", "block");   
    });




    /* Login: Choose a profile: Add CP Profile =============================== */

    $("#pendingStatusCP").css("display","none");
    $('#addCP').on('click', function(event) {        
         
        //Show ADD pending status
         $('#pendingStatusCP').toggle('show');

         //Hide ADD button
         $('#addCP').css("display", "none");
         $('#addCP').val("Selected");

        //Hide other ADD pending status if open & show ADD button
         $('#pendingStatusTribal').css("display","none");
         $('#addTribal').css("display", "block");
         $('#pendingStatusAgent').css("display","none");
         $('#addAgent').css("display", "block"); 
         $('#pendingStatusCarrier').css("display","none");
         $('#addCarrier').css("display", "block");
         $('#pendingStatusCPAORG').css("display","none");
         $('#addCPAORG').css("display", "block");  
    });




    /* Login: Choose a profile: Add CP ORG Profile =========================== */

    $("#pendingStatusCPAORG").css("display","none");
    $('#addCPAORG').on('click', function(event) {        
         
        //Show ADD pending status
         $('#pendingStatusCPAORG').toggle('show');

         //Hide ADD button
         $('#addCPAORG').css("display", "none");
         $('#addCPAORG').val("Selected");

        //Hide other ADD pending status if open & show ADD button
         $('#pendingStatusTribal').css("display","none");
         $('#addTribal').css("display", "block");
         $('#pendingStatusAgent').css("display","none");
         $('#addAgent').css("display", "block");
         $('#pendingStatusCarrier').css("display","none");
         $('#addCarrier').css("display", "block");
         $('#pendingStatusCP').css("display","none");
         $('#addCP').css("display", "block");         
    });

});