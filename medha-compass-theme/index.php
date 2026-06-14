<?php get_header(); ?>

<main id="main" role="main" style="padding: 6rem 2rem; max-width: 860px; margin: 0 auto;">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="margin-bottom:3rem;">
            <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:600;color:var(--text-main);margin-bottom:1rem;">
                <?php the_title(); ?>
            </h1>
            <div style="color:var(--text-muted);line-height:1.8;font-family:var(--font-body);">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; else: ?>
        <p style="font-family:var(--font-body);color:var(--text-muted);"><?php esc_html_e( 'No content found.', 'medha-compass' ); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
