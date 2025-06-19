// Shopping default list view used to add elements from the list to the compare trey

$(document).ready(function(){

	$("#planA").css("display","none");
            
    $(".planAvisibility").click(function(){
    	if ($('input[name=planAcompare]:checked').val() == "Yes" ) {
        	$("#planA").slideDown("slow"); //Slide Down Effect   
        } else {
            $("#planA").slideUp("slow");	//Slide Up Effect
        }
     }); 

});

$(document).ready(function(){

	$("#planB").css("display","none");
            
    $(".planBvisibility").click(function(){
    	if ($('input[name=planBcompare]:checked').val() == "Yes" ) {
        	$("#planB").slideDown("slow"); //Slide Down Effect   
        } else {
            $("#planB").slideUp("slow");	//Slide Up Effect
        }
     }); 

});

$(document).ready(function(){

	$("#planD").css("display","none");
            
    $(".planDvisibility").click(function(){
    	if ($('input[name=planDcompare]:checked').val() == "Yes" ) {
        	$("#planD").slideDown("slow"); //Slide Down Effect   
        } else {
            $("#planD").slideUp("slow");	//Slide Up Effect
        }
     }); 

});

$(document).ready(function(){

	$("#planE").css("display","none");
            
    $(".planEvisibility").click(function(){
    	if ($('input[name=planEcompare]:checked').val() == "Yes" ) {
        	$("#planE").slideDown("slow"); //Slide Down Effect   
        } else {
            $("#planE").slideUp("slow");	//Slide Up Effect
        }
     }); 

});

// these functions use the small x or close icon inthe compare planN graphic to remove the plan from the compare trey. 
// these four functions could be combined if I could figure out how to pass attributions in the function call
function AhideClick() {
	$('input[name=planAcompare]:checked').attr('checked',false);
	$("#planA").slideUp("slow");
}
	
function BhideClick() {
	$('input[name=planBcompare]:checked').attr('checked',false);
	$("#planB").slideUp("slow");
}

function DhideClick() {
	$('input[name=planDcompare]:checked').attr('checked',false);
	$("#planD").slideUp("slow");
}

function EhideClick() {
	$('input[name=planEcompare]:checked').attr('checked',false);
	$("#planE").slideUp("slow");
}	

/* Select Plan A Modal */
$(function () {    
    $('#planAselectPlanModal').dialog({
        autoOpen: false,
        width: 715,
        modal: true,
        resizable: false
    });

    // Link
    $('#planAselectPlanModalLink').click(function () {
        $('#planAselectPlanModal').dialog('open');
        return false;
    });
});
/* Select Plan B Modal */
$(function () {    
    $('#planBselectPlanModal').dialog({
        autoOpen: false,
        width: 715,
        modal: true,
        resizable: false
    });

    // Link
    $('#planBselectPlanModalLink').click(function () {
        $('#planBselectPlanModal').dialog('open');
        return false;
    });
});
/* Select Plan D Modal */
$(function () {    
    $('#planDselectPlanModal').dialog({
        autoOpen: false,
        width: 715,
        modal: true,
        resizable: false
    });

    // Link
    $('#planDselectPlanModalLink').click(function () {
        $('#planDselectPlanModal').dialog('open');
        return false;
    });
});
/* Select Plan E Modal */
$(function () {    
    $('#planEselectPlanModal').dialog({
        autoOpen: false,
        width: 715,
        modal: true,
        resizable: false
    });

    // Link
    $('#planEselectPlanModalLink').click(function () {
        $('#planEselectPlanModal').dialog('open');
        return false;
    });
});