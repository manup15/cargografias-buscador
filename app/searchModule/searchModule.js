
//CARGOGRAFÍAS SEARCH MODULE
// ALL THE FUNCTIONS RETURN OBJECTS
//must receive an object
function httpRequest(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
          var obj = JSON.parse(xmlHttp.response);
          callback(obj);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
