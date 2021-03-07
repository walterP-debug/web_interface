//set page title
document.title = "Home";
//clear module interval if set
if (window.modInterval) { 
    clearInterval(window.modInterval);
}


function getHome() {
    //ajax request
    var xhttp = new XMLHttpRequest();
    //function when state changes
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200){
                //everything is going ok
                //parse json response
                response = xhttp.responseText;
                respObj = JSON.parse(response);
                
                //process some response strings
                dfstring = respObj.df;
                dfarray = dfstring.split(" ");                
                freestring = respObj.free;
                freearray = freestring.split(" ");
                
                //generate html code
                htmlContent = '<h3>Welcome to '+respObj.hostname+'</h3>'+respObj.date+'<br>'+
                              respObj.uptime+'<br>Disk : '+dfarray[2]+' of '+dfarray[1]+' used<br>'+
                              'Ram : '+freearray[2]+'M of '+freearray[1]+'M used';
                
                //populate module div
                document.getElementById("module").innerHTML = htmlContent;
            }
        }
    };
    //proceed with request
    xhttp.open("GET", "/mod/home/home.php", true);
    xhttp.send();
};

//on load then every 30 seconds
window.onload = getHome();
window.modInterval = setInterval(getHome, 30000);