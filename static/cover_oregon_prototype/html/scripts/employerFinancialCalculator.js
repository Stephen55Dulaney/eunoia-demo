 

function submitDetailsForm()
    {
        event.preventDefault(); //preventDefault stops the page from reloading
        
        
        // The maximum number of full-time equivilent (FTE) employees
        // allowed by the calculator.
        var MaxAllowedFTE = 24;
        // The maximum annual employee wage allowed by the calculator.
        var MaxAllowedAnnualWage = 1000000;
        // The maximum allowed average FTE wages to qualify for the tax credit.
        var MaxAverageWage = 50000;
        // The maximum credit percentage for a non-tax exempt business for
        // 2010 through 2013.
        var OriginalMaxCreditPercent = 35;
        // The maximum credit percentage for a non-tax exempt business for
        // 2014 and beyond.
        var MaxCreditPercent = 50;
        // The maximum credit percentage for a tax exempt or non-profit business for
        // 2010 through 2013.
        var OriginalTaxExemptMaxCretidPercent = 25;
        // The maximum credit percentage for a tax exempt or non-profit business for
        // 2014 and beyond.
        var TaxExemptMaxCreditPercent = 35;
        // The maximum number of FTE allowed to recieve the full credit.
        var MaxFullCreditFTE = 10;
        // The tax credit is reduced for each FTE in excess of 10 up to the
        // maximum.
        var FTEReduction = 15;
        // The tax credit is reduced for employers with average wages in excess of
        // $25,000 (up to the maximum of $50,000).
        var MaxFullCreditAveWage = 25000;
        // Number of full time employees from the form;
        var FTENumber = 0;
        // FTE adjustment set to zero
        var FTEAdjustment = 0;
        // Wage Adjustment set to zero
        var WageAdjustment = 0;
        // andual wage entered in form
        var AnnualWage = 0;
        // Average Annual Wage entered from the form
        var AveAunnualWage =0;
        // Annual Premium Contribution entered from the form
        var AnnualPremiumContrbution = 0;
        // Tax Exempt status entered from the form
        var TaxExempt = 0;
        // Estimated Tax Credit 2013
        var EstimatedTaxCredit2013 = 0;
        // Estimated Tax Credit 2014
        var EstimatedTaxCredit2014 = 0;
        // store the value of excess FTE if greater than MaxFullCreditFTE
        var ExcessFTE = 0;
        // store the value excess wage if greater than MaxFullCreditAveWage
        var ExcessWage = 0;
        // store the maximum tax credit before excess taken out
        var MaxTaxCredit = 0;
        var error = "";
        var valid = 1;
        var values = {};
        var formArray = []
$.each($('#Employer').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    // console.log(field.name + " value " + field.value);
    formArray.push(field.value);
    
});
// Set the variables to the form values submited by the user

FTENumber = formArray[0];
AunnualWage = formArray[1];
AnnualPremiumContrbution = formArray[2];
TaxExempt = formArray[3];


error = CheckPreconditions(FTENumber,AunnualWage,AnnualPremiumContrbution);

if (valid == 1) {
if (FTENumber >= 25) {
    $("#results").html('');
    $("#results").append("<div class='error'>Your number of FTE employees is too high; you must have no more than " + MaxAllowedFTE + "<div>");
    return false;
}
if (AveAunnualWage >= 50000) {
    $("#results").html('');
    $("#results").append("<div class='error'>The average wage of your employees is too high; the average annual wage must be less than "+ MaxAverageWage + " <div>");
    return false;
}
AveAunnualWage = AunnualWage/FTENumber;

if (TaxExempt == "No") {
//Calculate the max Tax Credit by multiplying employer contribution times rage
EstimatedTaxCredit2013 = calculateCredit(AnnualPremiumContrbution, OriginalMaxCreditPercent, FTENumber, AveAunnualWage);
//Calculate the max Tax Credit by multiplying employer contribution times rage
EstimatedTaxCredit2014 = calculateCredit(AnnualPremiumContrbution, MaxCreditPercent, FTENumber, AveAunnualWage);
}
else if (TaxExempt == "Yes") {
    //Calculate the max Tax Credit by multiplying employer contribution times rage
EstimatedTaxCredit2013 = calculateCredit(AnnualPremiumContrbution, OriginalTaxExemptMaxCretidPercent, FTENumber, AveAunnualWage);
//Calculate the max Tax Credit by multiplying employer contribution times rage
EstimatedTaxCredit2014 = calculateCredit(AnnualPremiumContrbution, TaxExemptMaxCreditPercent, FTENumber, AveAunnualWage);
}

AveAunnualWage = precise_round(AveAunnualWage,2);
EstimatedTaxCredit2013 = precise_round(EstimatedTaxCredit2013,2);
EstimatedTaxCredit2014 = precise_round(EstimatedTaxCredit2014,2);

    $("#results").html('');
    $("#results").append("<div class='empResults'><div class='indResultsRow'>Results</div><div class='indResultsRow'><div class='indResultsKey'>Employees (FTEs): </div><div class='empResultsValue'>" + FTENumber + "</div></div><div class='indResultsRow'><div class='indResultsKey'>   Average Annual Wage: </div><div class='empResultsValue'>&#36;" + AveAunnualWage + "</div></div><div class='indResultsRow'><div class='indResultsKey'>  Total Annual Premium Contrbution:  </div><div class='empResultsValue'>&#36;" + AnnualPremiumContrbution + "</div></div><div class='indResultsRow'><div class='indResultsKey'>  Tax-Exempt:  </div><div class='empResultsValue'>" + TaxExempt + " </div></div><div class='indResultsRow'><div class='indResultsKey'>  Estimated Tax Credit 2013:  </div><div class='empResultsValue'>&#36;" + EstimatedTaxCredit2013 + " </div></div><div class='indResultsRow'><div class='indResultsKey'>  Estimated Tax Credit 2014:  </div><div class='empResultsValue'>&#36;" + EstimatedTaxCredit2014 + " </div></div>");

}
    if (valid == 0) {
        $("#results").html('');
        $("#results").append(error);
    }
    

function calculateCredit(contribution, creditPercent, fte, average) {
    
    var finalCredit;
    creditPercent = creditPercent / 100;
    MaxTaxCredit = contribution * creditPercent;

    if (fte > 10) {
        ExcessFTE = fte - MaxFullCreditFTE;
        FTEAdjustment = MaxTaxCredit*(ExcessFTE/FTEReduction);
    }

    if (average > MaxFullCreditAveWage) {
        ExcessWage = average - MaxFullCreditAveWage;
        WageAdjustment = MaxTaxCredit*(ExcessWage/MaxFullCreditAveWage);
    }
    finalCredit = MaxTaxCredit - FTEAdjustment - WageAdjustment;
    if (finalCredit < 0) {
        finalCredit = 0;
    }


return finalCredit;
}

function CheckPreconditions(fte,wages,contribution) {
    
    errorhtml = "";
    if (fte == "") {
        errorhtml += "<div class='error'>You must enter the number of FTE employees.</div>";
        valid = 0;
        
    }
    if (wages == "USD ($)") {

        errorhtml += "<div class='error'>You must enter the total annual amount contributed to employee premiums.</div>";
        valid = 0;
    }
    if (contribution == "USD ($)") {

        errorhtml += "<div class='error'>You must enter the total anual employer contribution.</div>";
        valid = 0;
    }
    if (contribution >= wages*fte) {
        errorhtml += "<div class='error'>Contrbution to employee premium may not be greater than total wages.</div>";
        valid = 0;
    }
    
    return valid,errorhtml;
}

function precise_round(num,decimals){
  
return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}

}



