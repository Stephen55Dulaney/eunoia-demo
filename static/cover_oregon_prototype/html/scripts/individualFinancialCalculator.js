 

    function submitDetailsForm()
    {
        event.preventDefault(); //preventDefault stops the page from reloading
        var age1 = $('#policyHolder1Age');
        var sizeArray = ["zero","one","two","three","four","five","six","seven","eight"];
        var secondLowestSilverRate = 175;
        var maxAge = 64;
        var adult1 = 0;
        var adult2 = 0;
        var adult3 = 0;
        var numberChildren = 0;
        var adult1Rate = 0;
        var adult2Rate = 0;
        var adult3Rate = 0;
        var childrenRate = 0;
        var familyMembersEnrolledMEC = 0;
        var householdSize = 0;
        var income = 0;
        var FPLPercent = 0;
        var applicablePercnet = 0;
        var OutOfPocketBenchmark =0;
        var MaxMonthlyTaxCredit = 0;
        var adjustMonthlyPremium = 0;
        var error = "";
        var valid = 1;
        var values = {};
        var formArray = []
$.each($('#individualFamily').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    // console.log(field.name + " value " + field.value);
    formArray.push(field.value);
    
});
// Set the variables to the form values submited by the user

income = formArray[0];
adult1 = formArray[1];
// check the required fields of income and adult1 required fields
error = CheckPreconditions(income,adult1);
// if preconditions are valid run the calculation
if (valid == 1) {
    //check some of the rules for age inside the household calculation
if (adult1 == "") {
   Adult1Rate = 0;
}
else {
    Adult1Rate = getAgeFactor(adult1,adult1Rate);
    householdSize = householdSize + 1;
}
// If the form is empty set the count to 0; else add 1 to the householdsize count
adult2 = formArray[2];
if (adult2 == "") {
   Adult2Rate = 0;
}
else {
    Adult2Rate = getAgeFactor(adult2,adult2Rate);
    householdSize = householdSize + 1;
}
// If the form is empty set the count to 0; else add 1 to the householdsize count
adult3 = formArray[3];
if (adult3 == "") {
   Adult3Rate = 0;
}
else {
    Adult3Rate = getAgeFactor(adult3,adult3Rate);
    householdSize = householdSize + 1;
}
// If the form is empty set the count to 0; else add 1 to the householdsize count

numberChildren = formArray[4];
  // If the form is empty set the count to 0;
if (numberChildren == '') {
    numberChildren = 0;
   }
//  else if value is greater than three then add max of 3 to the householdsize count
if (numberChildren >= 3) {
    numberChildren = 3;
    householdSize = householdSize + numberChildren;
}
//  else add value to the householdsize count
else if (numberChildren < 3 || numberChildren != '') {
    householdSize = parseInt(householdSize) + parseInt(numberChildren);
}
//  multiply out the number of children times the rate
childrenRate = numberChildren * 0.635 * secondLowestSilverRate;

// get the FPL Percent using the income and household size
HouseSize = sizeArray[parseInt(householdSize)];
FPLPercent = getFPLFactor(income, HouseSize);
// if FPL < 300 % assume all children are in CHIPS
if (FPLPercent >= 3) {
adjustMonthlyPremium = childrenRate + Adult3Rate + Adult2Rate + Adult1Rate;
}
else if (FPLPercent <= 3) {
    adjustMonthlyPremium =  Adult3Rate + Adult2Rate + Adult1Rate;
}
appPercent = getAppRate(income, HouseSize);
FPLPercent = FPLPercent*100;
FPLPercent = precise_round(FPLPercent,2);
appPercent = appPercent.toFixed(4);
//calculate Maximum monthly tax credit

OutOfPocketBenchmark = ((appPercent) * income)/12;
 if (OutOfPocketBenchmark >= adjustMonthlyPremium) {
  OutOfPocketBenchmark = adjustMonthlyPremium;
 }
OutOfPocketBenchmark = precise_round(OutOfPocketBenchmark,2);

MaxMonthlyTaxCredit = adjustMonthlyPremium - OutOfPocketBenchmark;
adjustMonthlyPremium = precise_round(adjustMonthlyPremium,2);
MaxMonthlyTaxCredit = precise_round(MaxMonthlyTaxCredit,2);

$("#results").html('');
$("#results").append("<div class='indResults'><div class='indResultsRow'>Results</div><div class='indResultsRow'><div class='indResultsKey'>Adjusted Monthly Premium: </div><div class='indResultsValue'> &#36;" + adjustMonthlyPremium + "</div></div><div class='indResultsRow'><div class='indResultsKey'>   Income: </div><div class='indResultsValue'> &#36;" + income + "</div></div><div class='indResultsRow'><div class='indResultsKey'>  Household Size:  </div><div class='indResultsValue'>" + HouseSize + "</div></div><div class='indResultsRow'><div class='indResultsKey'>  FPL Percent:  </div><div class='indResultsValue'>" + FPLPercent + "&#37; </div></div><div class='indResultsRow'><div class='indResultsKey'>  App Percent:  </div><div class='indResultsValue'>" + appPercent*100 + "&#37; </div></div><div class='indResultsRow'><div class='indResultsKey'>Maximum Montlhy Tax Credit: </div><div class='indResultsValue'> &#36;" + MaxMonthlyTaxCredit + "</div></div><div class='indResultsRow'><div class='indResultsKey'>Out of Pocket Benchmark: </div><div class='indResultsValue'> &#36;" + OutOfPocketBenchmark + "</div></div>");
}
// if preconditoins are not met append the error messages to results div
    if (valid == 0) {
        $("#results").html('');
        $("#results").append(error);
    }
