<?php
$name   = medha_get( 'counsellor_name',  'Swathi Kadur' );
$title  = medha_get( 'counsellor_title', 'Global Career Counsellor · Education Leader · School Leadership Consultant' );
$bio1   = medha_get( 'counsellor_bio1',  'Swathi Kadur is an accomplished education leader with more than 18 years of experience in career guidance, educational leadership, counselling, curriculum development, and student development across India, the United States, and Trinidad and Tobago.' );
$bio2   = medha_get( 'counsellor_bio2',  'Through Medha Compass, Swathi works closely with students in Grades 8 to 12, partnering with schools and families to identify strengths, explore emerging career pathways, align subject choices with long-term goals, and build personalised academic and career roadmaps.' );

$credentials = [
    __( 'Certificate in Global Career Counselling — UCLA Extension & Univariety', 'medha-compass' ),
    __( "Master's in Educational Psychology — Andrews University, USA",           'medha-compass' ),
    __( "Bachelor's in Psychology — California State University, Northridge, USA", 'medha-compass' ),
    __( 'Harvard Certificate in School Management & Leadership (Distinction)',    'medha-compass' ),
    __( 'International Certificate in Education for Preschool Teaching — Singapore', 'medha-compass' ),
    __( 'Certificate in Art Therapy (Distinction)',                               'medha-compass' ),
];

$roles = [
    __( 'Former CBSE Principal & Head of School',    'medha-compass' ),
    __( 'Founder, Medha Bright Beginnings Preschool', 'medha-compass' ),
    __( 'Curriculum Leader & Guidance Counsellor',   'medha-compass' ),
    __( 'School Leadership Consultant',              'medha-compass' ),
];

$countries = [ 'India', 'United States', 'Trinidad & Tobago' ];
?>
<section class="profile" id="about">
    <div class="container">
        <div class="profile__grid">

            <!-- Photo -->
            <div class="profile__image-wrap">
                <div class="profile__image-border"></div>
                <?php medha_counsellor_photo(); ?>
                <div class="profile__quote-badge">
                    <div class="profile__quote-mark">"</div>
                    <p class="profile__quote-text">
                        <?php esc_html_e( 'Empowering students to discover their strengths, explore possibilities, and build purposeful futures.', 'medha-compass' ); ?>
                    </p>
                </div>
            </div>

            <!-- Content -->
            <div class="profile__content">
                <div class="section-label"><span><?php esc_html_e( 'Your Counsellor', 'medha-compass' ); ?></span></div>

                <h2 class="profile__name"><?php echo esc_html( $name ); ?></h2>
                <p class="profile__title"><?php echo esc_html( $title ); ?></p>

                <div class="profile__org">
                    <?php medha_logo_img( 'profile__org-logo' ); ?>
                    <span><?php esc_html_e( 'Founder, Medha Compass Career Guidance', 'medha-compass' ); ?></span>
                </div>

                <p class="profile__bio"><?php echo esc_html( $bio1 ); ?></p>
                <p class="profile__bio"><?php echo esc_html( $bio2 ); ?></p>

                <!-- Countries -->
                <div class="profile__countries">
                    <?php foreach ( $countries as $c ) : ?>
                    <span class="profile__country">🌐 <?php echo esc_html( $c ); ?></span>
                    <?php endforeach; ?>
                </div>

                <!-- Leadership Roles -->
                <p class="profile__section-title"><?php esc_html_e( 'Leadership Roles', 'medha-compass' ); ?></p>
                <div class="profile__roles mb-6">
                    <?php foreach ( $roles as $r ) : ?>
                    <div class="profile__role-item">
                        <div class="profile__role-dot"></div>
                        <span class="profile__role-text"><?php echo esc_html( $r ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>

                <!-- Credentials -->
                <p class="profile__section-title"><?php esc_html_e( 'Qualifications & Certifications', 'medha-compass' ); ?></p>
                <div class="profile__creds mb-8">
                    <?php foreach ( $credentials as $c ) : ?>
                    <div class="profile__cred-item">
                        <div class="profile__cred-dot"></div>
                        <span class="profile__cred-text"><?php echo esc_html( $c ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>

                <a href="#contact" class="btn btn-teal">
                    <?php esc_html_e( 'Book a Session with Swathi', 'medha-compass' ); ?>
                </a>
            </div>
        </div>
    </div>
</section>
