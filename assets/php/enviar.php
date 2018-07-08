<?php
//Database Config
$server = "localhost";
$user = "root";
$pass = "";
$bd = "sergioveloza";
//Request
$nombres=$_REQUEST['name'];
$email=$_REQUEST['email'];
$mensaje=$_REQUEST['message'];
$conex=mysqli_connect($server,$user,$pass,$bd);
 if (!$conex) {
  die("Error: ".mysqli_connect_error());
 }
$query = "insert into contacto values('','".$nombres."','".$email."','".$mensaje."','NOW()')";

if(mysqli_query($conex, $query))
{
    echo "Gracias por comunicarse, su mensaje fue enviado correctamente";
    echo '<a href="..\..\index.html">Volver a SergioVeloza.com</a>'; 
}
else{
    echo "Error: ".mysqli_error($conex);
}
mysqli_close($conex);

?>