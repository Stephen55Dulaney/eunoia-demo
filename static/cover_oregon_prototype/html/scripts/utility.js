/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DOCUMENT INFORMATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~ NAME: utility.js
~~~~~~~~~~~~~ VERSION: v0.1
~~~~~~~~~~~~~ UPDATED: 12/12/2012
~~~~~~~~~~~~~ AUTHOR: DELOITTE (MIKE JACKSON) ROOT CODE: Ryan Fait - www.ryanfait.com
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    var checkboxHeight = "30";
    var radioHeight = "32";
    var selectWidth = "190";

    document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

    var Custom = {
      init: function() {
        var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
        for(a = 0; a < inputs.length; a++) {
          if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
            span[a] = document.createElement("span");
            span[a].className = inputs[a].type;

            if(inputs[a].checked == true) {
              if(inputs[a].type == "checkbox") {
                position = "0 -" + (checkboxHeight*2) + "px";
                span[a].style.backgroundPosition = position;
              } else {
                position = "0 -" + (radioHeight*2) + "px";
                span[a].style.backgroundPosition = position;
              }
            }
            inputs[a].parentNode.insertBefore(span[a], inputs[a]);
            inputs[a].onchange = Custom.clear;
            if(!inputs[a].getAttribute("disabled")) {
              span[a].onmousedown = Custom.pushed;
              span[a].onmouseup = Custom.check;
            } else {
              span[a].className = span[a].className += " disabled";
            }
          }
        }
        document.onmouseup = Custom.clear;
      },
      pushed: function() {
        element = this.nextSibling;
        if(element.checked == true && element.type == "checkbox") {
          this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
        } else if(element.checked == true && element.type == "radio") {
          this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
        } else if(element.checked != true && element.type == "checkbox") {
          this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
        } else {
          this.style.backgroundPosition = "0 -" + radioHeight + "px";
        }
      },
      check: function() {
        element = this.nextSibling;
        if(element.checked == true && element.type == "checkbox") {
          this.style.backgroundPosition = "0 0";
          element.checked = false;
        } else {
          if(element.type == "checkbox") {
            this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
          } else {
            this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
            group = this.nextSibling.name;
            inputs = document.getElementsByTagName("input");
            for(a = 0; a < inputs.length; a++) {
              if(inputs[a].name == group && inputs[a] != this.nextSibling) {
                inputs[a].previousSibling.style.backgroundPosition = "0 0";
              }
            }
          }
          element.checked = true;
        }
      },
      clear: function() {
        inputs = document.getElementsByTagName("input");
        for(var b = 0; b < inputs.length; b++) {
          if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
          } else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 0";
          } else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
          } else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
            inputs[b].previousSibling.style.backgroundPosition = "0 0";
          }
        }
      }
    }

    window.onload = Custom.init;