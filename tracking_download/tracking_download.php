<?php
//$conn = mysqli_connect("localhost", "root", "", "boom_db");
 $conn = mysqli_connect("da001.vhost.vn", "ninjahu1_ninjadb","ninjahuyenthoai.vn", "ninjahu1_ninjadb");



if($_POST["type"] == "ios"){
    click_ios();
}

if($_POST["type"] == "android"){
    click_android();
}

if($_POST["type"] == "pc"){
    click_pc();
}

if($_POST["type"] == "apk"){
    click_apk();
}



function click_ios(){
    global $conn;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $currentTime =  date('Y/m/d H:i:s');

		// echo "ios";
      
		$sql = "INSERT INTO btn_ios ( created_at) VALUE ('$currentTime')";
		if ($conn->query($sql) === TRUE) {
			echo "ios";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

    exit;
}
function click_android(){
    global $conn;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $currentTime =  date('Y/m/d H:i:s');
      
		$sql = "INSERT INTO btn_android ( created_at) VALUE ('$currentTime')";
		if ($conn->query($sql) === TRUE) {
			echo "android";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		// echo "android";

    exit;
}

function click_pc(){
    global $conn;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $currentTime =  date('Y/m/d H:i:s');
      
		$sql = "INSERT INTO btn_pc ( created_at) VALUE ('$currentTime')";
		if ($conn->query($sql) === TRUE) {
			echo "pc";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		// echo "pc";

    exit;
}


function click_apk(){
    global $conn;
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $currentTime =  date('Y/m/d H:i:s');
      
		$sql = "INSERT INTO btn_apk ( created_at) VALUE ('$currentTime')";
		if ($conn->query($sql) === TRUE) {
			echo "apk";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		// echo "pc";

    exit;
}

?>