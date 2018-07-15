<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>BLOG</title>
	<link rel="stylesheet" type="text/css" href="views/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h1>Мой первый блог </h1>	
		<a href="controllers/adminController.php"> Панель администратора </a>
		<?php foreach($articles as $a): ?>
		<div class="article">
			<h3><a href="/controllers/articleController.php?id=<?=$a['id']?>"><?=$a['title']?></a> </h3>
			<em>Опубликовано: <?=$a['date']?> </em>
			<p><?=articles_intro($a['content'])?> </p>
		</div>
		<?php endforeach ?>
		
	</div>

	<footer> 
		<p> Мой Первый Блог <br> Copyright &copy; 2015</p>


	</footer>
</body>
</html>