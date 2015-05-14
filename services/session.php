<?php
session_start();
header("Content-Type: application/json");

// $_SESSION['username'] = "jagz";

if (isset($_SESSION['username'])) {
    $session = 1;

    $sessionArr = array('session' => $session,
        'username' => $_SESSION['username'],
        'name' => $_SESSION['name']);

    echo json_encode($sessionArr);
}

?>