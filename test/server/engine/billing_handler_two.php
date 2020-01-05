<?

require_once($_SERVER['DOCUMENT_ROOT']."/site_engine/site_engine.php");

$engine = new engine;
echo $engine->unitpay_handler(1);

?>