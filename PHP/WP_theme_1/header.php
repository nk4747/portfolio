<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Test
 */
 
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header>

		<div class=" wrp container">
				<figure class="logo " >
			
				<img src="http://wp.ru/wp-content/themes/Testh/img/BisLite.png">
				</figure>

				<nav>
					<div><a href="#">home  </a> </div>
					<div><a href="#">about us</a> </div>
					<div class="serv"> <a href="#" >services  <img src=" http://wp.ru/wp-content/themes/Testh/img/down arrow.png">  </a> </div>						
					<div><a href="#"> portfolio <img src="http://wp.ru/wp-content/themes/Testh/img/down arrow.png"></a> </div>
					<div><a href="#"> blog</a> </div>
					<div><a href="#"> contact us</a> </div>
				</nav>
				
		</div>

		<section class="slider">
		<div class=" slid container">
		<div class="slim ">
			<img src="http://wp.ru/wp-content/themes/Testh/img/paper-coffee-cup-512x512.png">
		</div>
			<div class="radio ">
			<div> 
			<span> </span>
			</div>
			<div> 
			<span> </span>
			</div>
			<div> 
			<span> </span>
			</div>
			<div> 
			<span> </span>
			</div>
			<div> 
			<span> </span>
			</div>
			</div>
		
		</div>		
	</section>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
