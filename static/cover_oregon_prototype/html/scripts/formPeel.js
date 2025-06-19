var ListHandler = new Object();
var CheckboxHandler = new Object();
var RadioHandler = new Object();

Array.prototype.in_array = function (value) {
  for (var i = 0; i < this.length; i++) {
	if (this[i] == value) {
		return true;
	}
  }

  return false;

};

RadioHandler.getCheckedValue = function(radio_name) {
  oRadio = document.forms[0].elements[radio_name];
  for(var i = 0; i < oRadio.length; i++) { 
	if(oRadio[i].checked) {
		return oRadio[i].value;
	}
  }

  return '';
};


ListHandler.getSelectedIndices = function (oList) {
  var indices = [];
  for(var i = 1; i < oList.options.length; i++) {
	  if(oList.options[i].selected == true) {
		  indices.push(i);
	  }
  }

  return indices;

};



ListHandler.getSelectedValues = function (oList) {
  var sValues = [];
  for(var i = 1; i < oList.options.length; i++) {
	  if(oList.options[i].selected == true) {
		sValues.push(oList.options[i].value);
	  }
  }

  return sValues;

};



ListHandler.getSelectedOptionsDisplayText = function (oList) {
  var sdValues = [];
  for(var i = 1; i < oList.options.length; i++) {
	  if(oList.options[i].selected == true) {
		sdValues.push(oList.options[i].text);
	  }
  }

  return sdValues;

};




ListHandler.getAllValues = function (oList) {
  var aValues = [];

  for(var i = 1; i < oList.options.length; i++) {
	  aValues.push(oList.options[i].value);
  }

  return aValues;

};




ListHandler.getAllOptionsDisplayText = function (oList) {
  var aValues = [];

  for(var i = 1; i < oList.options.length; i++) {
	  aValues.push(oList.options[i].text);
  }
  return aValues;

};




ListHandler.addOption = function (oList, optionName, optionValue) {
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(optionName));
  oOption.setAttribute("value", optionValue);

  oList.appendChild(oOption);

};



ListHandler.removeOption = function (oList, index) {
  oList.remove(index);
};



CheckboxHandler.isChecked = function (checkboxObj) {
  return(checkboxObj.checked == true);
};


function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function isEmpty(str) {
  str = trim(str);
  return ((str == null) || (str.length == 0));
}


function isDigit(c) {
  return ((c >= "0") && (c <= "9"));
}


function isInteger(str) {  
  for (var i = 0; i < str.length; i++) {
	var c = str.charAt(i);
	if (!isDigit(c)) {
		return false;
	}
  }

  return true;
}


function disableElement(obj) {
  obj.value = ' - N.A. - ';
  obj.disabled = true;
}

function enableElement(obj) {
  obj.value = '';
  obj.disabled = false;
}


function addToList(skillObj, experienceObj, expertiseObj, skillsetObj) {
  var skill = trim(skillObj.value);
  var experience = trim(experienceObj.value);
  
  if(isEmpty(skill)) {
	  alert("Please enter a skill.");
	  return;
  }
  
  if(isEmpty(experience) || !isInteger(experience)) {
	  alert("Please enter a valid integer representing your years of experience in the chosen skill");
	  return;
  }
  
  var expertise_chosen = false;

  for(var i = 1; i < expertiseObj.length; i++) {
	  if(expertiseObj.options[i].selected == true) {
		expertise_chosen = true;
		var optionName = skill + ': ' + experience + ' years experience - ' + expertiseObj.options[i].text + ' level skills'; 
		
		var optionValue = expertiseObj.options.length;

		ListHandler.addOption(skillsetObj, optionName, optionValue);
		expertiseObj.options[i].selected = false;
		expertiseObj.selectedIndex = -1;
		skillObj.value = '';
		experienceObj.value = '';
		
		break;
	  }
  }

  if(!expertise_chosen) {
	  alert("Please select an expertise level from the drop down list");
  }

}


function removeFromList(skillsetObj) {
  for(var i = 1; i < skillsetObj.length; i++) {
	if(skillsetObj.options[i].selected == true) {
		ListHandler.removeOption(skillsetObj, i);		
	}
  }
}


