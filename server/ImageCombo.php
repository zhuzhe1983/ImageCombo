<?php
$images = array();
$urls = array();
$datas = array();
foreach($_GET as $key => $val){
	$str = str_replace('_','.',$key);
	if($str!='.'){
		$urls[] = $str;
	}
}

//TODO: add file type detect.
for($i=0;$i<count($urls);$i++){
	$url = $urls[$i];
	$data[$url] = "data:image/png;base64,".base64_encode(file_get_contents($url));
}

echo("var ImageCombo = ".json_encode($data));

exit();
?>