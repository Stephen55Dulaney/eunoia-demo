//--------------------------------------------------------//
// Function to add all the totaling to the proper fields //
//-------------------------------------------------------//
$(function() {
  // Add the change event to the monthly input fields
  $('.ctrlHolder .currentMonth, .ctrlHolder .nextMonth, .ctrlHolder .grossPay, .ctrlHolder .frequency, .columnHolder .currentMonth, .columnHolder .nextMonth').change(function(ev) {
    // Update the tab and overall total fields
    calcTotalFields($(this))
    return;
  })

  // Add the click event to the SAC checkbox
  $('.sameAsCurrent').click(function(ev) {
	// Check to see if the user checked the SAC checkbox
	if ($(this).is(':checked')) {
		var $currentMonth = $(this).siblings('.currentMonth');
		var $nextMonth = $(this).siblings('.nextMonth');
		//alert("currentMonth value 1: "+Number($currentMonth.val()));
		// If the user has entered a value for current month, then copy it to next month
		if (Number($currentMonth.val().replace(/[^0-9\.]+/g,"")) >= 0) {
			$nextMonth.val(Number($currentMonth.val().replace(/[^0-9\.]+/g,"")));
			calcTotalFields($nextMonth);
		}
	}
  })
});

/* 
 This function checks the imput field class to determine which totals need to be updated (current/next month) 
 and then updates the total fields on the tab and the overall total
*/
 function calcTotalFields(el, action) {
	// Check to see if the input field is the current month
	if (el.hasClass('currentMonth') || action == 'del') {
		var tabCurrentMonthIncome = 0;
		var totalCurrentMonthIncome = 0;

		// Total all the current month inputs on the current tab
		el.parents('.tabContent').find('.ctrlHolder .currentMonth').each(function() {
			tabCurrentMonthIncome += Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		// Total all the current month inputs on all the tabs
		$('.ctrlHolder').find('.currentMonth').each(function() {
			totalCurrentMonthIncome += Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		// Update the current month total fields for the current tab and the overall total
		var $tabCurrentMonthIncome = $(el).parents('.tabContent').find('input.tabCurrentMonthIncome');
		$tabCurrentMonthIncome.val('$' + $.number(tabCurrentMonthIncome, 0));
		var $totalCurrentMonthIncome = $('.incomeTotalsHeader .totalCurrentMonthIncome');
		$totalCurrentMonthIncome.val('$' + $.number(totalCurrentMonthIncome, 0));
		
		// Check to see if the SAC checkbox is checked.  If so, then update the next month field and next month totals
		if (el.siblings('.sameAsCurrent').is(':checked')) {
			el.siblings('.nextMonth').val(Number(el.val().replace(/[^0-9\.]+/g,"")));
			calcTotalFields(el.siblings('.nextMonth'));
		}
	}
	if (el.hasClass('nextMonth') || action == 'del') {
		var tabNextMonthIncome = 0;
		var totalNextMonthIncome = 0;

		// Total all the next month inputs on the current tab
		el.parents('.tabContent').find('.ctrlHolder .nextMonth').each(function() {
			tabNextMonthIncome += Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		// Total all the next month inputs on all the tabs
		$('.ctrlHolder').find('.nextMonth').each(function() {
			totalNextMonthIncome +=  Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		// Update the next month total fields for the current tab and the overall total
		var $tabNextMonthIncome = $(el).parents('.tabContent').find('input.tabNextMonthIncome');
		$tabNextMonthIncome.val('$' + $.number(tabNextMonthIncome, 0));
		var $totalNextMonthIncome = $('.incomeTotalsHeader .totalNextMonthIncome');
		$totalNextMonthIncome.val('$' + $.number(totalNextMonthIncome, 0));
	}
	if (el.hasClass('grossPay') || el.hasClass('frequency')) {
		var grossPay = 0;
		var frequency = 0;
		var calTotal = 0;
		var calAnnualTotal = 0;

		el.parents('.calContent').find('.ctrlHolder .grossPay').each(function() {
			grossPay += Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		el.parents('.calContent').find('.ctrlHolder .frequency').each(function() {
			frequency += Number($(this).val().replace(/[^0-9\.]+/g,""));
		});

		if (frequency == "1" && grossPay > 0 ) {
			calTotal = (grossPay)*4;
		} else if (frequency == "2" && grossPay > 0) {
			calTotal = (grossPay)*2;
		} else if (frequency == "3" && grossPay > 0) {
			calTotal = (grossPay)*2;
		}
		calAnnualTotal = (calTotal)*12;
		if (el.hasClass('Monthly')) {
			var $totalCalculatorIncome = $(el).parents('.calContent').find('input.calculatorTotal');
			$totalCalculatorIncome.val('$' + $.number(calTotal, 0));
			var $totalCalculatorAnnualIncome = $(el).parents('.calContent').find('input.calculatorAnnualTotal');
			$totalCalculatorAnnualIncome.val('$' + $.number(calAnnualTotal, 0));
		} else {
			var $totalCalculatorIncome = $(el).parents('.calContent').find('input.calculatorTotal');
			$totalCalculatorIncome.val('$' + $.number(calAnnualTotal, 0));
			var $totalCalculatorAnnualIncome = $(el).parents('.calContent').find('input.calculatorAnnualTotal');
			$totalCalculatorAnnualIncome.val('$' + $.number(calAnnualTotal, 0));
		}

	}
}

function showHelp(currentRow) {
	var $currentMonth = $(currentRow).parent().next('.monthlyTotals').find('.currentMonth');
	var $widget = $('.widget');

	//clear out values and events
	$widget.find('input[type=text], select').val('');
    $widget.find('.applyValue2Current').unbind('click');
    $widget.find('.applyValue2Current').click(function(ev) {
	  var $calculatorAnnualTotal = $(this).parent().siblings('.ctrlHolder').find('.calculatorTotal');
	  // If the user has entered a generated a value from the calculator, then copy it to current month
	  $currentMonth.val($calculatorAnnualTotal.val());
	  calcTotalFields($currentMonth);
	
	  $widget.hide();
    })	

    $widget.find('#calWidgetClose1').click(function(ev) {
	  $widget.hide();
    })	

	$widget.show();
}
function closeWindow(Num) {
	var ele1 = document.getElementById(Num);
	ele1.style.display = "none";
}