  function FillNextMonthSingle(f,Num) {
    if (Num == 1) {
      if(f.income_current_1.checked== true) {
        f.next_month_1.value = f.current_month_1.value;
      } else {
        f.next_month_1.value = 0;
      }
    } else if (Num == 2) {
      if(f.income_current_2.checked== true) {
        f.next_month_2.value = f.current_month_2.value;
      } else {
        f.next_month_2.value = 0;
      }
    } else if (Num == 3) {
      if(f.income_current_3.checked== true) {
        f.next_month_3.value = f.current_month_3.value;
      } else {
        f.next_month_3.value = 0;
      }
    } else if (Num == 4) {
      if(f.income_current_4.checked== true) {
        f.next_month_4.value = f.current_month_4.value;
      } else {
        f.next_month_4.value = 0;
      }
    } else if (Num == 5) {
      if(f.income_current_5.checked== true) {
        f.next_month_5.value = f.current_month_5.value;
      } else {
        f.next_month_5.value = 0;
      }
    } else if (Num == 6) {
      if(f.income_current_6.checked== true) {
        f.next_month_6.value = f.current_month_6.value;
      } else {
        f.next_month_6.value = 0;
      }
    } else if (Num == 7) {
      if(f.income_current_7.checked== true) {
        f.next_month_7.value = f.current_month_7.value;
      } else {
        f.next_month_7.value = 0;
      }
    } else if (Num == 8) {
      if(f.income_current_8.checked== true) {
        f.next_month_8.value = f.current_month_8.value;
      } else {
        f.next_month_8.value = 0;
      }
    } else if (Num == 9) {
      if(f.income_current_9.checked== true) {
        f.next_month_9.value = f.current_month_9.value;
      } else {
        f.next_month_9.value = 0;
      }
    } else if (Num == 10) {
      if(f.income_current_10.checked== true) {
        f.next_month_10.value = f.current_month_10.value;
      } else {
        f.next_month_10.value = 0;
      }
    } else if (Num == 11) {
      if(f.income_current_11.checked== true) {
        f.next_month_11.value = f.current_month_11.value;
      } else {
        f.next_month_11.value = 0;
      }
    } else if (Num == 12) {
      if(f.income_current_12.checked== true) {
        f.next_month_12.value = f.current_month_12.value;
      } else {
        f.next_month_12.value = 0;
      }
    } else if (Num == 13) {
      if(f.income_current_13.checked== true) {
        f.next_month_13.value = f.current_month_13.value;
      } else {
        f.next_month_13.value = 0;
      }
    } else {
      if(f.income_current_14.checked== true) {
        f.next_month_14.value = f.current_month_14.value;
      } else {
        f.next_month_14.value = 0;
      }
    }
  }

  function FillNextmonth(f,loc,fieldName,tabId)
{
  if(f.income_type_1.checked== true) {
     f.cost5.value =f.cost1.value;
  } else {
    f.cost5.value = 0;
  }
  if(f.income_type_2.checked== true) {
     f.cost6.value =f.cost2.value;
  } else {
    f.cost6.value = 0;
  }
 if(f.income_type_3.checked== true) {
     f.cost7.value =f.cost3.value;
  } else {
    f.cost7.value = 0;
  }
  if(f.income_type_4.checked== true) {
     f.cost8.value =f.cost4.value;
  } else {
    f.cost8.value = 0;
  }

  if(f.income_type_5.checked== true) {
     f.cost13.value =f.cost9.value;
  } else {
    f.cost13.value = 0;
  }
  if(f.income_type_6.checked== true) {
     f.cost14.value =f.cost10.value;
  } else {
    f.cost14.value = 0;
  }
 if(f.income_type_7.checked== true) {
     f.cost15.value =f.cost11.value;
  } else {
    f.cost15.value = 0;
  }
  if(f.income_type_8.checked== true) {
     f.cost16.value =f.cost12.value;
  } else {
    f.cost16.value = 0;
  }

   if(f.income_type_9.checked== true) {
     f.cost21.value =f.cost17.value;
  } else {
    f.cost21.value = 0;
  }
  if(f.income_type_10.checked== true) {
     f.cost22.value =f.cost18.value;
  } else {
    f.cost22.value = 0;
  }
 if(f.income_type_11.checked== true) {
     f.cost23.value =f.cost19.value;
  } else {
    f.cost23.value = 0;
  }
  if(f.income_type_12.checked== true) {
     f.cost24.value =f.cost20.value;
  } else {
    f.cost24.value = 0;
  }
   runTotal(f,loc,fieldName,tabId);
} 

