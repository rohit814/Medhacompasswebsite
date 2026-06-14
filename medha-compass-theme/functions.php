<?php
/**
 * Medha Compass Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ─── Theme Setup ───────────────────────────────────────────────────
function medha_setup() {
    load_theme_textdomain( 'medha-compass', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script',
    ] );
    add_theme_support( 'customize-selective-refresh-widgets' );
    add_theme_support( 'responsive-embeds' );

    register_nav_menus( [
        'primary' => __( 'Primary Menu', 'medha-compass' ),
        'footer'  => __( 'Footer Menu',  'medha-compass' ),
    ] );
}
add_action( 'after_setup_theme', 'medha_setup' );

// ─── Enqueue Assets ────────────────────────────────────────────────
function medha_enqueue() {
    // Google Fonts
    wp_enqueue_style(
        'medha-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap',
        [],
        null
    );

    // Theme stylesheet
    wp_enqueue_style(
        'medha-style',
        get_stylesheet_uri(),
        [ 'medha-fonts' ],
        wp_get_theme()->get( 'Version' )
    );

    // Theme JS
    wp_enqueue_script(
        'medha-main',
        get_template_directory_uri() . '/js/medha-compass.js',
        [],
        wp_get_theme()->get( 'Version' ),
        true
    );

    // Pass data to JS
    wp_localize_script( 'medha-main', 'medhaData', [
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'medha_contact_nonce' ),
    ] );
}
add_action( 'wp_enqueue_scripts', 'medha_enqueue' );

// ─── Widget Areas ──────────────────────────────────────────────────
function medha_widgets_init() {
    register_sidebar( [
        'name'          => __( 'Footer Widget Area', 'medha-compass' ),
        'id'            => 'footer-1',
        'description'   => __( 'Add widgets here.', 'medha-compass' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ] );
}
add_action( 'widgets_init', 'medha_widgets_init' );

// ─── Contact Form AJAX Handler ─────────────────────────────────────
function medha_handle_contact() {
    check_ajax_referer( 'medha_contact_nonce', 'nonce' );

    $parent_name  = sanitize_text_field( $_POST['parent_name'] ?? '' );
    $student_name = sanitize_text_field( $_POST['student_name'] ?? '' );
    $grade        = sanitize_text_field( $_POST['grade'] ?? '' );
    $email        = sanitize_email( $_POST['email'] ?? '' );
    $phone        = sanitize_text_field( $_POST['phone'] ?? '' );
    $concern      = sanitize_text_field( $_POST['concern'] ?? '' );
    $message      = sanitize_textarea_field( $_POST['message'] ?? '' );

    // Validate required
    if ( ! $parent_name || ! $student_name || ! $grade || ! is_email( $email ) || ! $concern ) {
        wp_send_json_error( [ 'message' => __( 'Please fill in all required fields.', 'medha-compass' ) ] );
    }

    $to      = get_option( 'admin_email' );
    $subject = sprintf( __( 'New Enquiry from %s — Medha Compass', 'medha-compass' ), $parent_name );

    $body  = "New counselling enquiry from the Medha Compass website.\n\n";
    $body .= "Parent / Guardian: $parent_name\n";
    $body .= "Student Name:      $student_name\n";
    $body .= "Grade:             $grade\n";
    $body .= "Email:             $email\n";
    $body .= "Phone:             $phone\n";
    $body .= "Concern:           $concern\n\n";
    $body .= "Message:\n$message\n";

    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        "Reply-To: $parent_name <$email>",
    ];

    $sent = wp_mail( $to, $subject, $body, $headers );

    // Also mail Swathi directly
    wp_mail( 'swathi.medhacompass@gmail.com', $subject, $body, $headers );

    if ( $sent ) {
        wp_send_json_success( [
            'message' => sprintf(
                __( 'Thank you, %s! Swathi will be in touch within one business day.', 'medha-compass' ),
                esc_html( $parent_name )
            ),
        ] );
    } else {
        wp_send_json_error( [ 'message' => __( 'Something went wrong. Please email us directly.', 'medha-compass' ) ] );
    }
}
add_action( 'wp_ajax_medha_contact',        'medha_handle_contact' );
add_action( 'wp_ajax_nopriv_medha_contact', 'medha_handle_contact' );

// ─── Customizer Settings ───────────────────────────────────────────
function medha_customizer( $wp_customize ) {
    // ── Section: Counsellor ──
    $wp_customize->add_section( 'medha_counsellor', [
        'title'    => __( 'Counsellor Profile', 'medha-compass' ),
        'priority' => 30,
    ] );

    $fields = [
        'counsellor_name'  => [ 'label' => 'Name',       'default' => 'Swathi Kadur' ],
        'counsellor_title' => [ 'label' => 'Title',      'default' => 'Global Career Counsellor · Education Leader · School Leadership Consultant' ],
        'counsellor_bio1'  => [ 'label' => 'Bio Para 1', 'default' => 'Swathi Kadur is an accomplished education leader with more than 18 years of experience in career guidance, educational leadership, counselling, curriculum development, and student development across India, the United States, and Trinidad and Tobago.' ],
        'counsellor_bio2'  => [ 'label' => 'Bio Para 2', 'default' => 'Through Medha Compass, Swathi works closely with students in Grades 8 to 12, partnering with schools and families to identify strengths, explore emerging career pathways, align subject choices with long-term goals, and build personalised academic and career roadmaps.' ],
    ];

    foreach ( $fields as $id => $args ) {
        $wp_customize->add_setting( $id, [ 'default' => $args['default'], 'sanitize_callback' => 'sanitize_textarea_field' ] );
        $wp_customize->add_control( $id, [ 'label' => $args['label'], 'section' => 'medha_counsellor', 'type' => 'textarea' ] );
    }

    // Counsellor Photo
    $wp_customize->add_setting( 'counsellor_photo', [ 'default' => '', 'sanitize_callback' => 'absint' ] );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'counsellor_photo', [
        'label'     => __( 'Counsellor Photo', 'medha-compass' ),
        'section'   => 'medha_counsellor',
        'mime_type' => 'image',
    ] ) );

    // ── Section: Contact ──
    $wp_customize->add_section( 'medha_contact', [
        'title'    => __( 'Contact Details', 'medha-compass' ),
        'priority' => 35,
    ] );

    $contact_fields = [
        'contact_phone'   => [ 'label' => 'Phone',   'default' => '+91 76193 43941' ],
        'contact_email'   => [ 'label' => 'Email',   'default' => 'swathi.medhacompass@gmail.com' ],
        'contact_address' => [ 'label' => 'Address', 'default' => 'Pattanagere Main Road, BHEL Layout, Rajarajeshwari Nagar, Bengaluru 560098' ],
    ];

    foreach ( $contact_fields as $id => $args ) {
        $wp_customize->add_setting( $id, [ 'default' => $args['default'], 'sanitize_callback' => 'sanitize_text_field' ] );
        $wp_customize->add_control( $id, [ 'label' => $args['label'], 'section' => 'medha_contact', 'type' => 'text' ] );
    }

    // ── Section: Logo ──
    $wp_customize->add_setting( 'medha_logo', [ 'default' => '', 'sanitize_callback' => 'absint' ] );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'medha_logo', [
        'label'     => __( 'Site Logo', 'medha-compass' ),
        'section'   => 'title_tagline',
        'mime_type' => 'image',
    ] ) );
}
add_action( 'customize_register', 'medha_customizer' );

// ─── Helper: get customizer value with fallback ────────────────────
function medha_get( $key, $fallback = '' ) {
    return get_theme_mod( $key, $fallback );
}

// ─── Helper: render logo ──────────────────────────────────────────
function medha_logo_img( $class = '' ) {
    $logo_id = medha_get( 'medha_logo' );
    if ( $logo_id ) {
        echo wp_get_attachment_image( $logo_id, 'full', false, [ 'class' => $class, 'alt' => get_bloginfo( 'name' ) ] );
    } else {
        // Fallback text logo
        echo '<span style="color:#fff;font-family:var(--font-display);font-size:1.1rem;font-weight:600;">' . esc_html( get_bloginfo( 'name' ) ) . '</span>';
    }
}

// ─── Helper: render counsellor photo ──────────────────────────────
function medha_counsellor_photo() {
    $photo_id = medha_get( 'counsellor_photo' );
    if ( $photo_id ) {
        echo wp_get_attachment_image( $photo_id, 'large', false, [
            'class' => 'profile__photo',
            'alt'   => esc_attr( medha_get( 'counsellor_name', 'Swathi Kadur' ) ),
        ] );
    } else {
        echo '<img src="' . esc_url( get_template_directory_uri() . '/images/counsellor-placeholder.jpg' ) . '" alt="Swathi Kadur" class="profile__photo">';
    }
}

// ─── Helper: contact detail ───────────────────────────────────────
function medha_contact( $key, $fallback = '' ) {
    return esc_html( medha_get( $key, $fallback ) );
}
