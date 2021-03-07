<?php

shell_exec("tail -n 20 /var/www/html/apache/access.log > apache_log.txt");
shell_exec("tail -n 20 /var/log/apt/history.log > apt_history_log.txt");
shell_exec("tail -n 20 /var/log/syslog > syslog.txt");

?>