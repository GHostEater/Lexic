<?php

session_start();

header("Content-Type: application/json");

$host = 'localhost';
$db = 'lexic';
$db_user = 'root';
$db_pass = '';
$con = mysqli_connect($host,$db_user,$db_pass,$db);

$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM `admin` WHERE username = '$username' AND password = '$password';";
$result = mysqli_query($con,$query);
$n_rows = mysqli_num_rows($result);

if ($n_rows = 0){
    $loginErr  = array('error' => "Incorrect Username/Password");
    echo json_encode($loginErr);
}
else {
    while ($row = mysqli_fetch_assoc($result)) {

        $_SESSION['username'] = $username;
        $_SESSION['name'] = $row['name'];

        $loginArr = array('username' => $username,
            'name' => $row['name']);
        echo json_encode($loginArr);
    }
}
?>