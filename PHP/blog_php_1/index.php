<?php 
	
	require_once("db/db.php");
	require_once("models/functionArticles.php");

	$link = db_connect();
	$articles = articles_all($link);

	include("views/allArticles.php");
?>