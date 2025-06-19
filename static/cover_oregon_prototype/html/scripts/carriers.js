/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  carriers.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 8/12/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ============================================================================== */
//=====Displays the Carrier based on the id in the url===//

function carrierId() {
var url =window.location.search.substring(1);

 var meetingId = url.split("=")[1];
 var categoryType = url.split("=")[0];

 if (categoryType == "denid") {
    $('#selectCarrier').val('Dental');
    $('.carrierLogosContainer').hide();
    $('#Dental').show();
    }
    else if (categoryType == "ccoid") {
        
    $('#selectCarrier').val('CCO');
    $('.carrierLogosContainer').hide();
    $('#CCO').show();
    }

// alert("meeting Id " + meetingId);
  // $('#AtrioContent').show(); $('#atrio').addClass('active');
  $('#'+ meetingId).on('click', function() {
      // alert($(this).text());
    });
    $('#'+ meetingId).trigger('click');
    $('.'+ meetingId).trigger('click');
}

//==== Displays Carrier Select Groups on Static Pages ========================= //

$(document).ready(function(){    
    $('#selectCarrier').change(function(){
        $('.carrierLogosContainer').hide();
        $('#' + $(this).val()).show();

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active');
    });


/*======== Medical Carriers ====================================================================== */

    //==== Displays Atrio Content ======================================= //
    $('#atrio').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active');      

        //Show selected carrier content & add 'active' class to selected logo
        $('#AtrioContent').show(); $('#atrio').addClass('active');        
        
    });



    //==== Displays BridgeSpan Content ======================================= //
    $('#bridgespan').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active');      

        //Show selected carrier content & add 'active' class to selected logo
        $('#BridgespanContent').show(); $('#bridgespan').addClass('active');        
        
    });



    //==== Displays HealthNet Content ======================================= //    
    $('#healthnet').on('click', function(event) {

        //Close any opened carrier pages & Remove active class on other carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#HealthNetContent').show(); $('#healthnet').addClass('active');
    });



    //==== Displays HealthRepublicContent Content ======================================= //    
    $('#healthrepublic').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#HealthRepublicContent').show(); $('#healthrepublic').addClass('active');
    });


    
    //==== Displays kaiserpermanente Content ======================================= //    
    $('.kaiserpermanente').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#KaiserPermanenteContent').show(); $('.kaiserpermanente').addClass('active');
    });


    
    //==== Displays lifewise Content ======================================= //    
    $('#lifewise').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#LifewiseContent').show(); $('#lifewise').addClass('active');
    });


    
    //==== Displays modahealth Content ======================================= //    
    $('#modahealth').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#ModaHealthContent').show(); $('#modahealth').addClass('active');
    });


    
    //==== Displays oregonhealth Content ======================================= //    
    $('#oregonhealth').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#OregonHealthContent').show(); $('#oregonhealth').addClass('active');
    });


    
    //==== Displays pacificsource Content ======================================= //    
    $('.pacificsource').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#PaicifcsourceContent').show(); $('.pacificsource').addClass('active');
    });


    
    //==== Displays providence Content ======================================= //    
    $('.providence').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#ProvidenceContent').show(); $('.providence').addClass('active');
    });


    
    //==== Displays trillium Content ======================================= //    
    $('.trillium').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#TrilliumContent').show(); $('.trillium').addClass('active');
    });



/*======== Dental Carriers ====================================================================== */
    
    //==== Displays bestlife Content ======================================= //    
    $('#bestlife').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#BestLifeContent').show(); $('#bestlife').addClass('active');
    });



    //==== Displays dentalhealthservices Content ======================================= //    
    $('#dentalhealthservices').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#DentalHealthServicesContent').show(); $('#dentalhealthservices').addClass('active');
    });


    
    //==== Displays dentegra Content ======================================= //    
    $('#dentegra').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#DentegraContent').show(); $('#dentegra').addClass('active');
    });



    //==== Displays guardian Content ======================================= //    
    $('#guardian').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#GuardianContent').show(); $('#guardian').addClass('active');
    });

    
    //==== Displays ods Content ======================================= //    
    $('#ods').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#ODSContent').show(); $('#ods').addClass('active');
    });


    
    //==== Displays williamette dental Content ======================================= //    
    $('#williamette').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#WillametteDentalContent').show(); $('#williamette').addClass('active');
    });



/*======== CCO & DCO Carriers =============================================================== */
    
    //==== Displays allcare Content ======================================= //    
    $('#allcare').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#AllCareContent').show(); $('#allcare').addClass('active');
    });


    
    //==== Displays columbiapacific Content ======================================= //    
    $('#columbiapacific').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#ColumbiaPacificContent').show(); $('#columbiapacific').addClass('active');
    });


    
    //==== Displays familycare Content ======================================= //    
    $('#familycare').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#FamilyCareContent').show(); $('#familycare').addClass('active');
    });


    
    //==== Displays healthshare Content ======================================= //    
    $('#healthshare').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#HealthShareContent').show(); $('#healthshare').addClass('active');
    });
                
    

    //==== Displays intercommunity Content ======================================= //    
    $('#intercommunity').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#InterCommunityContent').show(); $('#intercommunity').addClass('active');
    });

    

    //==== Displays jacksoncare Content ======================================= //    
    $('#jacksoncare').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#JacksonCareConnectContent').show(); $('#jacksoncare').addClass('active');
    });


    

    //==== Displays pacificsourcecommunity Content ======================================= //    
    $('#pacificsourcecommunity').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#PacificSourceCommunityContent').show(); $('#pacificsourcecommunity').addClass('active');
    });


    

    //==== Displays josephinePH Content ======================================= //    
    $('#josephinePH').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#PrimaryHealthJosephineContent').show(); $('#josephinePH').addClass('active');
    });


    
    //==== Displays trilliumcommunity Content ======================================= //    
    $('#trilliumcommunity').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#TrilliumCommunityContent').show(); $('#trilliumcommunity').addClass('active');
    });


    
    //==== Displays umpqua Content ======================================= //    
    $('#umpqua').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#UmpquaContent').show(); $('#umpqua').addClass('active');
    });


    
    //==== Displays westernoregon Content ======================================= //    
    $('#westernoregon').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#WesternOregonContent').show(); $('#westernoregon').addClass('active');
    });


     
    //==== Displays williamette Content ======================================= //    
    $('#williametteCCO').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#WillametteDentalDCOContent').show(); $('#williametteCCO').addClass('active');
    });


    
    //==== Displays wvch Content ======================================= //    
    $('#wvch').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#WVCHContent').show(); $('#wvch').addClass('active');
    });


    
    //==== Displays yamhill Content ======================================= //    
    $('#yamhill').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#YamhillContent').show(); $('#yamhill').addClass('active');
    });


    //==== Displays EOCCO Content ======================================= //    
    $('#eocco').on('click', function(event) {

        //Close any opened carrier pages & remove active class on carrier logos
        $(".carrierPages").css("display","none"); $('li a').removeClass('active'); 

        //Show selected carrier content & add 'active' class to selected logo
        $('#EOCCOContent').show(); $('#eocco').addClass('active');
    });

});




