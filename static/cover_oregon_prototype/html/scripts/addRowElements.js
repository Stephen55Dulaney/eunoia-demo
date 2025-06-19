/*
window.onload = function() {
    'use strict';
    alert("3");
    //U.addEvent is a cross-browser way to add an event handler to a DOM object.
    //U.$ is a shortcut to getElementById
    //Idea taken from Larry Ullman's "Modern Javascript: Develop and Design
    U.addEvent(U.$('addbtn'), 'click', addRow);
}
*/

/*function addRows() {
    'use strict';
    alert("4");
    //var numRowsToAdd = U.$('addnum').value;
    var numRowsToAdd = U.$('rowCounter').value;
    alert("numRowsToAdd: "+numRowsToAdd);
    /*if (numRowsToAdd = 0) {
        alert("YES");
    } else {
        alert("NO");
    }
    //var numRowsToAdd = "1";
    for(var i = 0; i < numRowsToAdd; i++){
        addRow();
    }
    addRow();
}*/
/*
function addRow(oForm) {
    'use strict';
    alert("5");
    /*
    var elements = oForm.elements;
    var element_name = "";
    for(var i = 0; i < elements.length; i++) {
        alert("name: "+elements[i].getAttribute("name"));
        alert("value: "+elements[i].getAttribute("value"));
    }
    */
    /*
    var sourceNode = document.querySelector('.formrow');
    var selectBox = document.getElementById('adjustments').getAttribute('name');
    var currentMonth = document.getElementById('current_month').getAttribute('name');
    var nextMonth = document.getElementById('next_month').getAttribute('name');
    alert("selectBox: "+selectBox+" | currentMonth: "+currentMonth+" | nextMonth: "+nextMonth);
    alert("sourceNode: "+sourceNode);
    alert("name: "+sourceNode.getAttribute('name'));
    var newRow = sourceNode.cloneNode(true);

    newRow.setAttribute('id')

    //every row except the first row should have a delete button associated with it.
    var delButton = document.createElement('input');
    delButton.className = 'delbtn';
    delButton.type = 'button';
    delButton.name = 'delbtn';
    delButton.value = 'Delete This Row';
    U.addEvent(delButton, 'click', function() {removeRow(delButton)});
    newRow.appendChild(delButton);
    var fieldset = U.$('adjustmentSelection');
    fieldset.appendChild(newRow);
}
*/
var counter = 1;

function addRow(oForm) {
    var sourceNode = document.querySelector('.formrow');
    var newRow = sourceNode.cloneNode(true);
    alert("newRow: "+newRow);
    //var newOptions = document.getElementById("template").cloneNode(true);
    //newOptions.style.display = "";
    var selectOptions = newRow.getElementById("adjustments").getAttribute("name");
    alert("selectOptions: "+selectOptions);
    //for (i = 0; i < selectOptions.length; i++) {
        selectOptions.name = "adjustments[]" + counter;
    //}
    newOptions.appendChild(newOptions);
    var fieldset = U.$('adjustmentSelection');
    fieldset.appendChild(newOptions);
    counter++;
}

function removeRow(obj) {
    'use strict';
    alert("6");
    var theRow = obj.parentNode;
    var theRowParent = theRow.parentNode;
    theRowParent.removeChild(theRow);
}