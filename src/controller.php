<?php
// ini_set('display_errors',1);
// error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
// $contents = file_get_contents("php://input");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('.php', $uri);

$datainput = json_decode(file_get_contents("php://input"));

$requestMethod = $_SERVER["REQUEST_METHOD"];
$response = [];

function getAuthorizationHeader(){
        $headers = null;
        if (isset($_SERVER['Authorization'])) {
            $headers = trim($_SERVER["Authorization"]);
        }
        else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
            $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
        } elseif (function_exists('apache_request_headers')) {
            $requestHeaders = apache_request_headers();
            // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
            $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
            //print_r($requestHeaders);
            if (isset($requestHeaders['Authorization'])) {
                $headers = trim($requestHeaders['Authorization']);
            }
        }
        return $headers;
    }
    
function object_to_array($data) {
    if ((! is_array($data)) and (! is_object($data)))
        return 'xxx'; // $data;

    $result = array();

    $data = (array) $data;
    foreach ($data as $key => $value) {
        if (is_object($value))
            $value = (array) $value;
        if (is_array($value))
            $result[$key] = object_to_array($value);
        else
            $result[$key] = $value;
    }
    return $result;
}

$path = $data['path'];
$params = $data['params'];

switch ($requestMethod) {
    case 'POST':
        $data = $_POST;
        $path = $data['path'];
        $params = $data['params'];
        $post = json_decode($params);
        if (!$path) {
            $p = $_SERVER["QUERY_STRING"];
            if (strpos($p, 'Quotations/create') !== false){
                $path = 'Quotations/create';
            }
            if (strpos($p, 'Quotations/transportValue') !== false){
                $path = 'Quotations/transportValue';
            }
        }
        if (!$data) {
            if ($datainput){
                //$post =  object_to_array($datainput);
                $post =  json_encode($datainput);
            }
        }
        if ( $path == 'Account/weblogin') {            
            $username = $post->{'username'};
            $password = $post->{'password'};
            $url = @"http://fe-net.net:443/api/Account/weblogin?username=$username&password=$password";            
        } else {
            $url = 'http://fe-net.net:443/api/'.$path;            
        }

        $ch = curl_init();
        $authorization = getAuthorizationHeader(); 
        //$authorization = "Authorization: ".$_SERVER["HTTP_AUTHORIZATION"]; // Prepare the authorisation token
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FAILONERROR, true); // Required for HTTP error codes to be reported via our call to curl_error($ch)
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST,1 );
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

        // execute!
        $response = curl_exec($ch);
        if(!$response )
        {
            echo 'Curl error: ' . curl_error($ch);
        }

        // close the connection, release resources used
        curl_close($ch);
    break;
    case 'GET':
        $data = $_GET;
        $path = $data['path'];        
        $params = $data['params'];
        $getParameters = "";
        foreach($_GET as $query_string_variable => $value) {           
            $getParameters = $getParameters . "&$query_string_variable=$value";                       
        }             
        //$url = @"http://fe-net.net:443/api/$path&$SearchTerm";
        $url = @"http://fe-net.net:443/api/$path?$getParameters";  

        $ch = curl_init();
        $authorization = "Authorization: ".$_SERVER["HTTP_AUTHORIZATION"]; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FAILONERROR, true); // Required for HTTP error codes to be reported via our call to curl_error($ch)
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // execute!
        $response = curl_exec($ch);
        if(!$response )
        {
            echo 'Curl error: ' . curl_error($ch) . $url;
            var_dump($params);
            var_dump($_GET);
        }

        // close the connection, release resources used
        curl_close($ch);
        break;
    case 'OPTIONS':
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        break;
    default:
        //$response = $getaway->NotFoundResponse();
        break;
}



// do anything you want with your response
echo $response;

?>