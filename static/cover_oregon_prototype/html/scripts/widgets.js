/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  widgets.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 3/12/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ========================================================================== */

/* Table of Contents
    1. Modal Windows
    2  Accordions
    3. Tooltips
    4. Datepicker

*/

/* =============================================================================
   Modal Windows
   ========================================================================== */


/* Basic Modal */
$(function () {    
    $('#basicModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#basicModalLink').click(function () {
        $('#basicModal').dialog('open');
        return false;
    });

    // Close Button
    $('#close').click(function () {
        $('#basicModal').dialog('close');
        return false;
    });
});



/* Basic Modal 2*/
$(function () {    
    $('#basicModal2').dialog({
        autoOpen: false,
        width: 500,
        modal: true,
        resizable: false
    });

    // Link
    $('#basicModal2Link').click(function () {
        $('#basicModal2').dialog('open');
        return false;
    });

    // Close Button
    $('#close2').click(function () {
        $('#basicModal2').dialog('close');
        return false;
    });
});

/* deleteModal */
$(function () {    
    $('#deleteModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#deleteModalLink').click(function () {
        $('#deleteModal').dialog('open');
        return false;
    });
});

/* deleteModal2*/
$(function () {    
    $('#deleteModal2').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#deleteModal2Link').click(function () {
        $('#deleteModal2').dialog('open');
        return false;
    });
});

/* Edit Company */
$(function () {    
    $('#editCompany').dialog({
        autoOpen: false,
        width: 800,
        modal: true,
        resizable: false
    });

    // Link
    $('#editCompanyLink').click(function () {
        $('#editCompany').dialog('open');
        $('input').blur();
        return false;
    });
});

/* Edit Contact Information */
$(function () {    
    $('#editContactInfo').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#editContactInfoLink').click(function () {
        $('#editContactInfo').dialog('open');
        $('input').blur();
        return false;
    });
});

/*  View PersoalInfoMember Jason Link */
$(function () {    
    $('#viewPersoalInfoMemberJason').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#viewPersoalInfoMemberJasonLink').click(function () {
        $('#viewPersoalInfoMemberJason').dialog('open');
        $('input').blur();
        return false;
    });
});

/*  View Income InfoMember Jason Link */
$(function () {    
    $('#viewIncomeInfoMemberJason').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#viewIncomeInfoMemberJasonLink').click(function () {
        $('#viewIncomeInfoMemberJason').dialog('open');
        $('input').blur();
        return false;
    });
});

/*  Submit Appeal Jason Link */
$(function () {    
    $('#submitAppealJason').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#submitAppealJasonLink').click(function () {
        $('#submitAppealJason').dialog('open');
        $('input').blur();
        return false;
    });
});

/* start Penelope view modals */
/*  View PersoalInfoMember Penelope Link */
$(function () {    
    $('#viewPersoalInfoMemberPenelope').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#viewPersoalInfoMemberPenelopeLink').click(function () {
        $('#viewPersoalInfoMemberPenelope').dialog('open');
        $('input').blur();
        return false;
    });
});

/*  View Income InfoMember Jason Link */
$(function () {    
    $('#viewIncomeInfoMemberPenelope').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#viewIncomeInfoMemberPenelopeLink').click(function () {
        $('#viewIncomeInfoMemberPenelope').dialog('open');
        $('input').blur();
        return false;
    });
});

/*  Submit Appeal Jason Link */
$(function () {    
    $('#submitAppealPenelope').dialog({
        autoOpen: false,
        width: 720,
        modal: true,
        resizable: false
    });

    // Link
    $('#submitAppealPenelopeLink').click(function () {
        $('#submitAppealPenelope').dialog('open');
        $('input').blur();
        return false;
    });
});

