
if(typeof(Storage)!=="undefined")
  {

  document.getElementById("result").innerHTML="Last name: " + localStorage.lastname;
  alert("hello";);
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
