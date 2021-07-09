<?php

//cors();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//echo '<h1>Image server</h1>';

$folder_name = 'uploads';

if(!empty($_FILES))
{
    if(isset($_FILES['file']['name']))
    {
        $urls="";
        $address = $_SERVER['HTTP_HOST'];
        $server_Protocol = $_SERVER['SERVER_PROTOCOL'];
        $protocol= "";
        if(strpos($server_Protocol,'http') !==false || strpos($server_Protocol,'HTTP')!==false)
            $protocol = "http://";
        else
            $protocol = "https://";
        foreach($_FILES as $files){
            if(empty($files)){
                return false;
            }

            foreach(array_combine($files['name'], $files['tmp_name']) as $name => $tmpName){
                if($name)
                {
                    $file_id = $_POST['id'];
                    $host = $_POST['address'];
                    $targetPath = dirname(__FILE__).DIRECTORY_SEPARATOR.$folder_name.DIRECTORY_SEPARATOR.$file_id.DIRECTORY_SEPARATOR;
                    $targetFile = $targetPath . $name;
                    if(!file_exists($targetPath)) {
                      $oldmask = umask(0);
                      mkdir($targetPath, 0777);
                      umask($oldmask);
                    }

                    if(move_uploaded_file($tmpName, $targetFile)){
                        $urls .=$host."$folder_name".'/'.$file_id.'/'.$name;
                        $urls .=";";
                    }
                    else{
                        http_response_code(404);
                        die();
                    }
                }
            }
            $urls = rtrim($urls,";");
            $response = ['urls'=>$urls, 'successful'=>true];
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
}
?>

<?php
function cors() {

  // Allow from any origin
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
      // you want to allow, and if so:
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      // header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }

  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          // may also be using PUT, PATCH, HEAD etc
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

      //exit(0);
  }

  echo "CORS Enabled!";
}
?>
