function postFormData(arrayFieldNames) {
     var argname = "";
     var value = "";

	var query = window.location.search.substring(1); 
	//alert("query: "+query);
	var dataArrayPasser = [];
	dataArrayPasser = query.split('|');
	var storedData = [];
	//alert("dataArrayPasser.length: "+dataArrayPasser.length);
	for (var sj = 0; sj < dataArrayPasser.length; sj++) {
		//alert("sj: "+sj+" >> value: "+dataArrayPasser[sj]);
		var pos = dataArrayPasser[sj].indexOf(':'); 
		if (pos >= 0) {
			argname = dataArrayPasser[sj].substring(0,pos); 
			value = dataArrayPasser[sj].substring(pos+1); 
			if (value.indexOf("+") != -1)
				value = value.replace(/\+/g," ");
			//alert("1 - argname: "+sj+": "+argname);
			//alert("1 - value: "+sj+": "+value);
			storedData.push(argname + ':' + value);
		}
	}
	//alert(storedData.join('\n--------------------\n'));

	//fieldFiller(query);
	findCommon(arrayFieldNames, storedData);
}

function findCommon(arrayFieldNames, dataArrayPasser) {
    //alert("dataArrayPasser.length: "+dataArrayPasser.length);
    var commonElements = [];
    var argname = "";
    var value = "";

    for (var m=0;m<dataArrayPasser.length;m++) { 
    	var pos = dataArrayPasser[m].indexOf(':'); 
        if (pos >= 0) {
        	argname = dataArrayPasser[m].substring(0,pos); 
            value = dataArrayPasser[m].substring(pos+1);
            for (var pj = 0; pj < arrayFieldNames.length; pj++) {
            	if (argname.indexOf(arrayFieldNames[pj]) != -1) {
                	commonElements.push(argname+":"+value);
                	popFields(argname,value,dataArrayPasser);
              	}
            }
        }
    }
    //alert(commonElements.join('\n--------------------\n'));
}