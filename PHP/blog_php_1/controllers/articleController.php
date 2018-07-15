<?php

	
	require_once("../db/db.php");
	require_once("../models/functionArticles.php");

	$link = db_connect();

	$articles = articles_get($link, $_GET['id']);

	include("../views/singleArticle.php");
?>