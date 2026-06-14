<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="site-nav" role="navigation" aria-label="<?php esc_attr_e( 'Primary navigation', 'medha-compass' ); ?>">
    <div class="site-nav__logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php bloginfo( 'name' ); ?>">
            <?php medha_logo_img(); ?>
        </a>
    </div>

    <ul class="site-nav__links" id="primary-menu">
        <li><a href="#services"><?php esc_html_e( 'Services', 'medha-compass' ); ?></a></li>
        <li><a href="#about"><?php esc_html_e( 'About', 'medha-compass' ); ?></a></li>
        <li><a href="#testimonials"><?php esc_html_e( 'Testimonials', 'medha-compass' ); ?></a></li>
        <li><a href="#faq"><?php esc_html_e( 'FAQ', 'medha-compass' ); ?></a></li>
        <li><a href="#contact"><?php esc_html_e( 'Contact', 'medha-compass' ); ?></a></li>
    </ul>

    <a href="#contact" class="btn btn-primary site-nav__cta">
        <?php esc_html_e( 'Book a Free Call', 'medha-compass' ); ?>
    </a>

    <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="primary-menu" aria-label="<?php esc_attr_e( 'Toggle navigation', 'medha-compass' ); ?>">
        <span></span><span></span><span></span>
    </button>
</nav>