function FillNextmonthAdjusment(f) {
  if(f.adjustment_type_1.checked== true) {
     f.adjustment_type_1_next_month.value =f.adjustment_type_1_current_month.value;
  }
    if(f.adjustment_type_1.checked== false) {
     f.adjustment_type_1_next_month.value ="$0";
  }
  if(f.adjustment_type_2.checked== true) {
     f.adjustment_type_2_next_month.value =f.adjustment_type_2_current_month.value;
  }
      if(f.adjustment_type_2.checked== false) {
     f.adjustment_type_2_next_month.value ="$0";
  }
    if(f.adjustment_type_3.checked== true) {
     f.adjustment_type_3_next_month.value =f.adjustment_type_3_current_month.value;
  }
    if(f.adjustment_type_3.checked== false) {
     f.adjustment_type_3_next_month.value ="$0";
  }
  if(f.adjustment_type_4.checked== true) {
     f.adjustment_type_4_next_month.value =f.adjustment_type_4_current_month.value;
  }
      if(f.adjustment_type_4.checked== false) {
     f.adjustment_type_4_next_month.value ="$0";
  }
   if(f.adjustment_type_5.checked== true) {
     f.adjustment_type_5_next_month.value =f.adjustment_type_5_current_month.value;
  }
    if(f.adjustment_type_5.checked== false) {
     f.adjustment_type_5_next_month.value ="$0";
  }
  if(f.adjustment_type_6.checked== true) {
     f.adjustment_type_6_next_month.value =f.adjustment_type_6_current_month.value;
  }
      if(f.adjustment_type_6.checked== false) {
     f.adjustment_type_6_next_month.value ="$0";
  }
    if(f.adjustment_type_7.checked== true) {
     f.adjustment_type_7_next_month.value =f.adjustment_type_7_current_month.value;
  }
    if(f.adjustment_type_7.checked== false) {
     f.adjustment_type_7_next_month.value ="$0";
  }
  if(f.adjustment_type_8.checked== true) {
     f.adjustment_type_8_next_month.value =f.adjustment_type_8_current_month.value;
  }
      if(f.adjustment_type_8.checked== false) {
     f.adjustment_type_8_next_month.value ="$0";
  }
   if(f.adjustment_type_9.checked== true) {
     f.adjustment_type_9_next_month.value =f.adjustment_type_9_current_month.value;
  }
    if(f.adjustment_type_9.checked== false) {
     f.adjustment_type_9_next_month.value ="$0";
  }
  if(f.adjustment_type_10.checked== true) {
     f.adjustment_type_10_next_month.value =f.adjustment_type_10_current_month.value;
  }
      if(f.adjustment_type_10.checked== false) {
     f.adjustment_type_10_next_month.value ="$0";
  }
    if(f.adjustment_type_11.checked== true) {
     f.adjustment_type_11_next_month.value =f.adjustment_type_11_current_month.value;
  }
    if(f.adjustment_type_11.checked== false) {
     f.adjustment_type_11_next_month.value ="$0";
  }
  if(f.adjustment_type_12.checked== true) {
     f.adjustment_type_12_next_month.value =f.adjustment_type_12_current_month.value;
  }
      if(f.adjustment_type_12.checked== false) {
     f.adjustment_type_12_next_month.value ="$0";
  }
 if(f.adjustment_type_13.checked== true) {
     f.adjustment_type_13_next_month.value =f.adjustment_type_13_current_month.value;
  }
      if(f.adjustment_type_13.checked== false) {
     f.adjustment_type_13_next_month.value ="$0";
  }
}


function FillsameAsResidential(f)
{
  if(f.maAddress.checked== true) {
     f.maAddress_line1.value =f.resAddress_line1.value;
     f.maAddress_line2.value =f.resAddress_line2.value;     
     f.maCity.value =f.resCity.value;
     f.maCounty.value =f.resCounty.value;
     f.maState.value =f.resState.value;
     f.maZip.value = f.resZip.value;
     $('.mailingAddress input').css('color','#034564');
  }

  if(f.billAddress.checked== true) {
     f.billCompanyName.value ="Bicycles Unlimited";
     f.billFirstname.value ="Samantha";
     f.billLastname.value ="Hermanson";
     f.billAddress_line1.value =f.resAddress_line1.value;
     f.billAddress_line2.value =f.resAddress_line2.value;
     f.billCity.value =f.resCity.value;
     f.billCounty.value =f.resCounty.value;
     f.billState.value =f.resState.value;
     f.billZip.value = f.resZip.value;
     $('.billingAddress input').css('color','#034564');
     f.billPhone.value ="567-890-1234";
     f.billFax.value ="567-890-9876";
     f.billEmail.value ="sam.hermanson@mail.com";
  }
}