
			function closeWindow(rowId, tabId) {
				if (tabId == 'tab1') {
					var ele1 = document.getElementById('widget_1');
					var ele2 = document.getElementById('widget_2');
					var ele3 = document.getElementById('widget_3');
					var ele4 = document.getElementById('widget_4');
					ele1.style.display = "none";
					ele2.style.display = "none";
					ele3.style.display = "none";
					ele4.style.display = "none";
				} else if (tabId == 'tab2') {
					var ele5 = document.getElementById('widget_5');
					var ele6 = document.getElementById('widget_6');
					var ele7 = document.getElementById('widget_7');
					var ele8 = document.getElementById('widget_8');
					ele5.style.display = "none";
					ele6.style.display = "none";
					ele7.style.display = "none";
					ele8.style.display = "none";
				} else {
					var ele9 = document.getElementById('widget_9');
					var ele10 = document.getElementById('widget_10');
					var ele11 = document.getElementById('widget_11');
					var ele12 = document.getElementById('widget_12');	
					ele9.style.display = "none";
					ele10.style.display = "none";
					ele11.style.display = "none";
					ele12.style.display = "none";				
				}

			}

			function showImage(oForm,fieldName,showHelp,tabId) {
				var name = fieldName;
				//alert("showImage | tabId: "+tabId+" | name: "+name);
				var hidden = "";
				if (tabId == 'tab1') {
					hidden = oForm.fieldTracker1.value;
					oForm.fieldTracker1.value = name;
					var ele1 = document.getElementById('widget_1');
					var ele2 = document.getElementById('widget_2');
					var ele3 = document.getElementById('widget_3');
					var ele4 = document.getElementById('widget_4');
					if ( name == 'cost1' || name == 'cost5' ) {
						document.getElementById('loadingImage1').style.visibility="visible";					
						document.getElementById('loadingImage2').style.visibility="hidden";						
						document.getElementById('loadingImage3').style.visibility="hidden";						
						document.getElementById('loadingImage4').style.visibility="hidden";
						document.getElementById('helpIcon1').style.visibility="visible";
						document.getElementById('helpIcon2').style.visibility="hidden";
						document.getElementById('helpIcon3').style.visibility="hidden";
						document.getElementById('helpIcon4').style.visibility="hidden";
						ele1.style.display = "none";
						ele2.style.display = "none";
						ele3.style.display = "none";
						ele4.style.display = "none";
					} else if ( name == 'cost2' || name == 'cost6' ) {
						document.getElementById('loadingImage1').style.visibility="hidden";						
						document.getElementById('loadingImage2').style.visibility="visible";						
						document.getElementById('loadingImage3').style.visibility="hidden";						
						document.getElementById('loadingImage4').style.visibility="hidden";
						document.getElementById('helpIcon1').style.visibility="hidden";
						document.getElementById('helpIcon2').style.visibility="visible";
						document.getElementById('helpIcon3').style.visibility="hidden";
						document.getElementById('helpIcon4').style.visibility="hidden";					
						ele1.style.display = "none";
						ele2.style.display = "none";
						ele3.style.display = "none";
						ele4.style.display = "none";
					} else if ( name == 'cost3' || name == 'cost7' ) {
						document.getElementById('loadingImage1').style.visibility="hidden";
						document.getElementById('loadingImage2').style.visibility="hidden";
						document.getElementById('loadingImage3').style.visibility="visible";
						document.getElementById('loadingImage4').style.visibility="hidden";
						document.getElementById('helpIcon1').style.visibility="hidden";
						document.getElementById('helpIcon2').style.visibility="hidden";
						document.getElementById('helpIcon3').style.visibility="visible";
						document.getElementById('helpIcon4').style.visibility="hidden";
						ele1.style.display = "none";
						ele2.style.display = "none";
						ele3.style.display = "none";
						ele4.style.display = "none";
					} else {
						document.getElementById('loadingImage1').style.visibility="hidden";
						document.getElementById('loadingImage2').style.visibility="hidden";
						document.getElementById('loadingImage3').style.visibility="hidden";
						document.getElementById('loadingImage4').style.visibility="visible";
						document.getElementById('helpIcon1').style.visibility="hidden";
						document.getElementById('helpIcon2').style.visibility="hidden";
						document.getElementById('helpIcon3').style.visibility="hidden";
						document.getElementById('helpIcon4').style.visibility="visible";
						ele1.style.display = "none";
						ele2.style.display = "none";
						ele3.style.display = "none";
						ele4.style.display = "none";
					}
				} else if (tabId == 'tab2') {
					hidden = oForm.fieldTracker2.value;
					oForm.fieldTracker2.value = name;
					var ele5 = document.getElementById('widget_5');
					var ele6 = document.getElementById('widget_6');
					var ele7 = document.getElementById('widget_7');
					var ele8 = document.getElementById('widget_8');
					if ( name == 'cost9' || name == 'cost13' ) {
						document.getElementById('loadingImage5').style.visibility="visible";
						document.getElementById('loadingImage6').style.visibility="hidden";
						document.getElementById('loadingImage7').style.visibility="hidden";
						document.getElementById('loadingImage8').style.visibility="hidden";
						document.getElementById('helpIcon5').style.visibility="visible";
						document.getElementById('helpIcon6').style.visibility="hidden";
						document.getElementById('helpIcon7').style.visibility="hidden";
						document.getElementById('helpIcon8').style.visibility="hidden";
						ele5.style.display = "none";
						ele6.style.display = "none";
						ele7.style.display = "none";
						ele8.style.display = "none";
					} else if ( name == 'cost10' || name == 'cost14' ) {
						document.getElementById('loadingImage5').style.visibility="hidden";
						document.getElementById('loadingImage6').style.visibility="visible";
						document.getElementById('loadingImage7').style.visibility="hidden";
						document.getElementById('loadingImage8').style.visibility="hidden";
						document.getElementById('helpIcon5').style.visibility="hidden";
						document.getElementById('helpIcon6').style.visibility="visible";
						document.getElementById('helpIcon7').style.visibility="hidden";
						document.getElementById('helpIcon8').style.visibility="hidden";
						ele5.style.display = "none";
						ele6.style.display = "none";
						ele7.style.display = "none";
						ele8.style.display = "none";
					} else if ( name == 'cost11' || name == 'cost15' ) {
						document.getElementById('loadingImage5').style.visibility="hidden";
						document.getElementById('loadingImage6').style.visibility="hidden";
						document.getElementById('loadingImage7').style.visibility="visible";
						document.getElementById('loadingImage8').style.visibility="hidden";
						document.getElementById('helpIcon5').style.visibility="hidden";
						document.getElementById('helpIcon6').style.visibility="hidden";
						document.getElementById('helpIcon7').style.visibility="visible";
						document.getElementById('helpIcon8').style.visibility="hidden";
						ele5.style.display = "none";
						ele6.style.display = "none";
						ele7.style.display = "none";
						ele8.style.display = "none";
					} else {
						document.getElementById('loadingImage5').style.visibility="hidden";
						document.getElementById('loadingImage6').style.visibility="hidden";
						document.getElementById('loadingImage7').style.visibility="hidden";
						document.getElementById('loadingImage8').style.visibility="visible";
						document.getElementById('helpIcon5').style.visibility="hidden";
						document.getElementById('helpIcon6').style.visibility="hidden";
						document.getElementById('helpIcon7').style.visibility="hidden";
						document.getElementById('helpIcon8').style.visibility="visible";
						ele5.style.display = "none";
						ele6.style.display = "none";
						ele7.style.display = "none";
						ele8.style.display = "none";
					}
				} else {
					hidden = oForm.fieldTracker3.value;
					oForm.fieldTracker3.value = name;
					var ele9 = document.getElementById('widget_9');
					var ele10 = document.getElementById('widget_10');
					var ele11 = document.getElementById('widget_11');
					var ele12 = document.getElementById('widget_12');
					if ( name == 'cost17' || name == 'cost21' ) {
						document.getElementById('loadingImage9').style.visibility="visible";
						document.getElementById('loadingImage10').style.visibility="hidden";
						document.getElementById('loadingImage11').style.visibility="hidden";
						document.getElementById('loadingImage12').style.visibility="hidden";
						document.getElementById('helpIcon9').style.visibility="visible";
						document.getElementById('helpIcon10').style.visibility="hidden";
						document.getElementById('helpIcon11').style.visibility="hidden";
						document.getElementById('helpIcon12').style.visibility="hidden";
						ele9.style.display = "none";
						ele10.style.display = "none";
						ele11.style.display = "none";
						ele12.style.display = "none";
					} else if ( name == 'cost18' || name == 'cost22' ) {
						document.getElementById('loadingImage9').style.visibility="hidden";
						document.getElementById('loadingImage10').style.visibility="visible";
						document.getElementById('loadingImage11').style.visibility="hidden";
						document.getElementById('loadingImage12').style.visibility="hidden";
						document.getElementById('helpIcon9').style.visibility="hidden";
						document.getElementById('helpIcon10').style.visibility="visible";
						document.getElementById('helpIcon11').style.visibility="hidden";
						document.getElementById('helpIcon12').style.visibility="hidden";
						ele9.style.display = "none";
						ele10.style.display = "none";
						ele11.style.display = "none";
						ele12.style.display = "none";
					} else if ( name == 'cost19' || name == 'cost23' ) {
						document.getElementById('loadingImage9').style.visibility="hidden";
						document.getElementById('loadingImage10').style.visibility="hidden";
						document.getElementById('loadingImage11').style.visibility="visible";
						document.getElementById('loadingImage12').style.visibility="hidden";
						document.getElementById('helpIcon9').style.visibility="hidden";
						document.getElementById('helpIcon10').style.visibility="hidden";
						document.getElementById('helpIcon11').style.visibility="visible";
						document.getElementById('helpIcon12').style.visibility="hidden";
						ele9.style.display = "none";
						ele10.style.display = "none";
						ele11.style.display = "none";
						ele12.style.display = "none";
					} else {
						document.getElementById('loadingImage9').style.visibility="hidden";
						document.getElementById('loadingImage10').style.visibility="hidden";
						document.getElementById('loadingImage11').style.visibility="hidden";
						document.getElementById('loadingImage12').style.visibility="visible";
						document.getElementById('helpIcon9').style.visibility="hidden";
						document.getElementById('helpIcon10').style.visibility="hidden";
						document.getElementById('helpIcon11').style.visibility="hidden";
						document.getElementById('helpIcon12').style.visibility="visible";
						ele9.style.display = "none";
						ele10.style.display = "none";
						ele11.style.display = "none";
						ele12.style.display = "none";
					}
				}
				//alert("name: "+name+" | hidden: "+hidden)
        		//runTotal(myForm,loc);
    		}

    		function showHelp(showHelp,tabId) {
    			var ele = document.getElementById(showHelp);
    			if(ele.style.display == "block") {
    				ele.style.display = "none";
			  	} else {
					ele.style.display = "block";
				}
    		}

    		function addHelpCal(myForm,loc,row,tabId) {
    			var subValue = '';
    			var mainTotal = '';
    			var hidden = '';
				
				if (tabId == 'tab1') {
					if (myForm.fieldTracker1.value != '')
    					hidden = myForm.fieldTracker1.value;

	    			if ( hidden == 'cost1' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_1.value);
	    				myForm.cost1.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost5' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_1.value);
	    				myForm.cost5.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost2' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_2.value);
	    				myForm.cost2.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost6' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_2.value);
	    				myForm.cost6.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost3' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_3.value);
	    				myForm.cost3.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost7' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_3.value);
	    				myForm.cost7.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else if ( hidden == 'cost4' && row == 'row4' ) {
	    				subValue = Number(myForm.total_sub_4.value);
	    				myForm.cost4.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			} else {
	    				subValue = Number(myForm.total_sub_4.value);
	    				myForm.cost8.value = subValue;
	    				myForm.subTotalAccept1.value = 'Y';
	    			}
				} else if (tabId == 'tab2') {
					if (myForm.fieldTracker2.value != '')
    					hidden = myForm.fieldTracker2.value;

    				if ( hidden == 'cost9' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_5.value);
	    				myForm.cost9.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost13' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_5.value);
	    				myForm.cost13.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost10' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_6.value);
	    				myForm.cost10.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost14' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_6.value);
	    				myForm.cost14.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost11' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_7.value);
	    				myForm.cost11.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost15' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_7.value);
	    				myForm.cost15.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else if ( hidden == 'cost12' && row == 'row4' ) {
	    				subValue = Number(myForm.total_sub_8.value);
	    				myForm.cost12.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			} else {
	    				subValue = Number(myForm.total_sub_8.value);
	    				myForm.cost16.value = subValue;
	    				myForm.subTotalAccept2.value = 'Y';
	    			}
				} else {
					if (myForm.fieldTracker3.value != '')
						hidden = myForm.fieldTracker3.value;

					if ( hidden == 'cost17' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_9.value);
	    				myForm.cost17.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost21' && row == 'row1' ) {
	    				subValue = Number(myForm.total_sub_9.value);
	    				myForm.cost21.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost18' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_10.value);
	    				myForm.cost18.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost22' && row == 'row2' ) {
	    				subValue = Number(myForm.total_sub_10.value);
	    				myForm.cost22.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost19' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_11.value);
	    				myForm.cost19.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost23' && row == 'row3' ) {
	    				subValue = Number(myForm.total_sub_11.value);
	    				myForm.cost23.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else if ( hidden == 'cost20' && row == 'row4' ) {
	    				subValue = Number(myForm.total_sub_12.value);
	    				myForm.cost20.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			} else {
	    				subValue = Number(myForm.total_sub_12.value);
	    				myForm.cost24.value = subValue;
	    				myForm.subTotalAccept3.value = 'Y';
	    			}
				}
    						
    			//alert("addHelpCal | loc: "+loc+" | row: "+row+" | hidden: "+hidden+" | tabId: "+tabId);
    			
    			//else if ( loc == 'col1' && row == 'row2' )
    			//mainTotal = Number(myForm.total_c3.value);
    			//alert("subValue: "+subValue+" | mainTotal: "+mainTotal);
    			//myForm.subTotalAccept.value = 'Y';
    			runTotal(myForm,loc,hidden,tabId);
    		}

    		function runSubTotal(myForm,loc,tabId) {
    			//alert("subLoc: "+loc+" | tabId: "+tabId);
    			if (tabId == 'tab1') {
	    			if (loc == "row1") {
						var subField1 = Number(myForm.subtype1.value);
						var subField2 = Number(myForm.subtype2.value);
						var subField3 = Number(myForm.subtype3.value);
						var subField4 = Number(myForm.subtype4.value);
						var subField5 = Number(myForm.subtype5.value);

						//alert("runSubTotal > subField1: "+subField1+" | subField2: "+subField2+" | subField3: "+subField3);
						if ( !isNaN(subField1) && !isNaN(subField2) && !isNaN(subField3) && !isNaN(subField4) && !isNaN(subField5) ) {
							myForm.total_sub_1.value = subField1 + subField2 + subField3 + subField4 + subField5;
						} 
	    			} else if (loc == "row2"){
						var subField6 = Number(myForm.subtype6.value);
						var subField7 = Number(myForm.subtype7.value);
						var subField8 = Number(myForm.subtype8.value);
						var subField9 = Number(myForm.subtype9.value);

						//alert("runSubTotal > subField4: "+subField4+" | subField5: "+subField5+" | subField6: "+subField6);
						if ( !isNaN(subField6) && !isNaN(subField7) && !isNaN(subField8) && !isNaN(subField9) ) {
							myForm.total_sub_2.value = subField6 + subField7 + subField8 + subField9;
						} 
	    			} else if (loc == "row3"){
						var subField10 = Number(myForm.subtype10.value);
						var subField11 = Number(myForm.subtype11.value);
						var subField12 = Number(myForm.subtype12.value);

						//alert("runSubTotal > subField10: "+subField10+" | subField11: "+subField11+" | subField12: "+subField12);
						if ( !isNaN(subField10) && !isNaN(subField11) && !isNaN(subField12) ) {
							myForm.total_sub_3.value = subField10 + subField11 + subField12;
						} 
	    			} else {
						var subField13 = Number(myForm.subtype13.value);
						var subField14 = Number(myForm.subtype14.value);
						var subField15 = Number(myForm.subtype15.value);

						//alert("runSubTotal > subField13: "+subField13+" | subField14: "+subField14+" | subField15: "+subField15);
						if ( !isNaN(subField13) && !isNaN(subField14) && !isNaN(subField15) ) {
							myForm.total_sub_4.value = subField13 + subField14 + subField15;
						} 
	    			}
    			} else if (tabId == 'tab2') {
	    			if (loc == "row1") {
						var subField16 = Number(myForm.subtype16.value);
						var subField17 = Number(myForm.subtype17.value);
						var subField18 = Number(myForm.subtype18.value);
						var subField19 = Number(myForm.subtype19.value);
						var subField20 = Number(myForm.subtype20.value);

						//alert("runSubTotal > subField16: "+subField16+" | subField17: "+subField17+" | subField18: "+subField18);
						if ( !isNaN(subField16) && !isNaN(subField17) && !isNaN(subField18) && !isNaN(subField19) && !isNaN(subField20) ) {
							myForm.total_sub_5.value = subField16 + subField17 + subField18 + subField19 + subField20;
						} 
	    			} else if (loc == "row2"){
						var subField21 = Number(myForm.subtype21.value);
						var subField22 = Number(myForm.subtype22.value);
						var subField23 = Number(myForm.subtype23.value);
						var subField24 = Number(myForm.subtype24.value);

						//alert("runSubTotal > subField16: "+subField16+" | subField17: "+subField17+" | subField18: "+subField18);
						if ( !isNaN(subField21) && !isNaN(subField22) && !isNaN(subField23) && !isNaN(subField24) ) {
							myForm.total_sub_6.value = subField21 + subField22 + subField23 + subField24;
						}
	    			} else if (loc == "row3"){
						var subField25 = Number(myForm.subtype25.value);
						var subField26 = Number(myForm.subtype26.value);
						var subField27 = Number(myForm.subtype27.value);

						//alert("runSubTotal > subField19: "+subField19+" | subField20: "+subField20+" | subField21: "+subField21);
						if ( !isNaN(subField25) && !isNaN(subField26) && !isNaN(subField27) ) {
							myForm.total_sub_7.value = subField25 + subField26 + subField27;
						}
	    			} else {
						var subField28 = Number(myForm.subtype28.value);
						var subField29 = Number(myForm.subtype29.value);
						var subField30 = Number(myForm.subtype30.value);

						//alert("runSubTotal > subField22: "+subField22+" | subField23: "+subField23+" | subField24: "+subField24);
						if ( !isNaN(subField28) && !isNaN(subField29) && !isNaN(subField30) ) {
							myForm.total_sub_8.value = subField28 + subField29 + subField30;
						}
	    			}
    			} else {
	    			if (loc == "row1") {
						var subField31 = Number(myForm.subtype31.value);
						var subField32 = Number(myForm.subtype32.value);
						var subField33 = Number(myForm.subtype33.value);
						var subField34 = Number(myForm.subtype34.value);
						var subField35 = Number(myForm.subtype35.value);

						//alert("runSubTotal > subField1: "+subField1+" | subField2: "+subField2+" | subField3: "+subField3);
						if ( !isNaN(subField31) && !isNaN(subField32) && !isNaN(subField33) && !isNaN(subField34) && !isNaN(subField35) ) {
							myForm.total_sub_9.value = subField31 + subField32 + subField33 + subField34 + subField35;
						}
	    			} else if (loc == "row2"){
						var subField36 = Number(myForm.subtype36.value);
						var subField37 = Number(myForm.subtype37.value);
						var subField38 = Number(myForm.subtype38.value);
						var subField39 = Number(myForm.subtype39.value);

						//alert("runSubTotal > subField28: "+subField28+" | subField29: "+subField29+" | subField30: "+subField30);
						if ( !isNaN(subField36) && !isNaN(subField37) && !isNaN(subField38) && !isNaN(subField39) ) {
							myForm.total_sub_10.value = subField36 + subField37 + subField38 + subField39;
						}
	    			} else if (loc == "row3"){
						var subField40 = Number(myForm.subtype40.value);
						var subField41 = Number(myForm.subtype41.value);
						var subField42 = Number(myForm.subtype42.value);

						//alert("runSubTotal > subField31: "+subField31+" | subField32: "+subField32+" | subField33: "+subField33);
						if ( !isNaN(subField40) && !isNaN(subField41) && !isNaN(subField42) ) {
							myForm.total_sub_11.value = subField40 + subField41 + subField42;
						}
	    			} else {
						var subField43 = Number(myForm.subtype43.value);
						var subField44 = Number(myForm.subtype44.value);
						var subField45 = Number(myForm.subtype45.value);

						//alert("runSubTotal > subField34: "+subField34+" | subField35: "+subField35+" | subField36: "+subField36);
						if ( !isNaN(subField43) && !isNaN(subField44) && !isNaN(subField45) ) {
							myForm.total_sub_12.value = subField43 + subField44 + subField45;
						}
	    			}

    			} 
    		}

			function runTotal(myForm,loc,fieldName,tabId) {
				//alert("runtTotal - loc: "+loc+" | tabId: "+tabId+" | fieldName: "+fieldName);
				var hidden = '';
				if (tabId == 'tab1') {
					hidden = fieldName;
					//alert("---hidden: "+hidden);
					//alert("--- myForm.fieldTracker1.value: "+myForm.fieldTracker1.value);
	    			if (myForm.fieldTracker1.value != '') {
	    				if (myForm.fieldTracker1.value == fieldName) {
		    				//alert("boom");
		    				hidden = myForm.fieldTracker1.value;
		    			}
		    		}
					//alert("runTotal - tab1 | loc: "+loc+" | hidden: "+hidden);
					if (hidden == "cost1" || hidden == "cost2" || hidden == "cost3" || hidden == "cost4" ) {
						var field1 = Number(myForm.cost1.value);
						//alert("field1: "+field1);
						var field2 = Number(myForm.cost2.value);
						//alert("field2: "+field3);
						var field3 = Number(myForm.cost3.value);
						//alert("field3: "+field3);
						var field4 = Number(myForm.cost4.value);
						//alert("field4: "+field4);
						//alert("col1 > field1: "+field1+" | field2: "+field2+" | field3: "+field3+" | field4: "+field4);

						 myForm.total_c1.value = field1 + field2 + field3 + field4;
						 myForm.hiddentotal_c1.value = myForm.total_c1.value;
						 myForm.total_c1.value = '$' + myForm.total_c1.value;
						 //alert(myForm.total_c1.value);
						 //myForm.total_c4.value = field1 + field2 + field3 + field4;
					} else {
						//alert("col2");
						var field5 = Number(myForm.cost5.value);
						var field6 = Number(myForm.cost6.value);
						var field7 = Number(myForm.cost7.value);
						var field8 = Number(myForm.cost8.value);
						//alert("field5: "+field5+" | field6: "+field6+" | field7: "+field7+" | field8: "+field8);

						myForm.total_c2.value = field5 + field6 + field7 + field8;
						//alert("myForm.total_c2.value: "+myForm.total_c2.value);
						myForm.hiddentotal_c2.value = myForm.total_c2.value;
						myForm.total_c2.value = '$' + myForm.total_c2.value;
						//myForm.total_c5.value = field5 + field6 + field7 + field8;
					}
					var col1Total = parseInt(myForm.hiddentotal_c1.value,10);
					var col2Total = parseInt(myForm.hiddentotal_c2.value,10);
					//alert("col1Total: "+col1Total);
					//alert("col2Total: "+col2Total);
					if (!isNaN(col1Total)) {
						//var tab1TotalC7 = Number(myForm.tab1total_c7.value);
						var tab2TotalC7 = Number(myForm.tab2total_c7.value);
						var tab3TotalC7 = Number(myForm.tab3total_c7.value);
						if (!isNaN(tab2TotalC7) || !isNaN(tab3TotalC7)) {
							myForm.total_c7.value = '$' + (col1Total + tab2TotalC7 + tab3TotalC7);
						} else {
							myForm.total_c7.value = '$' + col1Total;
						}
						myForm.tab1total_c7.value = col1Total;
					} 
					if (!isNaN(col2Total)) {
						//var tab1TotalC8 = Number(myForm.tab1total_c8.value);
						var tab2TotalC8 = Number(myForm.tab2total_c8.value);
						var tab3TotalC8 = Number(myForm.tab3total_c8.value);
						if (!isNaN(tab2TotalC7) || !isNaN(tab3TotalC7)) {
							myForm.total_c8.value = '$' + (col2Total + tab2TotalC8 + tab3TotalC8);
						} else {
							myForm.total_c8.value = '$' + col2Total;
						}
						myForm.tab1total_c8.value = col2Total;
					}
					//else
						//myForm.total_c3.value = col1Total + col2Total;

					if ( myForm.subTotalAccept1.value == 'Y' ) {
						myForm.subtype1.value = '';
						myForm.subtype2.value = '';
						myForm.subtype3.value = '';
						myForm.subtype4.value = '';
						myForm.subtype5.value = '';
						myForm.subtype6.value = '';
						myForm.subtype7.value = '';
						myForm.subtype8.value = '';
						myForm.subtype9.value = '';
						myForm.subtype10.value = '';
						myForm.subtype11.value = '';
						myForm.subtype12.value = '';
						myForm.subtype13.value = '';
						myForm.subtype14.value = '';
						myForm.subtype15.value = '';
						myForm.total_sub_1.value = '';
						myForm.total_sub_2.value = '';
						myForm.total_sub_3.value = '';
						myForm.total_sub_4.value = '';
					}
   				} else if (tabId == 'tab2') {
					hidden = fieldName;
   					if (myForm.fieldTracker2.value != '') {
	    				if (myForm.fieldTracker2.value == fieldName) {
	    					hidden = myForm.fieldTracker2.value;
	    				}
	    			}
	    			//alert("runTotal - tab2 | loc: "+loc+" | hidden: "+hidden);
					if (hidden == "cost9" || hidden == "cost10" || hidden == "cost11" || hidden == "cost12" ) {
						//alert("col2");
						var field9 = Number(myForm.cost9.value);
						var field10 = Number(myForm.cost10.value);
						var field11 = Number(myForm.cost11.value);
						var field12 = Number(myForm.cost12.value);
						//alert("field9: "+field9+" | field10: "+field10+" | field11: "+field11+" | field12: "+field12);

						myForm.total_c3.value = field9 + field10 + field11 + field12;
						myForm.hiddentotal_c3.value = myForm.total_c3.value;
						myForm.total_c3.value = '$' + myForm.total_c3.value;
						//myForm.total_c4.value = field9 + field10 + field11 + field12;
					} else {
						//alert("col2");
						var field13 = Number(myForm.cost13.value);
						var field14 = Number(myForm.cost14.value);
						var field15 = Number(myForm.cost15.value);
						var field16 = Number(myForm.cost16.value);
						//alert("field13: "+field13+" | field14: "+field14+" | field15: "+field15+" | field16: "+field16);

						myForm.total_c4.value = field13 + field14 + field15 + field16;
						myForm.hiddentotal_c4.value = myForm.total_c4.value;
						myForm.total_c4.value = '$' + myForm.total_c4.value;
						//myForm.total_c5.value = field13 + field14 + field15 + field16;
					}
					var col1Total = parseInt(myForm.hiddentotal_c3.value,10);
					var col2Total = parseInt(myForm.hiddentotal_c4.value,10);
					//alert("col1Total: "+col1Total);
					//alert("col2Total: "+col2Total);
					if (!isNaN(col1Total)) {
						var tab1TotalC7 = Number(myForm.tab1total_c7.value);
						var tab3TotalC7 = Number(myForm.tab3total_c7.value);
						if (!isNaN(tab1TotalC7) || !isNaN(tab3TotalC7)) {
							myForm.total_c7.value = '$' + (col1Total + tab1TotalC7 + tab3TotalC7);
						} else {
							myForm.total_c7.value = '$' + col1Total;
						}
						myForm.tab2total_c7.value = col1Total;
					}
					if (!isNaN(col2Total)) {
						var tab1TotalC8 = Number(myForm.tab1total_c8.value);
						var tab3TotalC8 = Number(myForm.tab3total_c8.value);
						if (!isNaN(tab1TotalC8) || !isNaN(tab3TotalC8)) {
							myForm.total_c8.value = '$' + (col2Total + tab1TotalC8 + tab3TotalC8);
						} else {
							myForm.total_c8.value = '$' + col2Total;
						}
						myForm.tab2total_c8.value = col2Total;
					}
					//else
						//myForm.total_c3.value = col1Total + col2Total;

					if ( myForm.subTotalAccept2.value == 'Y' ) {
						myForm.subtype16.value = '';
						myForm.subtype17.value = '';
						myForm.subtype18.value = '';
						myForm.subtype19.value = '';
						myForm.subtype20.value = '';
						myForm.subtype21.value = '';
						myForm.subtype22.value = '';
						myForm.subtype23.value = '';
						myForm.subtype24.value = '';
						myForm.subtype25.value = '';
						myForm.subtype26.value = '';
						myForm.subtype27.value = '';
						myForm.subtype28.value = '';
						myForm.subtype29.value = '';
						myForm.subtype30.value = '';
						myForm.total_sub_5.value = '';
						myForm.total_sub_6.value = '';
						myForm.total_sub_7.value = '';
						myForm.total_sub_8.value = '';
					}
				} else {
					hidden = fieldName;
					if (myForm.fieldTracker3.value != '') {
						if (myForm.fieldTracker3.value == fieldName) {
							hidden = myForm.fieldTracker3.value;
						}
	    			}
	    			//alert("runTotal - tab3 | loc: "+loc+" | hidden: "+hidden);
					if (hidden == "cost17" || hidden == "cost18" || hidden == "cost19" || hidden == "cost20" ) {
						//alert("col2");
						var field17 = Number(myForm.cost17.value);
						var field18 = Number(myForm.cost18.value);
						var field19 = Number(myForm.cost19.value);
						var field20 = Number(myForm.cost20.value);
						//alert("field17: "+field17+" | field18: "+field18+" | field19: "+field19+" | field20: "+field20);

						myForm.total_c5.value = field17 + field18 + field19 + field20;
						myForm.hiddentotal_c5.value = myForm.total_c5.value;
						myForm.total_c5.value = '$' + myForm.total_c5.value;
						//myForm.total_c4.value = field17 + field18 + field19 + field20;
					} else {
						//alert("col2");
						var field21 = Number(myForm.cost21.value);
						var field22 = Number(myForm.cost22.value);
						var field23 = Number(myForm.cost23.value);
						var field24 = Number(myForm.cost24.value);
						//alert("field21: "+field21+" | field22: "+field22+" | field23: "+field23+" | field24: "+field24);

						myForm.total_c6.value = field21 + field22 + field23 + field24;
						myForm.hiddentotal_c6.value = myForm.total_c6.value;
						myForm.total_c6.value = '$' + myForm.total_c6.value;
						//myForm.total_c5.value = field21 + field22 + field23 + field24;
					}
					var col1Total = parseInt(myForm.hiddentotal_c5.value,10);
					var col2Total = parseInt(myForm.hiddentotal_c6.value,10);
					//alert("col1Total: "+col1Total);
					//alert("col2Total: "+col2Total);
					if (!isNaN(col1Total)) {
						var tab1TotalC7 = Number(myForm.tab1total_c7.value);
						var tab2TotalC7 = Number(myForm.tab2total_c7.value);
						if (!isNaN(tab1TotalC7) || !isNaN(tab2TotalC7)) {
							myForm.total_c7.value = '$' + (col1Total + tab1TotalC7 + tab2TotalC7);
						} else {
							myForm.total_c7.value = '$' + col1Total;
						}
						myForm.tab3total_c7.value = col1Total;
					}
					if (!isNaN(col2Total)) {
						var tab1TotalC8 = Number(myForm.tab1total_c8.value);
						var tab2TotalC8 = Number(myForm.tab2total_c8.value);
						if (!isNaN(tab1TotalC8) || !isNaN(tab2TotalC8)) {
							myForm.total_c8.value = '$' + (col2Total + tab1TotalC8 + tab2TotalC8);
						} else {
							myForm.total_c8.value = '$' + col2Total;
						}
						myForm.tab3total_c8.value = col2Total;
					}
					//else
						//myForm.total_c3.value = col1Total + col2Total;

					if ( myForm.subTotalAccept3.value == 'Y' ) {
						myForm.subtype31.value = '';
						myForm.subtype32.value = '';
						myForm.subtype33.value = '';
						myForm.subtype34.value = '';
						myForm.subtype35.value = '';
						myForm.subtype36.value = '';
						myForm.subtype37.value = '';
						myForm.subtype38.value = '';
						myForm.subtype39.value = '';
						myForm.subtype40.value = '';
						myForm.subtype41.value = '';
						myForm.subtype42.value = '';
						myForm.subtype43.value = '';
						myForm.subtype44.value = '';
						myForm.subtype45.value = '';
						myForm.total_sub_9.value = '';
						myForm.total_sub_10.value = '';
						myForm.total_sub_11.value = '';
						myForm.total_sub_12.value = '';
					}    				
    			}
			}