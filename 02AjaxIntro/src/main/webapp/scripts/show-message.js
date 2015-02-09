function getRequestObject() {
  if (window.ActiveXObject) {
    return(new ActiveXObject("Microsoft.XMLHTTP"));
  } else if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else {
    return(null);
  }
}
//correct approach - define a request object per request
function sendRequest() {
	  var request = getRequestObject();
	  request.onreadystatechange = 
	    function() { handleResponse(request); };
	  request.open("GET", "message-data.html", true);
	  request.send(null);
	}

function handleResponse(request) {
	  if (request.readyState == 4) {
	    alert(request.responseText);
	  }
}
//Wrong approach but widely used - risk for request/response mixup
/*
var request;
function sendRequest() {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { handleResponse(request); };
  request.open("GET", "message-data.html", true);
  request.send(null);
}

function handleResponse() {
  if (request.readyState == 4) {
    alert(request.responseText);
  }
}
*/
