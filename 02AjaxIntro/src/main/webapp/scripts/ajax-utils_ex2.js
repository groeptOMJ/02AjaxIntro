// Get the browser-specific request object, either for
// Firefox, Safari, Opera, Mozilla, Netscape, IE 8, or IE 7 (top entry);
// or for Internet Explorer 5 and 6 (bottom entry). 

function getRequestObject() {
  if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else if (window.ActiveXObject) { 
    return(new ActiveXObject("Microsoft.XMLHTTP"));
  } else {
    // Don't throw Error: this part is for very old browsers,
    // and Error was implemented starting in JavaScript 1.5.
    return(null); 
  }
}


// Make an HTTP request to the given address. 
// Display result in an alert box.

function ajaxAlert(address) {
	//use a local request object / never global
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showResponseAlert(request); };
  request.open("GET", address, true);
  request.send(null);
}

// Put response text in alert box.

function showResponseAlert(request) {
	//Wait for complete result + without errors
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    alert(request.responseText);
  }
}
// you could use the code below to avoid the message 
// "prevent this page from creating additional dialogs"
// but with JqueryUI it will be solved
function showResponseAlertWithoutNotice(request) {
	  if ((request.readyState == 4) &&
	      (request.status == 200)) {
		  setTimeout(function(){
			    alert(request.responseText);
			}, 1000); 
	  }
}


// Trick so that the Firebug console.log function will
// be ignored (instead of crashing) in Internet Explorer.
// Also see Firebug Lite and Faux Console if you want 
// logging to actually do something in IE.
// Firebug Lite: http://getfirebug.com/lite.html
// Faux Console: http://icant.co.uk/sandbox/fauxconsole/
 
try { console.log("Loading script"); 
} catch(e) { console = { log: function() {} }; }