//set page title
document.title = "Logs";
//clear module interval if set
if (window.modInterval) { 
    clearInterval(window.modInterval);
}

function getLogs() {
    //ajax request
    var xhttp = new XMLHttpRequest();
    //function when state changes
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200){
                //everything is going ok
                //logs.php generates text files
                
                //generate html code
                htmlContent = '<h3>Logs</h3>'+
                '<a href="mod/logs/apache_log.txt" target="_blank">Apache virtual host CustomLog (info, last 20)</a><br>'+
                '<a href="mod/logs/apt_history_log.txt" target="_blank">Apt history log (last 20)</a><br>'+
                '<a href="mod/logs/syslog.txt" target="_blank">Syslog (last 20)</a><br>';
                //populate module div
                document.getElementById("module").innerHTML = htmlContent;
            }
        }
    };
    //proceed with request
    xhttp.open("GET", "/mod/logs/logs.php", true);
    xhttp.send();
};

window.onload = getLogs();