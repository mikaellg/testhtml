<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$php_folder_project= "uploader/";
$parent_dir = "product-images/";
$uploadOk = 1;
$response = array(
	"status" => "error",
	"error" => true
);

if (!empty($_FILES)) {
	$target_file = basename($_FILES['file']['name']);

	// Check if file already exists
	//if (file_exists($target_file)) {
	//echo "Sorry, file already exists.";
	//$uploadOk = 0;

	// Check file size
	//if ($_FILES["file"]["size"] > 500000) {
	//	echo "Sorry, your file is too large.";
	//	$uploadOk = 0;
	//}

	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
		echo "Sorry, your file was not uploaded.";
		// if everything is ok, try to upload file
	} else {

		//Check if the parent directory already exists
		if (!is_dir($parent_dir)) {
			//Create our directory if it does not exist
			mkdir($parent_dir);
		}

		//Name of the directory for the product
		$dir_name = $parent_dir . $_POST["folderName"];

		//Check if the directory already exists
		if (!is_dir($dir_name)) {
			//Create our directory if it does not exist
			mkdir($dir_name);
		}

		if (move_uploaded_file($_FILES["file"]["tmp_name"], $dir_name . DIRECTORY_SEPARATOR . $target_file)) {
			$host  = $_SERVER['HTTP_HOST'];
			$protocol = stripos($_SERVER['SERVER_PROTOCOL'], 'https') === 0 ? 'https://' : 'http://';
			$response = array(
				"status" => "success",
				"error" => false,
				"url" => $protocol . $host . "/" . $php_folder_project . $dir_name . "/" . $target_file
			);			
		}
	}
	echo json_encode($response);
}