/* Create Account */
$(function () {    
    $('#createAccount').dialog({
        autoOpen: false,
        width: 538,
        modal: true,
        resizable: false
    });

    // Link
    $('#createAccountLink').click(function () {
        $('#createAccount').dialog('open');
        $("a").blur();
        return false;
    });

    $('#createAccountLink2').click(function () {
        $('#createAccount').dialog('open');
        $("a").blur();
        return false;
    });

    $('#createAccountLink3').click(function () {
        $('#createAccount').dialog('open');
        $("a").blur();
        return false;
    });

    $('#createAccountLink4').click(function () {
        $('#createAccount').dialog('open');
        $("a").blur();
        return false;
    }); 

    $('#createAccountLink5').click(function () {
        $('#createAccount').dialog('open');
        $("a").blur();
        return false;
    });        
});



/* Modal Message */
$(function () {    
    $('#modalMessage').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            }
        }
    });

    // Link
    $('#modalMessageLink').click(function () {
        $('#modalMessage').dialog('open');
        return false;
    });
});


/* Modal Form */
$(function () {    
    $('#modalForm').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false,
        buttons: {
            "Continue": function () {
                $(this).dialog("close");
            }
        }
    });

    // Link
    $('#modalFormLink').click(function () {
        $('#modalForm').dialog('open');
        return false;
    });
});

/* Wide Modal Form */
$(function () {    
    $('#widemodalForm').dialog({
        autoOpen: false,
        width: 500,
        modal: true,
        resizable: false,
        buttons: {
            "Save Changes": function () {
                $(this).dialog("close");
            }
        }
    });

    // Link
    $('#widemodalFormLink').click(function () {
        $('#widemodalForm').dialog('open');
        return false;
    });
});


/* Select Plan Modal */
$(function () {    
    $('#selectPlanModal').dialog({
        autoOpen: false,
        width: 715,
        modal: true,
        resizable: false,
        buttons: {
            "Select Reference Plan": function () {
                $(this).dialog("close");
            }
        }
    });

    // Link
    $('#selectPlanModalLink').click(function () {
        $('#selectPlanModal').dialog('open');
        return false;
    });
});

/* Show Good News area*/

$(function () {    
    $('#goodNewsModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#goodNewsModalLink').click(function () {
        $('#goodNewsModal').dialog('open');
        return false;
    });
});


/* Remove Child Modal */
$(function () {    
    $('#removeChild').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('.removeChildLink').click(function () {
        $('#removeChild').dialog('open');
        return false;
    });
});


/* Remove Employee Modal */
$(function () {    
    $('#removeEmployee').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('.removeEmployeeLink').click(function () {
        $('#removeEmployee').dialog('open');
        return false;
    });
});


/* Section 125 Edit Modal */
$(function () {    
    $('#sectionOneTwoFive').dialog({
        autoOpen: false,
        width: 600,
        modal: true,
        resizable: false
    });

    // Link
    $('#sectionOneTwoFiveLink').click(function () {
        $('#sectionOneTwoFive').dialog('open');
        return false;
    });
});


/* Tax Credit Eligibility Modal */
$(function () {    
    $('#taxCreditEligibility').dialog({
        autoOpen: false,
        width: 600,
        modal: true,
        resizable: false
    });

    // Link
    $('#taxCreditEligibilityLink').click(function () {
        $('#taxCreditEligibility').dialog('open');
        return false;
    });
});


/* Add Bank Account Modal: Step 1 */
$(function () {    
    $('#addBankActModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#addBankActModalLink').click(function () {
        $('#addBankActModal').dialog('open');
        return false;
    });
});

/* Add Bank Account Modal: Step 2 */
$(function () {    
    $('#addBankActModalStep2').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#addBankActModalStep2Link').click(function () {
        $('#addBankActModalStep2').dialog('open');

        //Close previously opened modals
        $('#addBankActModal').dialog('close');
        return false;
    });
});

/* Add Bank Account Modal: Step 3 */
$(function () {    
    $('#addBankActModalStep3').dialog({
        autoOpen: false,
        width: 520,
        modal: true,
        resizable: false
    });

    // Link
    $('#addBankActModalStep3Link').click(function () {
        $('#addBankActModalStep3').dialog('open');

        //Close previously opened modals
        $('#addBankActModal').dialog('close');
        $('#addBankActModalStep2').dialog('close');
        return false;
    });
});

