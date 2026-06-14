<section class="assessment" id="assessment">
    <div class="container">
        <!-- Header -->
        <div style="max-width:580px;margin-bottom:4rem;">
            <div class="section-label"><span><?php esc_html_e( 'Career Assessment', 'medha-compass' ); ?></span></div>
            <h2 class="section-heading"><?php esc_html_e( 'What career path fits your child?', 'medha-compass' ); ?></h2>
            <p style="color:var(--text-muted);margin-top:1rem;line-height:1.8;font-family:var(--font-body);">
                <?php esc_html_e( 'Answer 4 quick questions for an initial direction. Swathi\'s full psychometric assessment goes much deeper — mapping strengths, interests, values, and learning style.', 'medha-compass' ); ?>
            </p>
        </div>

        <div class="assessment__grid" id="services">
            <!-- Quiz Card -->
            <div class="quiz-card">
                <!-- Questions panel -->
                <div class="quiz-questions" id="quiz-questions">
                    <div class="quiz-meta">
                        <span id="quiz-q-counter"><?php esc_html_e( 'Question 1 of 4', 'medha-compass' ); ?></span>
                        <span id="quiz-pct">0%</span>
                    </div>
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-bar__fill" id="quiz-progress" style="width:0%"></div>
                    </div>
                    <p class="quiz-question" id="quiz-question-text"></p>
                    <div class="quiz-options" id="quiz-options" role="list"></div>
                </div>

                <!-- Result panel -->
                <div class="quiz-result" id="quiz-result">
                    <div class="quiz-result__icon">✦</div>
                    <div class="quiz-result__label"><?php esc_html_e( "Your child's profile", 'medha-compass' ); ?></div>
                    <h3 class="quiz-result__heading" id="result-heading"></h3>
                    <p class="quiz-result__desc">
                        <?php esc_html_e( 'Career areas that align well with your child\'s natural strengths:', 'medha-compass' ); ?>
                    </p>
                    <div class="quiz-tags" id="result-tags"></div>
                    <p style="font-size:.8rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.5rem;font-family:var(--font-body);">
                        <?php esc_html_e( "This is a starting point. Swathi's full psychometric assessment provides a comprehensive career roadmap tailored specifically to your child.", 'medha-compass' ); ?>
                    </p>
                    <div class="quiz-result__actions">
                        <a href="#contact" class="btn btn-teal" style="font-size:.875rem;padding:.75rem 1.5rem;">
                            <?php esc_html_e( 'Book a Full Assessment', 'medha-compass' ); ?>
                        </a>
                        <button id="quiz-retake" class="btn btn-outline-teal" style="font-size:.875rem;padding:.75rem 1.5rem;">
                            <?php esc_html_e( 'Retake Quiz', 'medha-compass' ); ?>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Process Steps -->
            <div>
                <h3 style="font-family:var(--font-display);font-size:1.4rem;font-weight:600;color:var(--text-main);margin-bottom:2rem;">
                    <?php esc_html_e( "Swathi's Counselling Process", 'medha-compass' ); ?>
                </h3>

                <div class="process-steps">
                    <?php
                    $steps = [
                        [ '01', __( 'Intake + Context',        'medha-compass' ), __( "Understanding your child's background, interests, and aspirations.", 'medha-compass' ) ],
                        [ '02', __( 'Psychometric Assessment', 'medha-compass' ), __( 'Validated tools to map strengths, interests, values, and learning style.', 'medha-compass' ) ],
                        [ '03', __( 'Strengths & Interests Mapping', 'medha-compass' ), __( '1:1 counselling sessions to interpret results and explore career fit.', 'medha-compass' ) ],
                        [ '04', __( 'Career Pathway Report',   'medha-compass' ), __( 'A written roadmap with top career paths, subject guidance, and a year-wise development plan.', 'medha-compass' ) ],
                    ];
                    foreach ( $steps as [ $num, $title, $desc ] ) :
                    ?>
                    <div class="process-step">
                        <div class="process-step__num"><?php echo esc_html( $num ); ?></div>
                        <div>
                            <div class="process-step__title"><?php echo esc_html( $title ); ?></div>
                            <div class="process-step__desc"><?php echo esc_html( $desc ); ?></div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>

                <div class="process-quote">
                    <p>
                        "<?php esc_html_e( "Swathi's counselling approach includes psychometric assessments, one-on-one guidance, parent consultations, career pathway reports, and year-wise development plans.", 'medha-compass' ); ?>"
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
