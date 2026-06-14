<footer class="site-footer" role="contentinfo">
    <div class="container">
        <div class="footer__grid">
            <!-- Brand -->
            <div>
                <div class="footer__logo">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <?php medha_logo_img(); ?>
                    </a>
                </div>
                <p class="footer__tagline">
                    <?php esc_html_e( 'Personalised career guidance for students in Grades 8–12. Helping families across India build purposeful academic and career futures.', 'medha-compass' ); ?>
                </p>
                <div style="margin-top:1rem;">
                    <a href="mailto:<?php echo esc_attr( medha_get( 'contact_email', 'swathi.medhacompass@gmail.com' ) ); ?>" class="footer__contact-link">
                        <?php echo medha_contact( 'contact_email', 'swathi.medhacompass@gmail.com' ); ?>
                    </a>
                    <a href="tel:<?php echo esc_attr( preg_replace('/\s+/', '', medha_get( 'contact_phone', '+917619343941' ) ) ); ?>" class="footer__contact-link">
                        <?php echo medha_contact( 'contact_phone', '+91 76193 43941' ); ?>
                    </a>
                    <p class="footer__address">
                        <?php echo nl2br( medha_contact( 'contact_address', 'Pattanagere Main Road, BHEL Layout, Rajarajeshwari Nagar, Bengaluru 560098' ) ); ?>
                    </p>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h4 class="footer__col-heading"><?php esc_html_e( 'Services', 'medha-compass' ); ?></h4>
                <nav class="footer__col-links">
                    <a href="#assessment"><?php esc_html_e( 'Career Assessment',    'medha-compass' ); ?></a>
                    <a href="#assessment"><?php esc_html_e( 'Subject Selection',     'medha-compass' ); ?></a>
                    <a href="#assessment"><?php esc_html_e( 'University Planning',   'medha-compass' ); ?></a>
                    <a href="#assessment"><?php esc_html_e( 'Parent Workshops',      'medha-compass' ); ?></a>
                    <a href="#assessment"><?php esc_html_e( 'School Programs',       'medha-compass' ); ?></a>
                </nav>
            </div>

            <!-- About -->
            <div>
                <h4 class="footer__col-heading"><?php esc_html_e( 'About', 'medha-compass' ); ?></h4>
                <nav class="footer__col-links">
                    <a href="#about"><?php esc_html_e( 'Swathi Kadur',   'medha-compass' ); ?></a>
                    <a href="#testimonials"><?php esc_html_e( 'Testimonials', 'medha-compass' ); ?></a>
                    <a href="#faq"><?php esc_html_e( 'FAQ',          'medha-compass' ); ?></a>
                    <a href="#contact"><?php esc_html_e( 'Contact',      'medha-compass' ); ?></a>
                    <?php
                    if ( has_nav_menu( 'footer' ) ) {
                        wp_nav_menu( [
                            'theme_location' => 'footer',
                            'container'      => false,
                            'items_wrap'     => '%3$s',
                            'walker'         => null,
                        ] );
                    }
                    ?>
                </nav>
            </div>
        </div>

        <div class="footer__bottom">
            <p class="footer__copy">
                &copy; <?php echo esc_html( gmdate( 'Y' ) ); ?>
                <?php esc_html_e( 'Medha Compass Career Guidance · Medha Trust. All rights reserved.', 'medha-compass' ); ?>
            </p>
            <p class="footer__location"><?php esc_html_e( 'Bengaluru, Karnataka, India', 'medha-compass' ); ?></p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
