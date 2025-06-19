function submitServiceRequestForm()
    {
        //event.preventDefault(); //preventDefault stops the page from reloading
        var issue = "";
        var detail = "";
        var values = {};
        var formArray = []
$.each($('#serviceRequest').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    // console.log(field.name + " value " + field.value);
    formArray.push(field.value);
    
});
// Set the variables to the form values submited by the user

    issue = formArray[0];
    detail = formArray[1];
   
}

