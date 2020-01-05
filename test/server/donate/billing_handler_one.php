<?

require_once($_SERVER['DOCUMENT_ROOT']."/site_engine/engine.php");

$engine = new engine;
echo $engine->unitpay_handler(0);

?>