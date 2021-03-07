<?php

$out1 = shell_exec("date");
$out2 = shell_exec("hostname");
$out3 = shell_exec("uptime -p");
$out4 = shell_exec("df / -h | grep -i /dev/ | tr -s ' '");
$out5 = shell_exec("free -m | grep -i mem | tr -s ' '");


$arr = array('date' => $out1, 'hostname' => $out2, 'uptime' => $out3, 'df' => $out4, 'free' => $out5);
echo json_encode($arr);

?>