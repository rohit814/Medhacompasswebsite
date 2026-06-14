<section class="cta">
    <div class="cta__bg-text" aria-hidden="true">Medha Compass</div>

    <div class="container">
        <div class="cta__body">
            <div class="cta__divider">
                <div class="cta__divider-line"></div>
                <span class="cta__divider-text"><?php esc_html_e( 'For A Bright Future', 'medha-compass' ); ?></span>
                <div class="cta__divider-line"></div>
            </div>

            <h2 class="cta__heading">
                <?php esc_html_e( "Your child's future is worth a 30-minute conversation", 'medha-compass' ); ?>
            </h2>

            <p class="cta__lead">
                <?php esc_html_e( "The discovery call with Swathi is free. No pressure, no sales pitch — just an honest conversation about where your child is and where they want to go.", 'medha-compass' ); ?>
            </p>

            <div class="cta__actions">
                <a href="#contact" class="btn" style="background:var(--white);color:var(--teal);font-weight:500;box-shadow:0 4px 16px rgba(0,0,0,.15);">
                    <?php esc_html_e( 'Book My Free Call with Swathi', 'medha-compass' ); ?>
                </a>
                <a href="#assessment" class="btn btn-outline">
                    <?php esc_html_e( 'Start the Career Quiz →', 'medha-compass' ); ?>
                </a>
            </div>

            <div class="cta__trust">
                <?php
                $trust = [
                    __( '✓  No commitment required',          'medha-compass' ),
                    __( '✓  Response within 24 hours',        'medha-compass' ),
                    __( '✓  In-person or online sessions',    'medha-compass' ),
                ];
                foreach ( $trust as $item ) :
                ?>
                <span class="cta__trust-item"><?php echo esc_html( $item ); ?></span>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
