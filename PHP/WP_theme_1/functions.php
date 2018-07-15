<?php


if ( ! function_exists( 'testh_setup' ) ) :
	
	function testh_setup() {
		
		

		
		

		
		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails' );

		
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'testh' ),
		) );

		
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		
		
		
		
		
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'testh_setup' );




function testh_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Виджеты', 'testh' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'testh' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'testh_widgets_init' );


function testh_style() {
		wp_enqueue_style( 'testh-style', get_stylesheet_uri() );
	wp_enqueue_script( '$handle', '$scr', array('jquery'), false, false );

}
	
add_action( 'wp_enqueue_scripts', 'testh_style' );


function testh_scripts() {


	wp_enqueue_script( 'testh-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'testh-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'testh_scripts' );

require get_template_directory() . '/inc/custom-header.php';


require get_template_directory() . '/inc/template-tags.php';


require get_template_directory() . '/inc/template-functions.php';


require get_template_directory() . '/inc/customizer.php';


if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