function CheckPreconditions(income,adult1) {
    // this frunctoin checks for required form elements and also checks adult 1 age > 20

    var errorhtml = "";
    
    
    if (income == "USD($)") {
        errorhtml += "<div class='error'>You must enter the total annual household income before taxes.</div>";
        valid = 0;
        
    }
    if (adult1 == "") {
        errorhtml += "<div class='error'>You must enter age of primary adult.</div>";
        valid = 0;
    }
    if (adult1 < 20) {
        errorhtml += "<div class='error'>Adult 1 must be 21 or older.</div>";
        valid = 0;
        
    }

    
    return errorhtml;
}
function getAgeFactor(age, ageFactor) {
    // function tales the age and retrns the age factor from the premium Array
    var retval;
    if (age <= 20) {
        alert("To young for adult calculation");
        return false;
    }
    else if (age >= 64) {
        alert("Shold be counted as Medicaid");
    }
    else {
    $.each(premiumArray , function(i, value) { 
  
      if ((premiumArray[i].Age == age)) {
        
        retval = premiumArray[i].AgeFactor * secondLowestSilverRate;
        return false;
             }
  
    });

return retval;
}
}
function getFPLFactor(income, HouseSize) {
    var retThing ;
    myInteger = parseInt(income);
    
    if (HouseSize == "zero") {
       // alert("if zero: " + (HouseSize == "zero")); 
    }
    else if (HouseSize == "one") { 
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].one >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing;
    }
    else if (HouseSize == "two") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].two >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "three") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].three >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "four") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].four >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "five") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].five >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "six") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].six >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "seven") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].seven >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }
    else if (HouseSize == "eight") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].eight >= myInteger)) {
             retThing = FPLArray[(j-1)].percentFPL;
             return false;
                                                }     
                                            }); 
       return retThing; 
    }


 }

function getAppRate(income, HouseSize) {
    var retAppRate ;
    myInteger = parseInt(income);
    if (HouseSize == "zero") {
       // alert("if zero: " + (HouseSize == "zero")); 
    }
    else if (HouseSize == "one") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].one >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate;
    }
    else if (HouseSize == "two") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].two >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "three") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].three >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "four") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].four >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "five") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].five >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "six") {
      $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].six >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "seven") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].seven >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }
    else if (HouseSize == "eight") {
       $.each(FPLArray, function(j, value) {
            if ((FPLArray[j].eight >= myInteger)) {
             retAppRate = FPLArray[(j-1)].appPercent;
             return false;
                                                }     
                                            }); 
       return retAppRate; 
    }


 }
function precise_round(num,decimals){
  
return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}

}



