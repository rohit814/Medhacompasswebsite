<?php get_header(); ?>

<main id="main" role="main">
    <?php get_template_part( 'template-parts/section', 'hero' ); ?>
    <?php get_template_part( 'template-parts/section', 'assessment' ); ?>
    <?php get_template_part( 'template-parts/section', 'testimonials' ); ?>
    <?php get_template_part( 'template-parts/section', 'profile' ); ?>
    <?php get_template_part( 'template-parts/section', 'faq' ); ?>
    <?php get_template_part( 'template-parts/section', 'lead-form' ); ?>
    <?php get_template_part( 'template-parts/section', 'cta' ); ?>
</main>

<?php get_footer(); ?>
