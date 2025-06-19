/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  validateForms.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 8/27/2013
 * ===== AUTHOR: Deloitte Consulting LLP (Nina Mokoosio)
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ============================================================================== */

$(document).ready(function(){ 
        
	// validate Contact Us Form on keyup and submit
	$("#contactusForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			},
			phone: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",			
			email: "Please enter a valid email address",
			phone: "Please enter a valid phone number"
		}
	});


	// validate Share Your Story Form on keyup and submit
	$("#sharestoryForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			},
			phone: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",			
			email: "Please enter a valid email address",
			phone: "Please enter a valid phone number"
		}
	});


	// validate Future Meeting Details Form on keyup and submit
	$("#meetingsForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",			
			email: "Please enter a valid email address"
		}
	});

	
	// validate Employer tax exempt form Form on keyup and submit
	$("#Employer").validate({
		rules: {
			employeesCount: "required",
			avgAnnualWages: "required",
			employerContribution: "required"
		},
		messages: {
			firstname: "Please enter the number of full time employees",
			lastname: "Please enter anual wages for all employees",			
			email: "Please enter annual employer premium contribution"
		}
	});



});