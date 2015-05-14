<?php

session_start();

header('Content-Type: application/json');

session_destroy();

$resArr = array('loggedout' => "Logged Out");

echo json_encode($resArr);

?>