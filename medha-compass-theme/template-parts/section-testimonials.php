<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="testimonials__header">
            <div>
                <div class="section-label"><span style="color:var(--orange);"><?php esc_html_e( 'Parent & Student Stories', 'medha-compass' ); ?></span></div>
                <h2 class="section-heading section-heading--white"><?php esc_html_e( 'Real families, real outcomes', 'medha-compass' ); ?></h2>
            </div>
            <div class="testimonials__dots" id="testi-dots" role="tablist" aria-label="Testimonials">
                <?php for ( $i = 0; $i < 4; $i++ ) : ?>
                <button
                    class="testimonials__dot <?php echo $i === 0 ? 'is-active' : ''; ?>"
                    data-index="<?php echo esc_attr( $i ); ?>"
                    role="tab"
                    aria-selected="<?php echo $i === 0 ? 'true' : 'false'; ?>"
                    aria-label="<?php printf( esc_attr__( 'Testimonial %d', 'medha-compass' ), $i + 1 ); ?>"
                ></button>
                <?php endfor; ?>
            </div>
        </div>

        <!-- Featured testimonial — populated by JS -->
        <div class="testimonials__featured" id="testi-featured">
            <div class="testi-main" id="testi-main">
                <div class="testi-main__open-quote">❝</div>
                <p class="testi-main__quote" id="testi-quote"></p>
                <div class="testi-main__author">
                    <div class="testi-avatar" id="testi-avatar"></div>
                    <div>
                        <div class="testi-main__name" id="testi-name"></div>
                        <div class="testi-main__role" id="testi-role"></div>
                    </div>
                </div>
            </div>

            <div class="testi-outcome">
                <div class="testi-outcome__label"><?php esc_html_e( 'Outcome', 'medha-compass' ); ?></div>
                <p class="testi-outcome__text" id="testi-outcome"></p>
                <div class="testi-outcome__stars">
                    <div class="testi-outcome__stars-label"><?php esc_html_e( 'Overall satisfaction', 'medha-compass' ); ?></div>
                    <div class="stars">★★★★★</div>
                </div>
            </div>
        </div>

        <!-- Thumbnails -->
        <div class="testimonials__thumbs" id="testi-thumbs" role="tablist">
            <!-- Populated by JS -->
        </div>
    </div>
</section>
