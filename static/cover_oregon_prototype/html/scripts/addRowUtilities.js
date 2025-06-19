var U = {

    // For getting the document element by ID:
    $: function(id) {
        'use strict';
        alert("1");
        alert(id);
        if (typeof id == 'string') {
            alert("1.5");
            return document.getElementById(id);
        }
    },

    addEvent: function(obj, type, fn) {
        'use strict';
        alert("2");
        if (obj && obj.addEventListener) { // W3C
            alert("2.1");
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // Older IE
            alert("2.2");
            obj.attachEvent('on' + type, fn);
        }
    }   
}