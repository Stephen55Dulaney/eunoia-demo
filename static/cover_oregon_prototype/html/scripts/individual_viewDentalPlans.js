
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
        var compare_array = [];
       
       // the products information array                            
       var products = [
                     {"id":"13","maxOop":1000,"premium":224,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Dental Premier","hospital":"20","deductible":100,"copay":20,"carrier":"ABC Corp","plantype":"POS","provider":"Susan White"} 
                     ,{"id":"1","maxOop":750,"premium":162,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Dollar-Based Dental","hospital":"50","deductible":0,"copay":20,"carrier":"Family Insurance","plantype":"PPO","provider":"John Doe"} 
                     ,{"id":"2","maxOop":750,"premium":160,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Incentive 10 Dental","hospital":"50","deductible":50,"copay":20,"carrier":"Family Insurance","plantype":"PPO","provider":"Susan White"} 
                     ,{"id":"3","maxOop":1000,"premium":157,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Dental Value","hospital":"20","deductible":50,"copay":20,"carrier":"ABC Corp","plantype":"POS","provider":"Jack Smith"} 
                     ,{"id":"4","maxOop":1500,"premium":142,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"Individual 401","hospital":"20","deductible":50,"copay":20,"carrier":"OneMore Co","plantype":"PPO","provider":"Jack Smith"} 
                     ,{"id":"5","maxOop":1500,"premium":123,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Individual 501","hospital":"40","deductible":50,"copay":10,"carrier":"ExampleCo","plantype":"PPO","provider":"Jack Smith"} 
                     ,{"id":"6","maxOop":1500,"premium":100,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Individual 201","hospital":"20","deductible":50,"copay":20,"carrier":"ExampleCo","plantype":"PPO","provider":"Susan White"} 
                     ,{"id":"7","maxOop":1000,"premium":90,"image":"images/family_bkgr-01.png","sm_image":"images/family_sm-01.png","planName":"Bay Care","hospital":"0","deductible":0,"copay":0,"carrier":"Family Insurance","plantype":"HMO","provider":"Susan White"} 
                     ,{"id":"8","maxOop":1000,"premium":70,"image":"images/onemore_bkgr-01.png","sm_image":"images/onemore_sm-01.png","planName":"Apex","hospital":"50","deductible":50,"copay":20,"carrier":"OneMore Co","plantype":"PPO","provider":"Susan White"} 
                     ,{"id":"9","maxOop":2000,"premium":69,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Dental Ind 101 ","hospital":"20","deductible":0,"copay":20,"carrier":"ExampleCo","plantype":"PPO","provider":"John Doe"} 
                     ,{"id":"10","maxOop":1500,"premium":66,"image":"images/exampleco_bkgr-01.png","sm_image":"images/exampleco_sm-01.png","planName":"Individual 301","deductible":50,"copay":15,"carrier":"ExampleCo","plantype":"PPO","provider":"John Doe"} 
                     ,{"id":"11","maxOop":1000,"premium":60,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Ridge","hospital":"80","deductible":100,"copay":15,"carrier":"ABC Corp","plantype":"POS","provider":"Jack Smith"} 
                     ,{"id":"12","maxOop":1000,"premium":40,"image":"images/heart_bkgr-01.png","sm_image":"images/heart_sm-01.png","planName":"Bay","hospital":"50","deductible":50,"copay":50,"carrier":"ABC Corp","plantype":"PPO","provider":"John Doe"} 
                                                                        

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


      // create profiderFilter array to be used in the checkbos filter exercise belot
        var providerFilter = [];

        $(".provider").each(function() {
            if( $(this).is(':checked') )
            {
                providerFilter.push($(this).val());
            }
             })

        // end providerFilter array         

        // create carrierFilter array to be used in the checkbox filter exrecise below
        var carrierFilter = [];

        $(".carrier").each(function() {
            if( $(this).is(':checked') )
            {
                carrierFilter.push($(this).val());
            }
             })

                // end MetalFilter Array
       // create plantypeFilter array to be used in the checkbox filter exrecise below
        var plantypeFilter = [];

        $(".plantype").each(function() {
            if( $(this).is(':checked') )
            {
                plantypeFilter.push($(this).val());
            }
             })


                // end plantypeFilter Array   






        // empty content  
        $('#product_show').html('&nbsp;'); 
        // set select boxes to there selected as the var value
        $('#product_order').val(sortOrder);
        $('#product_sort').val(sortBy);
                             
       var filterdProducts = [];  // displayed products array

        var key = 0;
        // test loop 

        // set the products to only products that are checked in filters

        new_arr = $.grep(products, function(n, i){ // just use arr
           //return (n.metal == 'Silver' || n.metal == 'Gold' || n.metal == 'Bronze');

                   return (n.carrier == carrierFilter[0] || n.carrier == carrierFilter[1] || n.carrier == carrierFilter[2] || n.carrier == carrierFilter[3]);

            })

         // set the products to only products that are checked in filters
        new_arr2 = $.grep(new_arr, function(n, i){ // just use arr


                   return (n.plantype == plantypeFilter[0] || n.plantype == plantypeFilter[1] || n.plantype == plantypeFilter[2]);

            })   


         // set the products to only products that are checked in filters
        new_arr3 = $.grep(new_arr2, function(n, i){ // just use arr
 

                   return (n.provider == providerFilter[0] || n.provider == providerFilter[1] || n.provider == providerFilter[2] || n.provider == providerFilter[3]);

            })  


          
	/*
        // if needed premium range filter
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
			                
			                 var amxMinOk = true;
						                var amxMaxOk = true;
			                
			              /*  var amx = parseFloat(object.annualmax); 
						                var amxMinOk = true;
						                var amxMaxOk = true;
							        // filter for deductible
						                if (maxAMX || minAMX) {
						                    if (maxAMX < amx) {
						                        amxMaxOk = false;
						                    }
						                    if (minAMX > amx) {
						                        amxMinOk = false;
						                    }
			                }
			              */  
			                
			                
			                
			                
			                //  loop over list and get only related to new array
			
			                 if( deductibleMinOk && deductibleMaxOk && amxMinOk && amxMaxOk){  
			                    filterdProducts[key] = object;                  
			                    key++;
			
			                   
			                    
			                 }  
			                  
	            });
            
            
         var totalResults = filterdProducts.length;     
        // get the amount of results
       if(totalResults>0){
                   // if there are results - set selected order
                       
                      if( sortOrder ==0) //low to high
                      {
       
       			filterdProducts.sort(function(a, b){
       
       				 var a1= a.premium, b1= b.premium;
       
       							    if(a1== b1){ return 0;}
       							    if(a1 > b1){ return 1;}
       							    if(a1 < b1){ return -1;}
       
       
       
       			});
       		}
       		else
       		{
       		
       		filterdProducts.sort(function(a, b){
       		
       						 var a1= a.premium, b1= b.premium;
       		
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
                   pagination += '<button type="button" name="'+(currentpage - 1)+'" class="product_button" planName="&#9668;" ><img src="images/selectorArrow_left_facing.png"> <\/button>';
                   // show page 1 only if the min page isn`t page 1 (prevent page 1 to show twice)  
                   if(minPage>1){
                        pagination += '<button type="button" name="1" class="product_button" planName="1" >1<\/button>';  
                   }                 
                }  
                     
                // loop to show links to range of pages around current page
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
        }else{
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
                countCellData++; // flug to know if there is content                
                cell += '<td align="center" >'; 
                cell += '<div class="viewPlansContainer">';
                cell += '<div class="planHorizontalBox clearfix">';
                cell += '<div class="planHorizontalBoxColumnWrapper clearfix">';
                cell += '<div class="planHorizontalBoxColumn Small">';
                cell += '<div class="planCost"> &#36;'+object.premium+'<span> per month<\/span></div></br>';
                cell += '<input type="checkbox" id="'+object.id+'" name='+object.id+'_compare value="Yes" class="compare"> Compare'
                cell += '</div>';
                cell += '<div class="planHorizontalBoxColumn Small">';
                cell += '<div class="planVendorLogo"><img src="'+object.image+'" alt="'+object.planName+'" planName="'+object.planName+'" longdesc="'+object.id+'" border="0" ><\/div>';
                cell += '<div class="planName" style="width: 100%;">'+object.planName+'<\/div>';
                cell += '<br>'
                cell += '<div class="planName" style="width: 100%;">'+object.plantype+'<\/div>';
                cell += '</div>';
                cell += '<div class="planHorizontalBoxColumn Small"><div class="planDetailedCosts clearfix">';
                cell += '<p>Annual Maximum: <span> &#36;'+object.maxOop+'<\/p>';
                cell += '<p>Deductible: <span> &#36;'+object.deductible+'<\/p>';                
                cell += '<p>Office Visit: <span> &#36;'+object.copay+'<\/p>';
                cell += '<p>Providers: <span>'+object.provider+'<\/p>';   
                cell += '<\/div><\/div>';
                cell += '<div class="planHorizontalBoxColumn">';
                cell += '<a class="button utilityButton" href="dental_plan_details.html&#63;planid&#61;'+object.id+'">View Details</a>';
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
              alert('Product ID = '+$(this).attr('longdesc'));
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
// start adding in deductible slider fundtion similar to premium range slider
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

        //$( "#amount" ).html( $( "#slider-range" ).slider( "values", 0 ) + " - &#36;" + $( "#slider-range" ).slider( "values", 1 ) ); 

   
  }

// End adding in deductible slider fundtion similar to premium range slider


  
  // page button click
  function setPagination(){  
       $('.product_pagination button[name!=0]').click(function(){ 
            currentpage = $(this).attr('name');
            displayProducts(); 
       })  ; 
  
  }
  
  // animante list display
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
	  $('#product_order').change(function(){  
	                sortOrder  = $(this).val();
	                currentpage = 0;
	                displayProducts();
     }) 
      
   // start of code to add comparison itmes in the sliver

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

 //emd code to add provider filter checkbos      

//add the onChange event to handle the metal filter checkboxes
    $(".carrier").change(function() {
     var arr_sort = new Array();
     $(".carrier").each(function() {
        if( $(this).is(':checked') )
        {
            arr_sort.push($(this).val());
        }

    });
         carrierFilter = arr_sort;
         currentpage = 0;
         displayProducts();

});
 //end the onchange to handle the metal filter

 //add the onChange event to handle the star rating filter checkboxes
    $(".plantype").change(function() {
     var plantypeArray = new Array();
     $(".plantype").each(function() {
        if( $(this).is(':checked') )
        {
            plantypeArray.push($(this).val());
        }

    });
         plantypeFilter = plantypeArray;
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

