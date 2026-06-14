<?php
$faqs = [
    [
        __( 'What grade should my child start career counselling?', 'medha-compass' ),
        __( 'Medha Compass works with students from Grade 8 upward. Grade 8–9 is ideal for broad exploration and subject-choice preparation. Grade 10–11 focuses on narrowing down and planning for university applications. Grade 12 support centres on final decisions and application strategy. The earlier you start, the more options remain open.', 'medha-compass' ),
    ],
    [
        __( 'What does the counselling process look like?', 'medha-compass' ),
        __( 'Swathi follows a structured process: Intake + Context → Psychometric Assessment(s) → 1:1 Student Counselling → Strengths & Interests Mapping → Career Pathway Exploration → Subject/Stream Selection → University + Course Planning → Career Pathway Report → Year-wise Development Plan, with Parent Consultations throughout.', 'medha-compass' ),
    ],
    [
        __( 'Do both the student and parent need to attend sessions?', 'medha-compass' ),
        __( 'Parent consultations are built into the process as a key component. The assessment debrief and goal-setting sessions work best with both present. Individual sessions with just the student are available when a teenager needs a private space to explore ideas. The best format is discussed during the initial discovery call.', 'medha-compass' ),
    ],
    [
        __( 'How is Medha Compass different from a school counsellor?', 'medha-compass' ),
        __( 'School counsellors typically manage hundreds of students and cover discipline, mental health, and academics. Swathi dedicates focused one-on-one time exclusively to career development, uses validated psychometric tools, and produces a personalised written Career Pathway Report and Year-wise Development Plan — resources schools rarely have capacity to provide.', 'medha-compass' ),
    ],
    [
        __( 'What psychometric assessments does Swathi use?', 'medha-compass' ),
        __( 'Swathi uses a combination of validated assessments suited to the student\'s grade and context. These cover interests, personality type, values, cognitive strengths, and learning style. Results are interpreted in a dedicated debrief session with the student and parents to ensure the findings are meaningful and actionable.', 'medha-compass' ),
    ],
    [
        __( 'Does Swathi work with schools as well as individual families?', 'medha-compass' ),
        __( 'Yes. Medha Compass offers both individual family programmes and school-level services including Career Awareness Workshops, Grade 8–12 Career Readiness Programs, Parent Guidance Workshops, School Career Guidance Frameworks, Teacher Capacity Building, and School Leadership Consulting.', 'medha-compass' ),
    ],
    [
        __( 'How do I get started?', 'medha-compass' ),
        __( 'Fill in the enquiry form below or call/email directly. Swathi will schedule a free 30-minute discovery call to understand your child\'s situation, answer your questions, and suggest the most appropriate next step. There is no obligation to proceed.', 'medha-compass' ),
    ],
];
?>
<section class="faq" id="faq">
    <div class="container">
        <div class="faq__grid">

            <!-- Sidebar -->
            <div>
                <div class="section-label"><span><?php esc_html_e( 'FAQ', 'medha-compass' ); ?></span></div>
                <h2 class="section-heading mb-6"><?php esc_html_e( 'Questions parents ask most', 'medha-compass' ); ?></h2>
                <p style="color:var(--text-muted);font-size:.9rem;line-height:1.8;margin-bottom:2rem;font-family:var(--font-body);">
                    <?php esc_html_e( "Can't find what you're looking for? Send Swathi a message and she'll get back to you within one business day.", 'medha-compass' ); ?>
                </p>
                <a href="#contact" class="btn btn-outline-teal mb-8">
                    <?php esc_html_e( 'Ask a question →', 'medha-compass' ); ?>
                </a>

                <div class="faq__sidebar-contact">
                    <h4><?php esc_html_e( 'Contact Swathi directly', 'medha-compass' ); ?></h4>
                    <a href="mailto:<?php echo esc_attr( medha_get( 'contact_email', 'swathi.medhacompass@gmail.com' ) ); ?>" class="faq__contact-link">
                        📧 <?php echo medha_contact( 'contact_email', 'swathi.medhacompass@gmail.com' ); ?>
                    </a>
                    <a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', medha_get( 'contact_phone', '+917619343941' ) ) ); ?>" class="faq__contact-link">
                        📞 <?php echo medha_contact( 'contact_phone', '+91 76193 43941' ); ?>
                    </a>
                    <p class="faq__contact-info">
                        📍 <?php echo medha_contact( 'contact_address', 'Bengaluru, Karnataka' ); ?><br>
                        <?php esc_html_e( 'Online sessions available nationwide', 'medha-compass' ); ?>
                    </p>
                </div>
            </div>

            <!-- Accordion -->
            <div class="accordion" id="faq-accordion">
                <?php foreach ( $faqs as $i => [ $q, $a ] ) : ?>
                <div class="accordion-item <?php echo $i === 0 ? 'is-open' : ''; ?>">
                    <button class="accordion-btn" aria-expanded="<?php echo $i === 0 ? 'true' : 'false'; ?>">
                        <?php echo esc_html( $q ); ?>
                        <span class="accordion-icon" aria-hidden="true">+</span>
                    </button>
                    <div class="accordion-body" <?php echo $i !== 0 ? 'hidden' : ''; ?>>
                        <?php echo esc_html( $a ); ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>
</section>
