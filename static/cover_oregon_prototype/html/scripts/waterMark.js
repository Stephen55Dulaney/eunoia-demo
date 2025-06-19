/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DOCUMENT INFORMATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~ NAME: waterMark.js
~~~~~~~~~~~~~ VERSION: v0.1
~~~~~~~~~~~~~ UPDATED: 12/21/2012
~~~~~~~~~~~~~ AUTHOR: DELOITTE (MIKE JACKSON)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(window).load(function(){
	$(document).ready(function () {
	    $(":input[data-watermark]").each(function () {
	        $(this).val($(this).attr("data-watermark"));
	        $(this).bind('focus', function () {
	            if ($(this).val() == $(this).attr("data-watermark")) {
	            	$(this).val('');
	            	$(this).css('color','#034564');
	            }
	        });
	        $(this).bind('blur', function () {
	            if ($(this).val() == '') {
	            	$(this).val($(this).attr("data-watermark"));
	            	$(this).css('color','#a8a8a8');
	            } else {
	            	$(this).css('color','#034564');
	            }
	        });
	    });
	});
});