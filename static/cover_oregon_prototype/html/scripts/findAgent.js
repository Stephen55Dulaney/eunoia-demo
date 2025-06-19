  function agentsCompleted(response, method)
        {
            var jsonArray = eval("(" + response + ")");
      //alert(response);

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      if (jsonArray != null)
      {

          var mapOptions = { zoom: 11, center: new google.maps.LatLng(45.52345, -122.67620), mapTypeId: google.maps.MapTypeId.ROADMAP }

              var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
          }

        //alert(jsonArray.length);
      for (var i = 0; i < jsonArray.length; i++)
       {
          var address = jsonArray[i].address_line_1 + ', ' + jsonArray[i].city + ', '+ jsonArray[i].state +', ' +  jsonArray[i].zip;

        infoarguement = '<B>'+ jsonArray[i].first_name+' ' +jsonArray[i].last_name+'</B></BR>'+  jsonArray[i].address_line_1 + ', ' + jsonArray[i].city + ', '+ jsonArray[i].state +', ' +  jsonArray[i].zip + '</BR></BR>'+ jsonArray[i].email +'</BR>'+ jsonArray[i].website+'</BR></BR><B>Languages Spoken :</B></BR><B>Agent ID#:</B>' +jsonArray[i].agent_id;
        geocoder = new google.maps.Geocoder();


        geocoder.geocode({'address':address}, function(infoarguement, i){
                return(function(results, status){
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latlng = results[0].geometry.location;

                marker = new google.maps.Marker({
                                                    position: latlng,
                                                    map: map
                                                });

                                                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                                    return function () {
                                                        infowindow.setContent(infoarguement);
                                                        infowindow.open(map, marker);
                                                    }
                    })(marker, i));
                //alert(infoarguement);

                    }
                });
            }(infoarguement, i));


            } // for

        }

    function agentsCompleted2(response, method)
            {
                var jsonArray = eval("(" + response + ")");
          //alert(response);

          var infowindow = new google.maps.InfoWindow();

          var marker, i;

          if (jsonArray != null)
          {

              var mapOptions = {"AK": [new google.maps.LatLng(70.0187, -141.0205),
                            new google.maps.LatLng(70.1292, -141.7291),
              new google.maps.LatLng(70.4515, -144.8163)]}
              //var mapOptions = { zoom: 11, center: new google.maps.LatLng(45.52345, -122.67620), mapTypeId: google.maps.MapTypeId.ROADMAP }

                  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }


        }

function initialize()
{
  _appService.GetAgents(agentsCompleted, onFail);

}

