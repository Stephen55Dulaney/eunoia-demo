
      function fieldLoader() {
        
        
 
        if(typeof(Storage)!=="undefined")
  {
 
  $('#firstname').val(localStorage["firstname"]);
  $('#middlename').val(localStorage["middlename"]);
  $('#lastname').val(localStorage["lastname"]);
  $('#email').val(localStorage["email"]);

  alert( $("#firstname").val());

  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
      }



function saveContactInfo () {
    
    var fieldValue = document.getElementById('firstname').value;
    localStorage.setItem('firstname', fieldValue);
    localStorage.setItem('middlename',document.getElementById('middlename').value);
    localStorage.setItem('lastname',document.getElementById('lastname').value);
    localStorage.setItem('selSuffix',document.getElementById('selSuffix').value);
    localStorage.setItem('email',document.getElementById('email').value);


window.location.href = "primary_contact_additional_info.html";


    }