/* Add Bank Account Modal: Final Step */
$(function () {    
    $('#addBankActModalFinalStep').dialog({
        autoOpen: false,
        width: 500,
        modal: true,
        resizable: false
    });

    // Link
    $('#addBankActModalFinalStepLink').click(function () {
        $('#addBankActModalFinalStep').dialog('open');

        //Close previously opened modals
        $('#addBankActModal').dialog('close');
        $('#addBankActModalStep2').dialog('close');
        $('#addBankActModalStep3').dialog('close');
        return false;
    });
});


/* Insurance Affordability Modal */
$(function () {    
    $('#eligibilityModal').dialog({
        autoOpen: false,
        width: 520,
        modal: true,
        resizable: false
    });

    // Link
    $('#eligibilityModalLink').click(function () {
        $('#eligibilityModal').dialog('open');
        return false;
    });
});



/* Insurance Affordability Modal 2 */
$(function () {    
    $('#eligibilityModal2').dialog({
        autoOpen: false,
        width: 520,
        modal: true,
        resizable: false
    });

    // Link
    $('#eligibilityModal2Link').click(function () {
        $('#eligibilityModal2').dialog('open');

        //Close previously opened modals
        $('#eligibilityModal').dialog('close');
        return false;
    });
});


/* Help Modal */
$(function () {    
    $('#helpModal').dialog({
        autoOpen: false,
        width: 250,
        height: "auto",
        position: [1022,136],
        modal: false,
        resizable: false,
        draggable: true,
        create: function (event) { $(event.target).parent().css('position', 'relative');}
    });

    //Add .helpDrawer class to HelpModal in order to style it differently
    $('div[aria-describedby=helpModal]').addClass("helpDrawer");

    // Link
    $('#helpModalLink').click(function () {
        $('#helpModal').dialog('open');
        return false;
    });
});

/* Help Modal for Dashboard Pages */
$(function () {    
    $('#helpDashboardModal').dialog({
        autoOpen: false,
        width: 250,
        height: "auto",
        position: [905,188],
        modal: false,
        resizable: false,
        draggable: true,
        create: function (event) { $(event.target).parent().css('position', 'relative');}
    });

    //Add .helpDrawer class to HelpModal in order to style it differently
    $('div[aria-describedby=helpDashboardModal]').addClass("helpDrawer");

    // Link
    $('#helpDashboardModalLink').click(function () {

        $this = $(this);

        // remove all active class on the li 
        $this.parents('ul').find(".active").removeClass("active");


        $this = $("a#helpDashboardModalLink");

        // make help menu item active   
        $this.parents('li').addClass("active");

        $('#helpDashboardModal').dialog('open');
        return false;
    });
});


/* Shopping Cart Modal */
$(function () {    
    $('#shoppingCartModal').dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
          },
        hide: {
           effect: "fade",
           duration: 500
        },
        width: 575,
        height: "auto",
        position: [681,178],
        modal: false,
        resizable: false,
        draggable: true,
        create: function (event) { $(event.target).parent().css('position', 'relative');}
    });

    //Add .shoppingCartContainer class to Shopping Cart Modal in order to style it differently
    $('div[aria-describedby=shoppingCartModal]').addClass("shoppingCartContainer");

    // Link
    $('#shoppingCartModalLink').click(function () {
        $('#shoppingCartModal').dialog('open');
        return false;
    });
});


/* Tax Credit Modal */
$(function () {    
    $('#taxCreditModal').dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
          },
        hide: {
           effect: "fade",
           duration: 500
        },
        width: 525,
        height: "auto",
        position: [525,178],
        modal: false,
        resizable: false,
        draggable: true,
        create: function (event) { $(event.target).parent().css('position', 'relative');}
    });

    //Add .shoppingCartContainer class to Shopping Cart Modal in order to style it differently
    $('div[aria-describedby=taxCreditModal]').addClass("shoppingCartContainer");

    // Link
    $('#taxCreditModalLink').click(function () {
        $('#taxCreditModal').dialog('open');
        return false;
    });
});



/* Tribal Entity Name Search Modal: Step 1 */
$(function () {    
    $('#searchTribeModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#searchTribeLink').click(function () {
        $('#searchTribeModal').dialog('open');
        return false;
    });
});

