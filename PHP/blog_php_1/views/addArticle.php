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
	<div>
	<form method="post" action="adminController.php?action=<?=$_GET['action']?>&id=<?=$_GET['id']?>">
		<label>
			Название
			<input type="text" name="title" value="" class="form-item inpname" autofocus required>

		</label>
		<label>
			Дата
			<input type="date" name="date" value="" class="form-item inpdate" required>
			
		</label>

		<label>
			Содержание
			<textarea type="text" name="content" class="form-item inptxt" required>  </textarea>

		</label>
		
		<label>
			
			<input type="submit" value="Сохранить" class="btn inpbtn">
			
		</label>

	</form>
		
	</div>

	<footer> 
		<p> Мой Первый Блог <br> Copyright &copy; 2015</p>


	</footer>
</body>
</html>