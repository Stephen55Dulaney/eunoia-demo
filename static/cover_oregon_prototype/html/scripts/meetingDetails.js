function meetingTest() {
g_Committee = [];

// create the table of Meetings and Events and display in the primary content area of the page

var url =window.location.search.substring(1);
var today = $.datepicker.formatDate('yy-mm-dd', new Date());


var meetingId = url.split("=")[1];

$("#meetingTitle").append(MeetingsEvents[meetingId].Meeting);

//Past Meetings
if (MeetingsEvents[meetingId].Date < today) {
    
    $("#meetingDetails").append( "<tr><td>Date:</td><td>" + MeetingsEvents[meetingId].DateDescription + "</td></tr><tr><td>Time:</td><td>"+ MeetingsEvents[meetingId].Time + "</td></tr><tr><td>Location:</td><td>" + MeetingsEvents[meetingId].Location + "</td></tr><tr><td>Address:</td><td>" + MeetingsEvents[meetingId].AddressLine1 + " " + MeetingsEvents[meetingId].AddressLine2 + "<br>" + MeetingsEvents[meetingId].City + ", "  + MeetingsEvents[meetingId].State + " " + MeetingsEvents[meetingId].Zip +  "</td></tr>");

    
    //Check if meeting has an audio file
    if (MeetingsEvents[meetingId].Audio == "") {
        
        $("#attendLinks").append("<p><img src='images/download_blue_icon.png'><a href='" + MeetingsEvents[meetingId].Transcript + "' target='_blank'> Download meeting materials</a></p>");
        }
       else if (MeetingsEvents[meetingId].Audio.indexOf('webex') >=0) {

        //Tracking code for google analytics entered here has not been tested with analytics tool to see if it works
        $("#attendLinks").append("<p><img src='images/audio_sm.png'><a href='" + MeetingsEvents[meetingId].Audio + " onclick='javascript:_gaq.push(['_trackEvent','outbound-article','http://coveroregonboard.webex.com']); target='_blank'>Replay the meeting</a></p><p><img src='images/download_blue_icon.png'> <a href='" + MeetingsEvents[meetingId].Transcript + "' target='_blank'> Download meeting materials</a></p>");
       }
    else {        
            $("#attendLinks").append("<p><img src='images/audio_sm.png'> <a href='" + MeetingsEvents[meetingId].Audio + "'> Replay the meeting</a></p><p><img src='images/download_blue_icon.png'> <a href='" + MeetingsEvents[meetingId].Transcript + "' target='_blank'> Download meeting materials</a></p>");
        }
    
    }

//Future Meetings    
else if (MeetingsEvents[meetingId].Date >= today) {
    
        $("#meetingDetails").append( "<tr><td>Date:</td><td>" + MeetingsEvents[meetingId].DateDescription + "</td></tr><tr><td>Time:</td><td>"+ MeetingsEvents[meetingId].Time + "</td></tr><tr><td>Location:</td><td>" + MeetingsEvents[meetingId].Location + "</td></tr><tr><td>Address:</td><td>" + MeetingsEvents[meetingId].AddressLine1 + " " + MeetingsEvents[meetingId].AddressLine2 + "<br>" + MeetingsEvents[meetingId].City + MeetingsEvents[meetingId].State + " " + MeetingsEvents[meetingId].Zip + "</td></tr><tr><td>Phone:</td><td>" + MeetingsEvents[meetingId].Phone + "</td></tr><tr><td>WebEx:</td><td>" + MeetingsEvents[meetingId].WebEx + "</td></tr><tr><td>Password:</td><td>" + MeetingsEvents[meetingId].Password + "</td></tr><tr><td>Toll Free Phone:</td><td>" + MeetingsEvents[meetingId].Telephone + "</td></tr><tr><td>Access Code:</td><td>" + MeetingsEvents[meetingId].AccessCode + "</td></tr>");

        $("#attendLinks").append("<p><img src='images/download_blue_icon.png'> <a href='' target='_blank'> Download meeting materials</a></p>");
    }

           
   
}

 

   
            





