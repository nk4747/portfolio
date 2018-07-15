<?php 
	
	require_once("../db/db.php");
	require_once("../models/functionArticles.php");

	$link = db_connect();

	if(isset($_GET['action'])){
		$action = $_GET['action'];
	 } else { 
		$action = "";
	}


	if($action == "add"){
		if(!empty($_POST)){

		articles_new($link, $_POST['title'],  $_POST['date'], $_POST['content']);
		header("Location: adminController.php");

		}

		include("../views/addArticle.php");

		}else if($action == "edit"){
			if(!isset($_GET['id']))
				header("Loction: adminController.php");
			$id = (int)$_GET['id'];

			if(!empty($_POST) && $id > 0){

			articles_edit($link, $id, $_POST['title'],  $_POST['date'], $_POST['content']);
			header("Location: adminController.php");
		}

		$article = articles_get($link, $id);
		include("../views/editArticle.php");

		} else if($action == 'delete'){

			$id = $_GET['id'];
			$article = articles_delete($link, $id);
			header("Location: adminController.php");


		} 

		else{

			$articles = articles_all($link);
			include("../views/articlesAdmin.php");
		}

		
?>