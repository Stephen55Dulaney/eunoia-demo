
        // start user setings
        var maxColumn = 1;    // max cells in a row  
        var range = 2;    // range of num links to show
        // end user setings
        
        var rowsPerPage = 0;
        var currentpage = 0;
        var maxpremium = 0;
        var minpremium = 0;
        var sortBy = '';
        var sortOrder = 0;  
        var mindeductible = 0;        
        var maxdeductible = 0;        
        var minOOP = 0;        
        var maxOOP = 0;
        
        
        var compare_array = [];

       
       // the products information array                            
       var products = [
                     {"id":"1","maxOop":3750,"premium":150,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"AMed Plan 750","metal":"Platinum","deductible":5000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith", "refPlan": "Your employer's reference plan"} 
                     ,{"id":"2","maxOop":4000,"premium":155,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Value Option 10000","metal":"Bronze","deductible":10000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"3","maxOop":5000,"premium":159,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Foundation &#36;10,000","metal":"Gold","deductible":5000,"copay":20,"rating":"images/4_stars.png","plantype":"POS","provider":"Andy Collins","refPlan": ""}                     
                     ,{"id":"4","maxOop":5000,"premium":169,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Maximizer &#36;2,500","metal":"Platinum","deductible":2500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Susan White","refPlan": ""} 
                     ,{"id":"5","maxOop":6350,"premium":170,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Maximizer &#36;5,000","metal":"Gold","deductible":4000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"6","maxOop":6000,"premium":174,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Family Value &#36;1,000","metal":"Platinum","deductible":1000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jane Doe","refPlan": ""} 
                     ,{"id":"7","maxOop":5000,"premium":184,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Family Value &#36;2,500","metal":"Bronze","deductible":2500,"copay":20,"rating":"images/2_stars.png","plantype":"POS","provider":"Susan White","refPlan": ""} 
                     ,{"id":"8","maxOop":6000,"premium":195,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Family Value &#36;5,000","metal":"Gold","deductible":3000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"9","maxOop":6300,"premium":198,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Family Value &#36;7,500","metal":"Silver","deductible":4500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jane Doe","refPlan": ""} 
                     ,{"id":"10","maxOop":5500,"premium":250,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Foundation &#36;5,000","metal":"Platinum","deductible":5000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}                      
                     ,{"id":"11","maxOop":4000,"premium":161,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Apex &#36;1,000","metal":"Gold","deductible":1000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"12","maxOop":2000,"premium":251,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"HSA Value &#36;5,600","metal":"Platinum","deductible":5600,"copay":20,"rating":"images/4_stars.png","plantype":"POS","provider":"Jane Doe","refPlan": ""} 
                     ,{"id":"13","maxOop":3750,"premium":261,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Medical Plan 750","metal":"Silver","deductible":750,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"14","maxOop":5000,"premium":269,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Medical Plan 1000","metal":"Platinum","deductible":1000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"15","maxOop":4000,"premium":271,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Medical Plan 1500","metal":"Bronze","deductible":1500,"copay":20,"rating":"images/2_stars.png","plantype":"PPO","provider":"Jane Doe","refPlan": ""} 
                     ,{"id":"16","maxOop":5500,"premium":166,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Apex &#36;2,500","metal":"Platinum","deductible":2500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""} 
                     ,{"id":"17","maxOop":4000,"premium":288,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"M &#38; P Plan 1500","metal":"Platinum","deductible":1500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jane Doe","refPlan": ""}
                     ,{"id":"18","maxOop":4000,"premium":288,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Premiere 1000","metal":"Platinum","deductible":1000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"19","maxOop":6000,"premium":295,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Premiere 2500","metal":"Gold","deductible":2500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"20","maxOop":2000,"premium":296,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Premiere 5000","metal":"Silver","deductible":5000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"21","maxOop":3000,"premium":297,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Premiere 7500","metal":"Bronze","deductible":4500,"copay":20,"rating":"images/2_stars.png","plantype":"PPO","provider":"Susan White","refPlan": ""}
                     ,{"id":"22","maxOop":4000,"premium":299,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Premiere 10000","metal":"Platinum","deductible":4500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"23","maxOop":2000,"premium":306,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 500","metal":"Platinum","deductible":500,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"24","maxOop":4000,"premium":307,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 1000","metal":"Bronze","deductible":1000,"copay":20,"rating":"images/2_stars.png","plantype":"POS","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"25","maxOop":5000,"premium":308,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 2500","metal":"Silver","deductible":2500,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Susan White","refPlan": ""}
                     ,{"id":"26","maxOop":6300,"premium":351,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 5000","metal":"Platinum","deductible":5000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"27","maxOop":3000,"premium":352,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 7500","metal":"Gold","deductible":3500,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"28","maxOop":6000,"premium":363,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex SElect 10000","metal":"Platinum","deductible":4000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"29","maxOop":5800,"premium":374,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Value Option 2500","metal":"Platinum","deductible":2500,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"30","maxOop":2000,"premium":374,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Value Option 5000","metal":"Silver","deductible":5000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"31","maxOop":1000,"premium":379,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Value Option 7500","metal":"Bronze","deductible":3000,"copay":20,"rating":"images/3_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"32","maxOop":6000,"premium":167,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Maximizer &#36;1,000","metal":"Gold","deductible":1000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""} 
                     ,{"id":"33","maxOop":1000,"premium":420,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex HSA 1500","metal":"Bronze","deductible":1500,"copay":20,"rating":"images/2_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"34","maxOop":3500,"premium":425,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex HSA 2000","metal":"Platinum","deductible":2000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"35","maxOop":4000,"premium":439,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex HSA 3000","metal":"Gold","deductible":3000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"36","maxOop":5000,"premium":457,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex HSA 5000","metal":"Platinum","deductible":5000,"copay":20,"rating":"images/4_stars.png","plantype":"PPO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"37","maxOop":1000,"premium":467,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 2000 20 HSA RX","metal":"Gold","deductible":2000,"copay":20,"rating":"images/3_stars.png","plantype":"HMO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"38","maxOop":500,"premium":487,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 3000 HSA","metal":"Platinum","deductible":3000,"copay":20,"rating":"images/4_stars.png","plantype":"HMO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"39","maxOop":500,"premium":491,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 5000 35","metal":"Silver","deductible":5000,"copay":35,"rating":"images/3_stars.png","plantype":"HMO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"40","maxOop":500,"premium":586,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 2500 30 RX","metal":"Gold","deductible":2500,"copay":30,"rating":"images/4_stars.png","plantype":"HMO","provider":"Susan White","refPlan": ""}
                     ,{"id":"41","maxOop":500,"premium":607,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 3500 30 RX","metal":"Bronze","deductible":3500,"copay":30,"rating":"images/2_stars.png","plantype":"POS","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"42","maxOop":1000,"premium":608,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC 7500 35","metal":"Silver","deductible":5500,"copay":35,"rating":"images/2_stars.png","plantype":"HMO","provider":"Andy Collins","refPlan": ""}
                     ,{"id":"43","maxOop":1000,"premium":694,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"AA OMC 1500 RX","metal":"Gold","deductible":1500,"copay":30,"rating":"images/4_stars.png","plantype":"POS","provider":"Susan White","refPlan": ""}
                     ,{"id":"44","maxOop":1000,"premium":899,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Ex Health 5000 20 20","metal":"Bronze","deductible":5000,"copay":20,"rating":"images/2_stars.png","plantype":"HMO","provider":"Jack Smith","refPlan": ""}
                     ,{"id":"45","maxOop":1000,"premium":1100,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"OMC AA Plan B","metal":"Platinum","deductible":500,"copay":25,"rating":"images/3_stars.png","plantype":"HMO","provider":"Andy Collins","refPlan": ""}
                        ];

                                                                     
                                 
   function setProducts(){   
        sortBy = sortBy?sortBy:$('#product_sort').val() ;
        rowsPerPage = rowsPerPage?rowsPerPage:$('.product_pages button:first').html() ;
        desc = sortOrder>0?true:false; 
        currentpage = currentpage>0?currentpage:1; // if current page is less than first page...
        var totalLoop = rowsPerPage;
        var loop = 0; 
        var countCellData = 0; 
        var offset = 0;

        // create profiderFilter array to be used in the checkboxes filter exercise below
        var providerFilter = [];

        $(".provider").each(function() {
            if( $(this).is(':checked') )
            {
                providerFilter.push($(this).val());
            }
        })
        // end providerFilter array  
        
        // create metalFilter array to be used in the checkbox filter exercise below
        var metalFilter = [];
       
       //debugger;

        $(".metal").each(function() {
            if( $(this).is(':checked') )
            {
                metalFilter.push($(this).val());
            }
        })
        // end MetalFilter Array


       // create ratingFilter array to be used in the checkbox filter exercise below
        var ratingFilter = [];

        $(".rating").each(function() {
            if( $(this).is(':checked') )
            {
                ratingFilter.push($(this).val());
            }
        })
        // end ratingFilter Array                



        // empty content  
        $('#product_show').html('&nbsp;'); 
        // set select boxes to there selected as the var value
        $('#product_order').val(sortOrder);
        $('#product_sort').val(sortBy);
                             
        var filterdProducts = [];  // displayed products array
        //var new_arr3 = [];  // displayed products array
        
        var key = 0;
        // test loop 
       
        // set the products to only products that are checked in filters
        new_arr = $.grep(products, function(n, i){ // just use arr        
            return (n.metal == metalFilter[0] || n.metal == metalFilter[1] || n.metal == metalFilter[2] || n.metal == metalFilter[3]);
        })

        // set the products to only products that are checked in filters
        new_arr2 = $.grep(new_arr, function(n, i){ // just use arr
            return (n.rating == ratingFilter[0] || n.rating == ratingFilter[1] || n.rating == ratingFilter[2] || n.rating == ratingFilter[3]);
        })

        //debugger;

        // set the products to only products that are checked in filters
        new_arr3 = $.grep(new_arr, function(n, i){ // just use arr
            return (n.provider == providerFilter[0] || n.provider == providerFilter[1] || n.provider == providerFilter[2] || n.provider == providerFilter[3] || n.provider == providerFilter[4]);
        }) 
         
        
		
	   //filterdProducts = new_arr2;	
        // if needed premium range filter
        /*
        
        if(!minpremium && !maxpremium){
            filterdProducts = new_arr2;
        } else{
            $.each(new_arr2, function(i, object) {   
                var curentpremium = parseFloat(object.premium); 
                var premiumMinOk = true;
                var premiumMaxOk = true;
                //set variables for deductible
                var curentdeductible = parseFloat(object.deductible); 
                var deductibleMinOk = true;
                var deductibleMaxOk = true;
                // filter results match the premium range
                if(maxpremium || minpremium){
                    if(maxpremium && maxpremium<curentpremium){
                        premiumMaxOk = false;
                    }
                    if(minpremium && minpremium>curentpremium){
                        premiumMinOk = false;
                    }
                }  
        
        // filter for deductible
                if(maxdeductible || mindeductible){
                    if(maxdeductible && maxdeductible<curentdeductible){
                        deductibleMaxOk = false;
                    }
                    if(mindeductible && mindeductible>curentdeductible){
                        deductibleMinOk = false;
                    }
                }                  
                //  loop over list and get only related to new array

                 if( premiumMinOk && premiumMaxOk && deductibleMinOk && deductibleMaxOk){  
                    filterdProducts[key] = object;                  
                    key++;

                   
                    
                 }  
                  
            });
        }
	*/
	
	//debugger;
	
	$.each(new_arr2, function(i, object) {   
	                
        //set variables for deductible
        var curentdeductible = parseFloat(object.deductible); 
        var deductibleMinOk = true;
        var deductibleMaxOk = true;
        
        // filter for deductible
        if (maxdeductible || mindeductible) {
            if (maxdeductible < curentdeductible) {
                deductibleMaxOk = false;
            }
            if (mindeductible > curentdeductible) {
                deductibleMinOk = false;
            }
        }
            
        var oop = parseFloat(object.maxOop); 
            var oopMinOk = true;
            var oopMaxOk = true;
            
            // filter for deductible
            if (maxOOP || minOOP) {
                if (maxOOP < oop) {
                    oopMaxOk = false;
                }
                if (minOOP > oop) {
                    oopMinOk = false;
                }
        }

        //  loop over list and get only related to new array	
         if( deductibleMinOk && deductibleMaxOk && oopMinOk && oopMaxOk){  
            filterdProducts[key] = object;                  
            key++;            
            }  
	                  
    });          
            
            
        
    // get the amount of results
    var totalResults = filterdProducts.length; 
    if(totalResults>0){
        
        // if there are results - set selected order
       if( sortOrder ==0) //low to high 
       {
           
           filterdProducts.sort(function(a, b){
        	    var a1= a.premium, b1= b.premium;
        	    //var a1= a[sortBy], b1= b[sortBy];


        	    if(a1== b1){ return 0;}
        	    if(a1 > b1){ return 1;}
        	    if(a1 < b1){ return -1;}
    		});
        }

        else
        {
        	filterdProducts.sort(function(a, b){

    		    var a1= a.premium, b1= b.premium;
    		    //var a1= a[sortBy], b1= b[sortBy];
    		    if(a1== b1){ return 0;}
    		    if(a1 > b1){ return -1;}
    		    if(a1 < b1){ return 1;}
            });
        
        }
            
    }
        
      
        
        // show the amount of results 
        $('.product_results').html(totalResults);

        /****** start build pagination links ******/
        var totalpages = Math.ceil(totalResults/ rowsPerPage) ; // calculate the total pages 
         
        if(totalpages>1){ 
            // fix displayed page number if its biger then exist
            if (currentpage > totalpages) {
               // set current page to last page
               currentpage = totalpages;
            } 
            // set the offset of the list, based on current page 
            offset = (currentpage - 1) * rowsPerPage;  

            var pagination = '';
            var lastPage = 0;
            // set the min page of the list, based on the range 
            var minPage = 0;//parseFloat(currentpage) - parseFloat(range);
            minPage = minPage>0?minPage:1;
            // if not page 1, don't show back links
            if (currentpage > 1) {  
               // get previous page num  
               pagination += '<button type="button" name="'+(currentpage - 1)+'" class="product_button" planName="&#9668;" > <img src="images/selectorArrow_left_facing.png"> <\/button>';
               // show page 1 only if the min page isn`t page 1 (prevent page 1 to show twice)  
               if(minPage>1){
                    pagination += '<button type="button" name="1" class="product_button" planName="1" >1<\/button>';  
               }                 
            }  

            for (var x = minPage; x <= totalpages ; x++) {
               // validate page number 
               if (x <= totalpages) { 
                  lastPage = x;  
                  // if this is current page set its value to 0 (prevent click) and set class as selected
                  if (x == currentpage) {  
                     pagination += '<button type="button" name="0" class="product_button_selected" planName="'+x+'" >'+x+'<\/button>';
                  } else {                            
                     pagination += '<button type="button" name="'+x+'" class="product_button" planName="'+x+'" >'+x+'<\/button>';
                  } 
               } 
            }       
                    
            // if not on last page, show forward and last page links        
            if (currentpage != totalpages) {
               // get next page 
                var nextPage = parseFloat(currentpage) + 1;
                if(lastPage<totalpages){
                    // show page last page only if the min page isn`t last page (prevent page 1 to show twice)  
                    pagination += '<button type="button" name="'+totalpages+'" class="product_button" planName="'+totalpages+'" >'+totalpages+'<\/button>'; 
                }       
                pagination += '<button type="button" name="'+nextPage+'" class="product_button" planName="&#9658;" > <img src="images/selectorArrow_right_facing.png"><\/button>';    
            } 


            // update the html
            $('.product_pagination').html(pagination);  
        }

        else {
            // if no pages or just one page dont show pagination
            $('.product_pagination').html('<button type="button" name="0" class="product_button_selected" planName="1" >1<\/button>');
        }
        
        
        var offsetEnd = parseFloat(rowsPerPage) + parseFloat(offset);        
        /****** end build pagination links ******/
        
        // build cells content
        var cell = '<table border="0" cellpadding="2" cellspacing="0" width="100%" id="product_table">';
        cell += '<tr>'; 
        
        
        // get the keys is in the display pagination range
        var pageProducts = filterdProducts.slice(offset,offsetEnd);  
        // loop over the query list 
        $.each(pageProducts, function(i, object) {  
        
        // get min and max premium range for premium range filter slider   
        setpremiumRange(parseFloat(object.premium)); 
        setdeductibleRange(parseFloat(object.deductible));

		
        countCellData++; // flug to know if there is content                
        cell += '<td align="center" >'; 
        cell += '<div class="viewPlansContainer">';
        cell += '<div class="planHorizontalBox clearfix">';
        cell += '<div class="planHorizontalBoxColumnWrapper clearfix">';
        cell += '<div class="planHorizontalBoxColumn Small">';
        cell += '<div class="planCost"> &#36;'+object.premium+'<span> per month<\/span></div></br>';
        cell += '<div class="planRating"><img src="'+object.rating+'"/></div></br>'
        cell += '<input type="checkbox" id="'+object.id+'" name='+object.id+'_compare value="Yes" class="compare"> Compare'
        cell += '</div>';
        cell += '<div class="planHorizontalBoxColumn Small">';
        cell += '<div class="planVendorLogo"><img src="'+object.image+'" alt="'+object.planName+'" planName="'+object.planName+'" longdesc="'+object.id+'" border="0" ><\/div>';
        cell += '<div class="planName">'+object.planName+'<\/div>';
        cell += '</div>';
        cell += '<div class="planHorizontalBoxColumn Small"><div class="planDetailedCosts clearfix">';
        cell += '<p>OOP Max <span> &#36;'+object.maxOop+'<\/p>';
        cell += '<p>Deductible <span> &#36;'+object.deductible+'<\/p>';                
        cell += '<p>Metal level <span>'+object.metal+'<\/p>';
        cell += '<p>Providers <span>'+object.provider+'</span><\/p>';
        cell += '<p><span><b>'+object.refPlan+'</b></span><\/p>';
        cell += '<\/div><\/div>';
        cell += '<div class="planHorizontalBoxColumn">';
        cell += '<a class="button utilityButton"href="EMP_plan_details.html&#63;planid&#61;'+object.id+'">View Details</a>';
        cell += '<\/div>'
        cell += '<\/td>'; 
        totalLoop--;
        loop++;  
        // if the row ended but the table as unmach cells  number
         
        if(!totalLoop && loop){   
           for(var i=0;i<(maxColumn-loop);i++){  
           // add empty cell     
               cell += '<td>&nbsp;<\/td>';                       
           } 
        }  
        // determine if the row ended  
            
        if(loop==maxColumn ){    
          cell += '<\/tr>'; 
          loop = 0;
          if(totalLoop){          
              cell += '<tr>'; 
          }
        }  
    });

    cell += '<\/tr>'; 
    cell += '<\/table>'; 
    if(countCellData>0){
        // if exist content
        $('#product_show').html(cell);
        // set image onclick event
        $('#product_show img').click(function(){ 

        });
        
    }   
    setPagination();
}

 
  function setpremiumRange(premium){
      // find min and max premium range   
      if(maxpremium<premium){
          maxpremium = premium;
      }  
      if(minpremium>premium){
          minpremium = premium;
      }  
  }
 
   
  // premium range animation slider
  function premiumRangeSlider(){
        $( "#product_premium_slider" ).slider({  
            range: true,
            min: 0,
            max: maxpremium,
            values: [ minpremium, maxpremium ],
            slide: function( event, ui ) {
                // update the html for the slider value
                $( "#product_premium_range" ).html( "&#36;" +ui.values[ 0 ] + " -  &#36;" + ui.values[ 1 ] );
            }
            ,stop: function(event, ui) { 
                // update query on premium range
                currentpage = 0; 
                minpremium = ui.values[0];
                maxpremium = ui.values[1];
                displayProducts(); 
            }
        });
        // update the html for the slider value before its changes  
        $( "#product_premium_range" ).html( $( "#product_premium_slider" ).slider( "values", 0 ) + " - &#36;" + $( "#product_premium_slider" ).slider( "values", 1 ) );  
  }



// start adding in deductible slider function similar to premium range slider
  function setdeductibleRange(deductible){
      // find min and max deductible range   
      if(maxdeductible<deductible){
          maxdeductible = deductible;
      }  
      if(mindeductible>deductible){
          mindeductible = deductible;
      }  
  }

  
   
  // deductible range animation slider
  function deductibleRangeSlider(){
    $( "#slider-range" ).slider({  
        range: true,
        min: 0,
        max: maxdeductible,
        values: [ mindeductible, maxdeductible ],
        slide: function( event, ui ) {
            // update the html for the slider value
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            //$( "#amount" ).html( "&#36;" +ui.values[ 0 ] + " -  &#36;" + ui.values[ 1 ] );
        }
        ,stop: function(event, ui) { 
            // update query on deductible range
            currentpage = 0; 
            mindeductible = ui.values[0];
            maxdeductible = ui.values[1];

            displayProducts(); 
        }
    });


    // update the html for the slider value before its changes  
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  
  }
  
  
    
// start adding in OOP slider function similar to premium range slider
function setOOPRange(oop){
    // find min and max deductible range   
    if(maxOOP<deductible){
        maxOOP = oop;
    }  
    if(minOOP>deductible){
        minOOP = oop;
    }  
}
  
  
    
     
// OOP range animation slider
function OOPRangeSlider(){
      $( "#OOP_slider_range" ).slider({  
          range: true,
          min: 0,
          max: maxOOP,
          values: [ minOOP, maxOOP ],
          slide: function( event, ui ) {
              // update the html for the slider value
                      $( "#OOP_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              //$( "#OOP_amount" ).html( "&#36;" +ui.values[ 0 ] + " -  &#36;" + ui.values[ 1 ] );
          }
          ,stop: function(event, ui) { 
              // update query on deductible range
              currentpage = 0; 
              minOOP = ui.values[0];
              maxOOP = ui.values[1];

              displayProducts(); 
          }
      });


      // update the html for the slider value before its changes  
      $( "#OOP_amount" ).val( "$" + $( "#OOP_slider_range" ).slider( "values", 0 ) + " - $" + $( "#OOP_slider_range" ).slider( "values", 1 ) );
}
  
  
  
  // page button click
  function setPagination(){  
       $('.product_pagination button[name!=0]').click(function(){ 
            currentpage = $(this).attr('name');
            displayProducts(); 
       })  ; 
  
  }
  
  // animate list display
  function displayProducts(){     
         
        $('#product_show').fadeOut('slow', function() {
        // Animation complete
            setProducts();
            $('#product_show').fadeIn('slow');
      });
  } 

  $(document).ready(function() {

     setProducts();  
     deductibleRangeSlider();
     premiumRangeSlider();
     OOPRangeSlider();
      
     $('#product_sort').change(function(){  
         sortBy = $(this).val();
         currentpage = 0;
         sortOrder = 0;
         displayProducts(); 
     })
     
     $('#product_order').change(function(){  
         sortOrder  = $(this).val();
         currentpage = 0;
         displayProducts();
     }) 

    // start of code to add comparison items in the sliver
    $('.compare').change(function() {

         if (compare_array.length == 3) {
            alert("your compare chart is full");
         }

         else{
             compare_array.push(this.id);

             addCheckbox($('#txtName').val(this.id));
         }
    });
  
    function addCheckbox() {
      var container = $('#cblist');
      var inputs = container.find('input');
      var id = compare_array.length - 1;

      for (var i= 0, m = null; i < products.length; ++i) {
  

        if (products[i].id == compare_array[id]) {
            m = products[i];
            break;
        }
      }

    var prod_id = compare_array[id];
       var html = '<div id="'+m.id+'" class="selectedPlanBox"><div class="selectedPlanName"> '+m.planName+' <span><a class="closeIcon clearfix" href="#" onclick="hideClick(this.id);" id="'+m.id+'""></a> </span></div><div class="smallVendorLogo"><img src="'+m.sm_image+'" alt="'+m.planname+'"></div><div class="selectedPlanCost">$'+m.premium+' <span>per month</span></div></div>';
       container.append($(html));
    }
    // end the code to add the slivers  

// start code to add provider filter checkbox
$(".provider").change(function() {
     var providerArray = new Array();
     $(".provider").each(function() {
        if( $(this).is(':checked') )
        {
            providerArray.push($(this).val());
        }

    });
         providerFilter = providerArray;
         currentpage = 0;
         displayProducts();

});
//end code to add provider filter checkboxes 


//add the onChange event to handle the metal filter checkboxes
$(".metal").change(function() {
 var arr_sort = new Array();
 $(".metal").each(function() {
    if( $(this).is(':checked') )
    {
        arr_sort.push($(this).val());
    }

});
     metalFilter = arr_sort;
     currentpage = 0;
     displayProducts();
});
//end the onchange to handle the metal filter

//add the onChange event to handle the star rating filter checkboxes
$(".rating").change(function() {
 var ratingArray = new Array();
 $(".rating").each(function() {
    if( $(this).is(':checked') )
    {
        ratingArray.push($(this).val());
    }

});
     ratingFilter = ratingArray;
     currentpage = 0;
     displayProducts();

});
//end the onchange to handle the metal filter

      
 $('.product_pages button[value!=0]').click(function(){     
     $('.product_pages button').removeClass('product_button_selected').addClass('product_button');  
     $(this).addClass('product_button_selected');  
     currentpage = 0; 
     rowsPerPage  = $(this).val();  
     displayProducts();   
 }) ;
     
     $(".product_pages button[value="+rowsPerPage+"]").addClass('product_button_selected');  
});

 $(window).load(function(){ 
      $('html, body').animate({scrollTop: '0px'}, 0); 

 })

function hideClick(str) {

    newstr = str+"_compare";
    newstr2 = "#"+str;
    newstr3 = str;

    $('input[name='+str+'_compare]').attr('checked',false);
    $(newstr2).slideUp("slow");

    var index = $.inArray(newstr3, compare_array);
    if(index != -1) {
        compare_array.splice(index,1);
    }
};

