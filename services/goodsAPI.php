<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'lexic';
$db_user = 'root';
$db_pass = '';
$con = mysqli_connect($host,$db_user,$db_pass,$db);

$query = "SELECT * FROM `goods` WHERE type = 1";
$result = mysqli_query($con,$query);

$i = 0;
while ($row = mysqli_fetch_assoc($result)){
        $resArr[$i] = array('item_id'=>$row['sn'],
                        'name'=>$row['name'],
                        'price'=>$row['price'],
                        'amount'=>$row['amount']);
    $i = $i+1;
}
echo json_encode($resArr);