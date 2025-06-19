     function meetingTest() {



g_Committee = [];
dateArray = [];
var showLess = 1;
var firstsortFunction = function (a, b) {
  return Date.parse(b.Date) - Date.parse(a.Date);
};


// create the table of Meetings and Events and display in the primary content area of the page
var sortedArray = MeetingsEvents.sort(firstsortFunction);
// console.log(MeetingsEvents.sort(firstsortFunction));

if (showLess ) {
  var shortArray = sortedArray.slice(0,15);
  $("#showAll").append("<a href='#'>View more meetings</a>")
  // alert(shortArray.length);
}
else {
  var shortArray = sortedArray;
  alert("here");
}
$.each(shortArray, function(index ){ 
  $("#MeetingRow").append("<tr><td>" + shortArray[index].DateDescription + "</td><td>" + shortArray[index].Time + "</td><td>" + shortArray[index].Meeting + "</td><td><a href='CORP_meeting_detail.html?id=" + shortArray[index].ID + "'>" + shortArray[index].Details + "</a></td><td></td></tr>");
});
 // alert(showLess);


// create the checkbox list that will be displayed in Type of Meetings filter control in left hand nav

$.each(MeetingsEvents, function(index) {
  
    var iCommittee = MeetingsEvents[index].Committee;
    if ($.inArray(iCommittee, g_Committee) == -1) {

        g_Committee.push(iCommittee);
        

    }
});


// update the page to display the list

$.each(g_Committee, function(i) {
    $("#committeeList").append('<li><input class="committeeList" name="committee" value="' + g_Committee[i] + '" type="checkbox" checked="unchecked">' + g_Committee[i] + '</li>');

});

        // create metalFilter array to be used in the checkbox filter exercise below
        var committeeFilter = [];

        $(".committeeList").each(function() {
            if( $(this).is(':checked') )
            {
                committeeFilter.push($(this).val());
              //  alert(committeeFilter.length);
            }
             })
        // end ratingFilter Array


//add the onChange event to handle the committeeList filter checkboxes


$('#committeeList').change(function() {
    var arr_sort = new Array();
     $(".committeeList").each(function() {
        if( $(this).is(':checked') )
        {
            arr_sort.push($(this).val());
        }

    });
         committeeFilter = arr_sort;
         //alert(dateArray.length);
         if (dateArray == "") {
          //alert("no date array");
          setMeetings(committeeFilter,MeetingsEvents);
         }
         else {
         setMeetings(committeeFilter,dateArray);
         //alert("Committee Filter Length " + committeeFilter.length);
       }
});

//add the onChange event to handle the fromDate and toDate filters are changed

$('#fromDate').change(function() {

    var iFini = document.getElementById('fini').value;
    var iFfin = document.getElementById('ffin').value;
    var arr_date = new Array();
    var counter = 0;
    
    $("#MeetingRow").html('');
    $("#MeetingRow").append("<tr><th>Date</th><th>Time</th><th>Meeting</th><th></th><th></th></tr>");
    // alert("need from date here help: " + iFini + " Date: " + iFfin);
    // alert(iFfin=="");
    $.each(MeetingsEvents, function(index ) {
    
    if (iFfin == "") {
//alert("here " + MeetingsEvents[index].Date);
         if ((MeetingsEvents[index].Date >= iFini )  ) {
            arr_date.push(MeetingsEvents[index]);
            counter = counter + 1;       
   }

    }
    else {
      //alert("here");
          if ((MeetingsEvents[index].Date >= iFini )  ) {
            arr_date.push(MeetingsEvents[index]);
            counter = counter + 1;       
   }

    }
    if ((MeetingsEvents[index].Date >= iFini ) && ((MeetingsEvents[index].Date <= iFfin)) ) {
      //alert("Committee Filter Length " + committeeFilter.length);
          arr_date.push(MeetingsEvents[index]);
          counter = counter + 1;
   }
    });
// alert(counter);
// alert(" Length of Date: " + arr_date.length);
          dateArray = arr_date;
         setMeetings(committeeFilter,dateArray);
if (counter == 0) {
      $("#MeetingRow").append("<tr><td  colspan='3'>no events have been found in this date range</td></tr>");
    }

});

 $('#toDate').change(function() {
    
    var iFini = document.getElementById('fini').value;
    var iFfin = document.getElementById('ffin').value;
    var arr_date = new Array();
    $("#MeetingRow").html('');
    $("#MeetingRow").append("<tr><th>Date</th><th>Time</th><th>Meeting</th><th></th><th></th></tr>");
    var count = 0;  
    $.each(MeetingsEvents, function(index ) {    
      if (iFini=="") {
         if (MeetingsEvents[index].Date <= iFfin){
//alert(MeetingsEvents[index].Date <= iFfin);
              arr_date.push(MeetingsEvents[index]);
              count = count + 1;
         }
      }
      else {
     if ((MeetingsEvents[index].Date >= iFini ) && (MeetingsEvents[index].Date <= iFfin)) {      
      arr_date.push(MeetingsEvents[index]);     
      count = count + 1;
   }}
    });
    dateArray = arr_date;
         setMeetings(committeeFilter,dateArray);
    if (count == 0) {
      $("#MeetingRow").append("<tr><td >no events have been found in this date range</td></tr>");
    }

});

//set the meeting list after the change to the filter selection


var sortFunction = function (a, b) {
  return Date.parse(b.Date) - Date.parse(a.Date);
};

    
    function setMeetings(theMeetings,theEventList) {       
        
        var tempArray = [];
        var tempArray2 = [];
       

        // alert(theEventList.length);
         
// console.log(theEventList.sort(sortFunction));


        $.each(theMeetings, function(index) {
           // alert(theMeetings[index]);

            $.each(theEventList, function(jindex) {


              if (theEventList[jindex].Committee == theMeetings[index]) {
                tempArray.push(theEventList[jindex]);
                // alert("temp array: " + tempArray.length);
                // may need to do a push to add element to array then sort the array then show the array
               
              }
            })            
        });
        // reset the page, sort the array by date and display the items in the table
        tempArray2 = tempArray.sort(firstsortFunction);
        $("#MeetingRow").html('');
        $("#MeetingRow").append("<tr><th>Date</th><th>Time</th><th>Meeting</th><th></th><th></th></tr>");
        $.each(tempArray2, function(k) {
          // alert("made it here " + tempArray[k].Date); 
            $("#MeetingRow").append("<tr><td>" + tempArray2[k].DateDescription + "</td><td>" + tempArray2[k].Time + "</td><td>" + tempArray2[k].Meeting + "</td><td><a href='CORP_meeting_detail.html?id=" + tempArray2[k].ID + "'>" + tempArray2[k].Details + "</a></td><td></td></tr>");
        });

 
    }


    //create function to show more or less items
     $("#showAll").click(function(){

      // do something
      //alert( $(this).attr("id"));
      if (showLess) {
        showLess = 0;
        $("#showAll").html('');
        $("#MeetingRow").html('');
        $("#MeetingRow").append("<tr><th>Date</th><th>Time</th><th>Meeting</th><th></th><th></th></tr>"); 
            $.each(sortedArray, function(index ){ 
                  $("#MeetingRow").append("<tr><td>" + sortedArray[index].DateDescription + "</td><td>" + sortedArray[index].Time + "</td><td>" + sortedArray[index].Meeting + "</td><td><a href='CORP_meeting_detail.html?id=" + sortedArray[index].ID + "'>" + sortedArray[index].Details + "</a></td><td></td></tr>");
});
        $("#showAll").append("<a href='#'>View fewer meetings</a>")
      }
      else if (showLess == 0) {
        showLess = 1;   
        $("#showAll").html(''); 
        $("#MeetingRow").html('');
        $("#MeetingRow").append("<tr><th>Date</th><th>Time</th><th>Meeting</th><th></th><th></th></tr>");
          $.each(shortArray, function(index ){ 
            $("#MeetingRow").append("<tr><td>" + shortArray[index].DateDescription + "</td><td>" + shortArray[index].Time + "</td><td>" + shortArray[index].Meeting + "</td><td><a href='CORP_meeting_detail.html?id=" + shortArray[index].ID + "'>" + shortArray[index].Details + "</a></td><td></td></tr>");
});
        $("#showAll").append("<a href='#'>View more meetings</a>")
      }



    });  
   
  }





  