/* Tribal Entity Name Search Modal: Step 2 */
$(function () {    
    $('#searchTribeModalStep2').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#searchTribeModalStep2Link').click(function () {
        $('#searchTribeModalStep2').dialog('open');

        //Close previously opened modals
        $('#searchTribeModal').dialog('close');
        return false;
    });
});

/* Add Administrator Modal: */
$(function () {    
    $('#addAdministratorModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#addAdministratorModalLink').click(function () {
        $('#addAdministratorModal').dialog('open');

        //Close previously opened modals
        $('#addcarriercontactModal').dialog('close');
        return false;
    });
});

/* Edit Administrator Modal: */
$(function () {    
    $('#editAdminModal').dialog({
        autoOpen: false,
        width: 525,
        modal: true,
        resizable: false
    });

    // Link
    $('#editAdminModalLink').click(function () {
        $('#editAdminModal').dialog('open');
        return false;
    });
});


/* Edit Life Event Modal: */
$(function () {    
    $('#reportLifeEvent').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#reportLifeEventLink').click(function () {
        $('#reportLifeEvent').dialog('open');

        //Close previously opened modals
    

        return false;
    });
});


/* Edit Life Event Modal 2: */
$(function () {    
    $('#reportLifeEvent2').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#reportLifeEventLink2').click(function () {
        $('#reportLifeEvent2').dialog('open');

        //Close previously opened modals
    

        return false;
    });
});

/* Edit Administrator Modal: */
$(function () {    
    $('#editAdminModal2').dialog({
        autoOpen: false,
        width: 525,
        modal: true,
        resizable: false
    });

    // Link
    $('#editAdminModalLink2').click(function () {
        $('#editAdminModal2').dialog('open');
   

        return false;
    });
});

/* Edit Administrator Modal: */
$(function () {    
    $('#editAdminModal3').dialog({
        autoOpen: false,
        width: 525,
        modal: true,
        resizable: false
    });

    // Link
    $('#editAdminModalLink3').click(function () {
        $('#editAdminModal3').dialog('open');
   

        return false;
    });
});

/* Add Carrier Contact Modal: */
$(function () {    
    $('#addCarrierContactModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#addCarrierContactModalLink').click(function () {
        $('#addCarrierContactModal').dialog('open');

        //Close previously opened modals
        $('#addAdministratorModal').dialog('close');
        return false;
    });
});

/* Add edit CPA ORG Information Modal: */
$(function () {    
    $('#editOrganizationalInformationModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#editOrganizationalInformationModalLink').click(function () {
        $('#editOrganizationalInformationModal').dialog('open');
        $('input').blur();
        return false;

    });
});

/* Add edit CPA ORG Contact Information Modal: */
$(function () {    
    $('#editContactInformationModal').dialog({
        autoOpen: false,
        width: 490,
        modal: true,
        resizable: false
    });

    // Link
    $('#editContactInformationModalLink').click(function () {
        $('#editContactInformationModal').dialog('open');
        $('input').blur();
        return false;

    });
});


/* Add CPA and CPA ORG Authorized User Modal: */
$(function () {    
    $('#addAuthorizedUserModal').dialog({
        autoOpen: false,
        width: 550,
        modal: true,
        resizable: false
    });

    // Link
    $('#addAuthorizedUserModalLink').click(function () {
        $('#addAuthorizedUserModal').dialog('open');
        $('input').blur();
        return false;

    });

    //Cancel Add Authorized User Process
    $('#cancel1').click(function () {
        $('#addAuthorizedUserModal').dialog('close');
    });
});


/* Results Modal */
$(function () {    
    $('#addAuthorizedUserResultsModal').dialog({
        autoOpen: false,
        width: 550,
        modal: true,
        resizable: false
    });

    // Link
    $('#addAuthorizedUserResultsModalLink').click(function () {
        $('#addAuthorizedUserResultsModal').dialog('open');
        $('input').blur();
        $('input').css('color','#00334E');

        //Close previously opened modals
        $('#addAuthorizedUserModal').dialog('close');
        return false;
    });

    //Cancel Add Authorized User Process
    $('#cancel2').click(function () {
        $('#addAuthorizedUserResultsModal').dialog('close');
    });
});

