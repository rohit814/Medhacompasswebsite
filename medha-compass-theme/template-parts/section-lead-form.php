<?php
$concerns = [
    __( 'Psychometric Assessment & Profiling',       'medha-compass' ),
    __( 'Subject / Stream Selection (Grade 9–10)',    'medha-compass' ),
    __( 'Career Pathway Exploration',                'medha-compass' ),
    __( 'University & Course Planning',              'medha-compass' ),
    __( 'Career Awareness Workshop (school)',        'medha-compass' ),
    __( 'Parent Guidance Workshop',                  'medha-compass' ),
    __( 'School Career Guidance Framework',          'medha-compass' ),
    __( 'Other',                                     'medha-compass' ),
];
$grades = [ 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12' ];
?>
<section class="lead-form" id="contact">
    <div class="container">
        <div class="lead-form__grid">

            <!-- Info -->
            <div>
                <div class="section-label"><span><?php esc_html_e( 'Get in touch', 'medha-compass' ); ?></span></div>
                <h2 class="section-heading section-heading--white mb-6">
                    <?php esc_html_e( 'Start with a free discovery call', 'medha-compass' ); ?>
                </h2>
                <p style="color:rgba(255,255,255,.55);line-height:1.8;font-size:.95rem;margin-bottom:2.5rem;font-family:var(--font-body);">
                    <?php esc_html_e( "Fill in the form and Swathi will contact you within one business day to schedule a 30-minute call — no commitment, no cost.", 'medha-compass' ); ?>
                </p>

                <div class="lead-form__info-item">
                    <span class="lead-form__info-emoji">📞</span>
                    <div>
                        <div class="lead-form__info-label"><?php esc_html_e( 'Phone', 'medha-compass' ); ?></div>
                        <div class="lead-form__info-value">
                            <a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', medha_get( 'contact_phone', '+917619343941' ) ) ); ?>">
                                <?php echo medha_contact( 'contact_phone', '+91 76193 43941' ); ?>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lead-form__info-item">
                    <span class="lead-form__info-emoji">✉️</span>
                    <div>
                        <div class="lead-form__info-label"><?php esc_html_e( 'Email', 'medha-compass' ); ?></div>
                        <div class="lead-form__info-value">
                            <a href="mailto:<?php echo esc_attr( medha_get( 'contact_email', 'swathi.medhacompass@gmail.com' ) ); ?>">
                                <?php echo medha_contact( 'contact_email', 'swathi.medhacompass@gmail.com' ); ?>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lead-form__info-item">
                    <span class="lead-form__info-emoji">📍</span>
                    <div>
                        <div class="lead-form__info-label"><?php esc_html_e( 'Address', 'medha-compass' ); ?></div>
                        <div class="lead-form__info-value">
                            <?php echo nl2br( medha_contact( 'contact_address', "Pattanagere Main Road, BHEL Layout\nRajarajeshwari Nagar, Bengaluru 560098" ) ); ?>
                        </div>
                    </div>
                </div>
                <div class="lead-form__info-item">
                    <span class="lead-form__info-emoji">🌐</span>
                    <div>
                        <div class="lead-form__info-label"><?php esc_html_e( 'Online sessions', 'medha-compass' ); ?></div>
                        <div class="lead-form__info-value"><?php esc_html_e( 'Available nationwide across India', 'medha-compass' ); ?></div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div>
                <!-- Success message -->
                <div class="form-success" id="form-success">
                    <div class="form-success__icon">✓</div>
                    <h3 class="form-success__heading"><?php esc_html_e( 'Swathi will be in touch soon', 'medha-compass' ); ?></h3>
                    <p class="form-success__text" id="form-success-text">
                        <?php esc_html_e( "Thank you! Swathi will review your message and contact you within one business day to schedule your free discovery call.", 'medha-compass' ); ?>
                    </p>
                    <button id="form-reset" class="btn btn-outline">
                        <?php esc_html_e( 'Submit another enquiry', 'medha-compass' ); ?>
                    </button>
                </div>

                <!-- The form -->
                <form id="medha-contact-form" novalidate>
                    <?php wp_nonce_field( 'medha_contact_nonce', 'medha_nonce' ); ?>

                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" id="fg-parent-name">
                                <label class="form-label" for="parent_name"><?php esc_html_e( 'Your name *', 'medha-compass' ); ?></label>
                                <input type="text" id="parent_name" name="parent_name" class="form-input" placeholder="<?php esc_attr_e( 'Parent / guardian name', 'medha-compass' ); ?>" autocomplete="name">
                                <span class="form-error"><?php esc_html_e( 'Required', 'medha-compass' ); ?></span>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="form-group" id="fg-student-name">
                                <label class="form-label" for="student_name"><?php esc_html_e( "Student's name *", 'medha-compass' ); ?></label>
                                <input type="text" id="student_name" name="student_name" class="form-input" placeholder="<?php esc_attr_e( "Student's name", 'medha-compass' ); ?>">
                                <span class="form-error"><?php esc_html_e( 'Required', 'medha-compass' ); ?></span>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group" id="fg-grade">
                                <label class="form-label" for="grade"><?php esc_html_e( 'Current grade *', 'medha-compass' ); ?></label>
                                <select id="grade" name="grade" class="form-select">
                                    <option value=""><?php esc_html_e( 'Select grade…', 'medha-compass' ); ?></option>
                                    <?php foreach ( $grades as $g ) : ?>
                                    <option value="<?php echo esc_attr( $g ); ?>"><?php echo esc_html( $g ); ?></option>
                                    <?php endforeach; ?>
                                </select>
                                <span class="form-error"><?php esc_html_e( 'Required', 'medha-compass' ); ?></span>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="form-group">
                                <label class="form-label" for="phone"><?php esc_html_e( 'Phone (optional)', 'medha-compass' ); ?></label>
                                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+91 …" autocomplete="tel">
                            </div>
                        </div>
                    </div>

                    <div class="form-group" id="fg-email">
                        <label class="form-label" for="email"><?php esc_html_e( 'Email address *', 'medha-compass' ); ?></label>
                        <input type="email" id="email" name="email" class="form-input" placeholder="you@example.com" autocomplete="email">
                        <span class="form-error"><?php esc_html_e( 'Valid email required', 'medha-compass' ); ?></span>
                    </div>

                    <div class="form-group" id="fg-concern">
                        <label class="form-label" for="concern"><?php esc_html_e( 'What do you need help with? *', 'medha-compass' ); ?></label>
                        <select id="concern" name="concern" class="form-select">
                            <option value=""><?php esc_html_e( 'Select a service…', 'medha-compass' ); ?></option>
                            <?php foreach ( $concerns as $c ) : ?>
                            <option value="<?php echo esc_attr( $c ); ?>"><?php echo esc_html( $c ); ?></option>
                            <?php endforeach; ?>
                        </select>
                        <span class="form-error"><?php esc_html_e( 'Please select a topic', 'medha-compass' ); ?></span>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="message"><?php esc_html_e( 'Tell us more (optional)', 'medha-compass' ); ?></label>
                        <textarea id="message" name="message" class="form-input form-textarea" rows="4" placeholder="<?php esc_attr_e( 'Any context that would help Swathi prepare for your call…', 'medha-compass' ); ?>"></textarea>
                    </div>

                    <div id="form-error-msg" style="display:none;color:#ff6b6b;font-size:.8rem;margin-bottom:.75rem;font-family:var(--font-body);"></div>

                    <button type="submit" class="form-submit" id="form-submit">
                        <?php esc_html_e( 'Request My Free Discovery Call with Swathi', 'medha-compass' ); ?>
                    </button>
                    <p class="form-privacy"><?php esc_html_e( 'No spam, ever. Your information is kept strictly private.', 'medha-compass' ); ?></p>
                </form>
            </div>

        </div>
    </div>
</section>
