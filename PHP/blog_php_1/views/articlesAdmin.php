<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title>BLOG</title>
	<link rel="stylesheet" type="text/css" href="../views/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h1>Мой первый блог </h1>	
		<a href="adminController.php?action=add"> Добавить статью </a>
		<a href="../index.php"> К списку всех статей </a>

		<div>

		<table class="admin-table">
		<tr>
			<th>Дата</th>
			<th>Заголовок</th>
			<th></th>
			<th></th>
		</tr>

		<?php foreach($articles as $a): ?>

			<tr>
				<td><?=$a['date']?></td>
				<td><?=$a['title']?></td>
				<td> <a href="adminController.php?action=edit&id=<?=$a['id']?>">Редактировать </a></td>
				<td> <a href="adminController.php?action=delete&id=<?=$a['id']?>"> Удалить </a></td>
			</tr>

		<?php endforeach ?>
	</table>
		
	
		
	</div>

	<footer> 
		<p> Мой Первый Блог <br> Copyright &copy; 2015</p>


	</footer>
</body>
</html>