/* Change Account Modal */
$(function () {    
    $('#changeAccountModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#changeAccountLink').click(function () {
        $('#changeAccountModal').dialog('open');
        return false;
    });
});


/* Tribal Upload Member Information: Modal 1 */
$(function () {    
    $('#tribalMemberInfoModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#tribalMemberInfoModalLink').click(function () {
        $('#tribalMemberInfoModal').dialog('open');
        return false;
    });
});

/* Tribal Upload Member Information: Modal 1 */
$(function () {    
    $('#tribalMemberInfoModal2').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#tribalMemberInfoModal2Link').click(function () {
        $('#tribalMemberInfoModal2').dialog('open');
        
        //Close previously opened modals
        $('#tribalMemberInfoModal').dialog('close');
        return false;
    });
});



/* View Agent Details Modal */
$(function () {    
    $('#viewAgentDetailsModal').dialog({
        autoOpen: false,
        width: 615,
        modal: true,
        resizable: false
    });

    // Link
    $('#viewAgentDetailsModalLink').click(function () {
        $('#viewAgentDetailsModal').dialog('open');
        return false;
    });

    //Close Link
    $('#Close').click(function () {
        $('#viewAgentDetailsModal').dialog('close');
        return false;
    });

});


/* Select Agent Confrimation Modal */
$(function () {    
    $('#selectAgentConfrimationModal').dialog({
        autoOpen: false,
        width: 680,
        modal: true,
        resizable: false
    });

    // Link
    $('#selectAgentConfrimationModalLink').click(function () {
        $('#selectAgentConfrimationModal').dialog('open');

         //Close previously opened modals
        $('#viewAgentDetailsModal').dialog('close');

        return false;
    });

    //Cancel Link
    $('#Cancel').click(function () {
        $('#selectAgentConfrimationModal').dialog('close');
        return false;
    });

    //OK Link
    $('#OK').click(function () {
        $('#selectAgentConfrimationModal').dialog('close');
        return false;
    });

    $('#selectAgentConfrimationModalLink2').click(function () {
        $('#selectAgentConfrimationModal').dialog('open');
        return false;
    });
});


/* Remove Agent Modal */
$(function () {    
    $('#removeAgentModal').dialog({
        autoOpen: false,
        width: 640,
        modal: true,
        resizable: false
    });

    // Link
    $('#removeAgentModalLink').click(function () {
        $('#removeAgentModal').dialog('open');

         //Close previously opened modals
        $('#viewAgentDetailsModal').dialog('close');

        return false;
    });

    //Cancel Link
    $('#No').click(function () {
        $('#removeAgentModal').dialog('close');
        return false;
    });
});



/* Select Provider Modal */
$(function () {    
    $('#selectProviderModal').dialog({
        autoOpen: false,
        width: 640,
        modal: true,
        resizable: false
    });

    // Link
    $('#selectProviderModalLink').click(function () {
        $('#selectProviderModal').dialog('open');
        return false;
    });

    //Cancel Link
    $('#Select').click(function () {
        $('#selectProviderModal').dialog('close');
        return false;
    });
});


/* Account Creation Confirmation Modal */
$(function () {    
    $('#accountCreationModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#accountCreationModalLink').click(function () {
        $('#accountCreationModal').dialog('open');
        return false;
    });

    //Cancel Link
    $('#cancel').click(function () {
        $('#accountCreationModal').dialog('close');
        return false;
    });
});




/* Upload Document Modal */
$(function () {    
    $('#uploadDocModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#uploadDocModalLink').click(function () {
        $('#uploadDocModal').dialog('open');
        return false;
    });

    //Cancel Link
    $('#Cancel').click(function () {
        $('#uploadDocModal').dialog('close');
        return false;
    });
});