function handleJobExpOption(jobExpObj, currentSalaryObj) {
  if (jobExpObj.options[jobExpObj.selectedIndex].value == 1) {
	  disableElement(currentSalaryObj);
  } else {
	enableElement(currentSalaryObj);
  }
}


function checkEmail(email)
{	
	
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  
  if(pattern.test(email)) {         
	return true;
  } else {   
	return false; 
  }

}


//function getFormValues(oForm, skip_elements) {
function getFormValues(oForm, skip_elements) {
  var elements = oForm.elements; 
  var data = [];
  var element_value = null;
  var fullName = "";
  var firstNameTempValue = "";
  var lastNameTempValue = "";

  //alert("elements.length: "+elements.length);

  for(var i = 0; i < elements.length; i++) {
     
	var field_type = elements[i].type.toLowerCase();
	var element_name = elements[i].getAttribute("name");
	//alert("field_type: "+field_type+" | element_name: "+element_name);
	
	if(element_name != null){
		if(!skip_elements.length || !skip_elements.in_array(element_name)) {

			switch(field_type) {
			
				case "text": 
				case "password": 
				case "textarea":
				//case "hidden":	
					
					element_value = elements[i].value;
					if (element_name.toLowerCase() == "firstname" || element_name.toLowerCase() == "lastname"){
						if (element_name.toLowerCase() == "firstname") {
							firstNameTempValue = element_value;
							//data.push(element_name + ':' + element_value);
							if (lastNameTempValue.length > 0) {
								if (firstNameTempValue.indexOf(" ") != -1) {
									firstNameTempValue = firstNameTempValue.replace(/\s/g,'+');
								} else if (lastNameTempValue.indexOf(" ") != -1) {
									lastNameTempValue = lastNameTempValue.replace(/\s/g,'+');
								}		
								data.push('fullname' + ':' + firstNameTempValue + '+' +lastNameTempValue);
							}
						} else if (element_name.toLowerCase() == "lastname") {
							lastNameTempValue = element_value;
							//data.push(element_name + ':' + element_value);
							if (firstNameTempValue.length > 0) {
								if (firstNameTempValue.indexOf(" ") != -1) {
									firstNameTempValue = firstNameTempValue.replace(/\s/g,'+');
								} else if (lastNameTempValue.indexOf(" ") != -1) {
									lastNameTempValue = lastNameTempValue.replace(/\s/g,'+');
								}
								data.push('fullname' + ':' + firstNameTempValue + '+' +lastNameTempValue);
							}
							
						}
					}
					if (element_value.indexOf(" ") != -1) {
						element_value = element_value.replace(/\s/g,'+');
						data.push(element_name + ':' + element_value);
					} else {
						data.push(element_name + ':' + element_value);
					}
					//alert("1 - element_name: "+element_name+" | element_value: "+element_value);
					break;
				
				case "checkbox":
					
					element_value = CheckboxHandler.isChecked(elements[i]);
					data.push(element_name + ':' + element_value);
					//alert("2 - element_name: "+element_name+" | element_value: "+element_value);
					break;

				case "select-one":

					var ind = elements[i].selectedIndex;
					if(ind > 0) { 
						element_value = elements[i].value;
					} else {
						//element_value = '';
						element_value = '1';
					}
					data.push(element_name + ':' + element_value);

					//alert("3 - element_name: "+element_name+" | element_value: "+element_value);
					break;

				case "select-multiple":

					var elems = ListHandler.getSelectedOptionsDisplayText(elements[i]);
					element_value = elems.join('\n');
					data.push(element_name + ':' + element_value);

					//alert("4 - element_name: "+element_name+" | element_value: "+element_value);
					break;
				
				default:
					//alert("break");
					break;
			}

	  	}
	}
  
  }
		
  return data; 

}

