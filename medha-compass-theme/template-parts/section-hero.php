<section class="hero" id="home">
    <div class="hero__bg">
        <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1800&h=1000&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            loading="eager"
        >
        <div class="hero__overlay"></div>
    </div>

    <div class="container">
        <div class="hero__body">
            <div class="hero__eyebrow">
                <span><?php esc_html_e( 'Global Career Counselling · Grades 8 – 12', 'medha-compass' ); ?></span>
            </div>

            <h1 class="hero__heading">
                <?php esc_html_e( 'Empowering Students to Build', 'medha-compass' ); ?>
                <em><?php esc_html_e( 'Purposeful Futures', 'medha-compass' ); ?></em>
            </h1>

            <p class="hero__lead">
                <?php esc_html_e( 'Personalised career guidance for students in Grades 8–12. Medha Compass helps your child discover their strengths, explore career pathways, and build an academic roadmap aligned to their long-term goals.', 'medha-compass' ); ?>
            </p>

            <div class="hero__actions">
                <a href="#contact" class="btn btn-primary">
                    <?php esc_html_e( 'Book a Free Discovery Call', 'medha-compass' ); ?>
                </a>
                <a href="#assessment" class="btn btn-outline">
                    <?php esc_html_e( 'Take the Career Quiz →', 'medha-compass' ); ?>
                </a>
            </div>

            <div class="hero__stats">
                <?php
                $stats = [
                    [ 'number' => '18+', 'label' => __( 'Years of experience', 'medha-compass' ) ],
                    [ 'number' => '3',   'label' => __( 'Countries served',    'medha-compass' ) ],
                    [ 'number' => '6',   'label' => __( 'Certifications',      'medha-compass' ) ],
                ];
                foreach ( $stats as $stat ) :
                ?>
                <div class="hero__stat">
                    <div class="hero__stat-number"><?php echo esc_html( $stat['number'] ); ?></div>
                    <div class="hero__stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
