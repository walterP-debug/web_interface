<html>

<head>
    <title></title>    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" rel="stylesheet">
</head>
    
    
<body>

    <div id="topbar">
            <a href="#" onclick="loadMod('home')">Home</a>
            <a href="#" onclick="loadMod('logs')">Logs</a>        
    </div>
    
    <div id="page">
        
        <div id="module"></div>
        
        <script type="text/javascript">
            //loadMod : load module content
            function loadMod(modarg){
                //module id : alphanumeric, 3-10 chars
                if(/^([a-z0-9]{3,10})$/.test(modarg) == false){
                    //go home if argument does not check
                    modarg = "home";
                }
                //example : mod/example/example.js
                //load module main script in module div
                var script = document.createElement("script");
                script.src = '/mod/'+modarg+'/'+modarg+'.js';
                document.getElementById("module").appendChild(script);
            };
            //start with module home
            window.onload = loadMod("home");
        </script>
        
    </div>
    
</body>
</html>