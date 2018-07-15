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
		<div class="article">
			<h3> <?=$articles['title']?> </h3>
			<em>Опубликовано: <?=$articles['date']?> </em>
			<p><?=$articles['content']?> </p>
		</div>
		
		
	</div>

	<footer> 
		<p> Мой Первый Блог <br> Copyright &copy; 2015</p>


	</footer>
</body>
</html>