/* Upload Document Confirmation Modal */
$(function () {    
    $('#uploadDocConfirmationModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#uploadDocConfirmationModalLink').click(function () {
        $('#uploadDocConfirmationModal').dialog('open');

        //Close previously opened modals
        $('#uploadDocModal').dialog('close');

        return false;
    });

    //OK Link
    $('#OK').click(function () {
        $('#uploadDocConfirmationModal').dialog('close');
        return false;
    });

    // Retry Link
    $('#uploadDocConfirmationModalLink2').click(function () {
        $('#uploadDocModal').dialog('open');

        //Close previously opened modals
        $('#uploadDocConfirmationModal').dialog('close');

        return false;
    });
});



/* Update Employee Census Modal */
$(function () {    
    $('#updateEmployeeCensus').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#updateEmployeeCensusLink').click(function () {
        $('#updateEmployeeCensus').dialog('open');
        return false;
    });

});


/* How shopping groups are determined Modal */
$(function () {    
    $('#howToShopModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#howToShopModalLink').click(function () {
        $('#howToShopModal').dialog('open');
        return false;
    });
});



/* Help for making your shopping group selection Modal */

$(function () {    
    $('#howToShopModal2').dialog({
        autoOpen: false,
        width: 580,
        modal: true,
        resizable: false
    });

    // Link
    $('#howToShopModal2Link').click(function () {
        $('#howToShopModal2').dialog('open');
        return false;
    });
});



/* =============================================================================
   Accordions
   ========================================================================== */

/* Sample Accordion */
$(function () {
    $("#sampleAccordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
    });

    //Disable accordion
    $('.disable').addClass("ui-state-disabled");
});


/* Income Help Accordion 1 */
$(function () {
    $("#incomeHelpAccordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 2 */
$(function () {
    $("#incomeHelpAccordion2").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 3 */
$(function () {
    $("#incomeHelpAccordion3").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 4 */
$(function () {
    $("#incomeHelpAccordion4").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 5 */
$(function () {
    $("#incomeHelpAccordion5").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 6 */
$(function () {
    $("#incomeHelpAccordion6").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 7 */
$(function () {
    $("#incomeHelpAccordion7").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 8 */
$(function () {
    $("#incomeHelpAccordion8").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 9 */
$(function () {
    $("#incomeHelpAccordion9").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 10 */
$(function () {
    $("#incomeHelpAccordion10").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 11 */
$(function () {
    $("#incomeHelpAccordion11").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

/* Income Help Accordion 12 */
$(function () {
    $("#incomeHelpAccordion12").accordion({
        heightStyle: "content",
        collapsible: true
    });
});


/* Content Area Accordion */
$(function () {
    $("#contentAreaAccordion").accordion({
        heightStyle: "fill",
        autoOpen: false,
        collapsible: true
    });
});


/* Hide First Child */
$(function () {    
    $('#hideChildModal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#hideChildModalLink').click(function () {
        $('#hideChildModal').dialog('open');
        return false;
    });
});



/* Hide 2nd Child*/
$(function () {    
    $('#hideChild2Modal').dialog({
        autoOpen: false,
        width: 470,
        modal: true,
        resizable: false
    });

    // Link
    $('#hideChild2ModalLink').click(function () {
        $('#hideChild2Modal').dialog('open');
        return false;
    });
});



/* =============================================================================
   Tooltips
   ========================================================================== */

$(function() {
    $('.tooltip').tooltip();
});


/* =============================================================================
   Datepicker
   ========================================================================== */

$(function() {
    $( ".datepicker" ).datepicker({
      //changeMonth: true, //Show Change Month Selector
      changeYear: true //Show Change Year Selector
    });
});



/* =============================================================================
   Global Header Utilities
   ========================================================================== */

$(document).ready(function(){

    $("#phoneHover").css("display","none");
            
    $('.phoneLink').mouseover(function(e){
        $('#phoneHover').fadeIn('fast');
    });


    $('.phoneLink').mouseout(function(e){
        $('#phoneHover').fadeOut('fast');
    });

});



$(document).ready(function(){

    $("#agentHover").css("display","none");
            
    $('.agentLink').mouseover(function(e){
        $('#agentHover').fadeIn('fast');
    });


    $('.agentLink').mouseout(function(e){
        $('#agentHover').fadeOut('fast');
    });

});