function buildURL(data,pageName,stored_data){
	var url = pageName +".html?";
	//var co = "";
	//alert("data.length: "+data.length);
	var stored_data = window.location.search.substring(1); 
	//alert("data.length: "+data.length);
	//alert("stored_data.length: "+stored_data.length);
	//alert(data.join('\n--------------------\n'));
	//alert("stored_data - 1: "+stored_data);
	//if (!( !stored_data || /^\s*$/.test(stored_data) ) )
		//alert("stored_data - 1: "+stored_data);
	//else 
		//alert("stored_data - 2: "+stored_data);
	//-----------------------------------------
	var storedDataArray = [];
	storedDataArray = stored_data.split('|');
	//alert(storedDataArray.join('\n--------------------\n'));
	//alert("data.length: "+data.length+" | storedDataArray.length: "+storedDataArray.length);
	if (data.length > 0 && storedDataArray.length > 1) {
		//alert("data.length: "+data.length+" | storedDataArray.length: "+storedDataArray.length);

	    var commonElements = [];
	    var combinedElements = [];
	    var argname = "";
	    var value = "";
	    var dataArgname = "";
	    var dataValue = "";

	    for (var m=0;m<storedDataArray.length;m++) { 
	    	var pos = storedDataArray[m].indexOf(':'); 
	        if (pos >= 0) {
	        	argname = storedDataArray[m].substring(0,pos); 
	            value = storedDataArray[m].substring(pos+1);
	            //alert("argname: "+argname);
	            for (var pj = 0; pj < data.length; pj++) {
	            	dataArgname = data[pj].substring(0,pos); 
	            	//alert("dataArgname: "+dataArgname);
	            	if (argname != dataArgname) {
	                	//alert("argname: "+argname+" | dataArgname: "+dataArgname);
	                	//break;
	                	commonElements.push(argname+":"+value);
	                	break;
					} /*else {
						combinedElements.push(argname+":"+value);
						break;
					}*/
				}
			}
		}
		//alert("commonElements.length: "+commonElements.length);
		//alert(commonElements.join('\n--------------------\n'));
		//alert("combinedElements.length: "+combinedElements.length);
		//alert(combinedElements.join('\n--------------------\n'));

		for(var i = 0; i < commonElements.length; i++) {
			//alert("123 - "+commonElements[i]);
			if (commonElements[i].toLowerCase() != "undefined")
				url+=commonElements[i] + "|";
			else
				url;
			//document.fillgaps.redirect.value 
		}
	} else {

		for(var i = 0; i < data.length; i++) {
			//alert("321 - "+data[i]);
			if (data[i].toLowerCase() != "undefined")
				url+=data[i] + "|";
			else
				url;
			//document.fillgaps.redirect.value 
		}

	}
	
	//-----------------------------------------
	/*if (stored_data.length > 0) {
		url+=stored_data+"|";
	}
	//alert("stored_data.length: "+stored_data.length);
	for(var i = 0; i < data.length; i++) {
		//alert(data[i]);
		if (data[i].toLowerCase() != "undefined")
			url+=data[i] + "|";
		else
			url;
		//document.fillgaps.redirect.value 
	}*/
	url = url.slice(0,-1);
	window.location = url;
}

function processFormData(oForm, pageName) {
	var skip_elements = ['button1','fieldset','select-one','hidden'];
	
	var data = getFormValues(oForm, skip_elements);
	
	var elements = oForm.elements;
	var radioName = "";
	var stored_data = "";
	
	//var skillset_arr = ListHandler.getAllOptionsDisplayText(oForm.skillset);
	
  	for(var i = 0; i < elements.length; i++) {
     
		var field_type = elements[i].type.toLowerCase();
		if (field_type == "radio") {
			var element_name = elements[i].getAttribute("name");
			//alert("radio | element_name: "+element_name);
			radioName = element_name+":";
			var radio_option = RadioHandler.getCheckedValue(element_name);
			//alert("radio | element_name: "+element_name+" | radio_option: "+radio_option);
		} else if (field_type == "hidden") {
			stored_data = elements[i].value;
		}

	}
	//data.push('skillset_list: ' + skillset_arr.join('\n'));
	data.push(radioName + radio_option);
	
	//alert(data.join('\n--------------------\n'));

	buildURL(data,pageName,stored_data); 
}
