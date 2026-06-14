/**
 * Medha Compass — Main JS
 */
(function () {
  'use strict';

  /* ─── Mobile Nav ──────────────────────────────────────────────── */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks  = document.getElementById('primary-menu');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─── Smooth scroll ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ─── Career Quiz ─────────────────────────────────────────────── */
  var QUIZ = {
    questions: [
      { text: 'When given a free afternoon, your teen is most likely to…', options: [{ label: 'Take something apart to see how it works', cluster: 'investigative' },{ label: 'Sketch, write, or make something creative', cluster: 'artistic' },{ label: 'Organise their room or plan out a schedule', cluster: 'conventional' },{ label: 'Hang out and talk with friends or family', cluster: 'social' }] },
      { text: 'Which school subject do they talk about most at home?', options: [{ label: 'Science or Mathematics', cluster: 'investigative' },{ label: 'Art, Drama, or English', cluster: 'artistic' },{ label: 'Economics or Business Studies', cluster: 'enterprising' },{ label: 'History or Social Sciences', cluster: 'social' }] },
      { text: 'When facing a difficult problem, they usually…', options: [{ label: 'Research every angle before deciding', cluster: 'investigative' },{ label: 'Go with their gut and improvise', cluster: 'artistic' },{ label: 'Make a pros-and-cons list', cluster: 'conventional' },{ label: 'Ask a friend or teacher for their take', cluster: 'social' }] },
      { text: 'Their ideal future role would involve…', options: [{ label: 'Building or inventing things', cluster: 'realistic' },{ label: 'Leading a team toward a big goal', cluster: 'enterprising' },{ label: 'Helping people through tough times', cluster: 'social' },{ label: 'Creating art, music, or stories', cluster: 'artistic' }] },
    ],
    results: {
      investigative: { title: 'The Analytical Mind', careers: ['Medicine & Research','Engineering','Data Science','Architecture'] },
      artistic:      { title: 'The Creative Spirit', careers: ['Design & UX','Filmmaking','Journalism','Performing Arts'] },
      social:        { title: 'The People Person',   careers: ['Psychology','Teaching','Social Work','Healthcare'] },
      enterprising:  { title: 'The Natural Leader',  careers: ['Entrepreneurship','Law','Management','Marketing'] },
      conventional:  { title: 'The Structured Thinker', careers: ['Finance & Accounting','Project Management','Operations','Law'] },
      realistic:     { title: 'The Builder',         careers: ['Engineering','Architecture','Sports Science','Technology'] },
    },
    current: 0, answers: [],
    init: function () {
      this.qPanel = document.getElementById('quiz-questions');
      this.rPanel = document.getElementById('quiz-result');
      this.qCounter = document.getElementById('quiz-q-counter');
      this.qPct = document.getElementById('quiz-pct');
      this.qProgress = document.getElementById('quiz-progress');
      this.qText = document.getElementById('quiz-question-text');
      this.qOptions = document.getElementById('quiz-options');
      this.rHeading = document.getElementById('result-heading');
      this.rTags = document.getElementById('result-tags');
      this.retake = document.getElementById('quiz-retake');
      if (!this.qPanel) return;
      this.render();
      if (this.retake) this.retake.addEventListener('click', this.reset.bind(this));
    },
    render: function () {
      var q = this.questions[this.current];
      var pct = Math.round((this.answers.length / this.questions.length) * 100);
      if (this.qCounter) this.qCounter.textContent = 'Question ' + (this.current + 1) + ' of ' + this.questions.length;
      if (this.qPct) this.qPct.textContent = pct + '%';
      if (this.qProgress) this.qProgress.style.width = pct + '%';
      if (this.qText) this.qText.textContent = q.text;
      if (this.qOptions) {
        this.qOptions.innerHTML = '';
        q.options.forEach(function (opt) {
          var btn = document.createElement('button');
          btn.className = 'quiz-option'; btn.type = 'button'; btn.textContent = opt.label;
          btn.addEventListener('click', this.answer.bind(this, opt.cluster));
          this.qOptions.appendChild(btn);
        }, this);
      }
    },
    answer: function (cluster) {
      this.answers.push(cluster);
      if (this.answers.length < this.questions.length) { this.current++; this.render(); } else { this.showResult(); }
    },
    showResult: function () {
      var freq = {};
      this.answers.forEach(function (c) { freq[c] = (freq[c] || 0) + 1; });
      var top = Object.keys(freq).reduce(function (a, b) { return freq[a] >= freq[b] ? a : b; });
      var res = this.results[top] || this.results.investigative;
      if (this.rHeading) this.rHeading.textContent = res.title;
      if (this.rTags) { this.rTags.innerHTML = ''; res.careers.forEach(function (c) { var s = document.createElement('span'); s.className = 'quiz-tag'; s.textContent = c; this.rTags.appendChild(s); }, this); }
      if (this.qPanel) this.qPanel.classList.add('is-hidden');
      if (this.rPanel) this.rPanel.classList.add('is-visible');
    },
    reset: function () {
      this.current = 0; this.answers = [];
      if (this.qPanel) this.qPanel.classList.remove('is-hidden');
      if (this.rPanel) this.rPanel.classList.remove('is-visible');
      this.render();
    },
  };

  /* ─── Testimonials ────────────────────────────────────────────── */
  var TESTI = {
    data: [
      { quote: 'Before working with Swathi, my daughter had no idea what she wanted to do after school. After just a few sessions, she had a clear direction and the confidence to pursue it. The career roadmap document was incredibly detailed and practical.', name: 'Priya R.', role: 'Parent of Grade 12 student, Bengaluru', avatar: 'PR', color: '#1a7a8a', outcome: 'Engineering stream confirmed with university shortlist' },
      { quote: "Swathi's approach is different — she actually listens to the student, not just the parent. My son went from feeling completely lost to having a clear three-year plan. The psychometric assessment opened his eyes to strengths he didn't know he had.", name: 'Anand M.', role: 'Parent of Grade 10 student', avatar: 'AM', color: '#2d8a6a', outcome: 'Shifted to Commerce stream with data science focus' },
      { quote: "As a Grade 9 student I was nervous about subject choices. Swathi explained everything in a way that made sense to me — not just jargon. I now feel confident about my path and actually look forward to my subjects.", name: 'Riya S.', role: 'Student, Grade 9', avatar: 'RS', color: '#e8502a', outcome: 'Clear subject plan and year-wise development tracker' },
      { quote: "The Harvard-level expertise Swathi brings combined with her genuine warmth makes all the difference. Our twins both went through the programme and came out with completely different but equally well-defined roadmaps.", name: 'Kavitha N.', role: 'Parent of twins, Grade 11', avatar: 'KN', color: '#7a4a1a', outcome: 'Dual personalised career roadmaps for both students' },
    ],
    active: 0,
    init: function () {
      this.dots = document.getElementById('testi-dots');
      this.thumbs = document.getElementById('testi-thumbs');
      this.quote = document.getElementById('testi-quote');
      this.avatar = document.getElementById('testi-avatar');
      this.name = document.getElementById('testi-name');
      this.role = document.getElementById('testi-role');
      this.outcome = document.getElementById('testi-outcome');
      if (!this.dots) return;
      this.buildThumbs();
      this.render(0);
      this.dots.querySelectorAll('.testimonials__dot').forEach(function (dot) {
        dot.addEventListener('click', function () { TESTI.render(parseInt(dot.dataset.index, 10)); });
      });
    },
    buildThumbs: function () {
      if (!this.thumbs) return;
      this.thumbs.innerHTML = '';
      this.data.forEach(function (t, i) {
        var btn = document.createElement('button');
        btn.className = 'testi-thumb' + (i === 0 ? ' is-active' : '');
        btn.type = 'button'; btn.setAttribute('role', 'tab');
        btn.innerHTML = '<div class="testi-avatar" style="background:' + t.color + ';width:1.75rem;height:1.75rem;font-size:.65rem;">' + t.avatar + '</div><div class="testi-thumb__name">' + t.name + '</div><div class="testi-thumb__role">' + t.role + '</div>';
        btn.addEventListener('click', this.render.bind(this, i));
        this.thumbs.appendChild(btn);
      }, this);
    },
    render: function (i) {
      this.active = i; var t = this.data[i];
      if (this.quote) this.quote.textContent = t.quote;
      if (this.name) this.name.textContent = t.name;
      if (this.role) this.role.textContent = t.role;
      if (this.outcome) this.outcome.textContent = t.outcome;
      if (this.avatar) { this.avatar.textContent = t.avatar; this.avatar.style.background = t.color; }
      if (this.dots) this.dots.querySelectorAll('.testimonials__dot').forEach(function (d, idx) { d.classList.toggle('is-active', idx === i); });
      if (this.thumbs) this.thumbs.querySelectorAll('.testi-thumb').forEach(function (th, idx) { th.classList.toggle('is-active', idx === i); });
    },
  };

  /* ─── FAQ Accordion ───────────────────────────────────────────── */
  function initAccordion() {
    var items = document.querySelectorAll('#faq-accordion .accordion-item');
    items.forEach(function (item) {
      var btn = item.querySelector('.accordion-btn');
      var body = item.querySelector('.accordion-body');
      if (!btn || !body) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(function (other) {
          other.classList.remove('is-open');
          var ob = other.querySelector('.accordion-body');
          var ob_btn = other.querySelector('.accordion-btn');
          if (ob) ob.setAttribute('hidden', '');
          if (ob_btn) ob_btn.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { item.classList.add('is-open'); body.removeAttribute('hidden'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });
  }

  /* ─── Contact Form ────────────────────────────────────────────── */
  function initForm() {
    var form = document.getElementById('medha-contact-form');
    var success = document.getElementById('form-success');
    var successTx = document.getElementById('form-success-text');
    var errMsg = document.getElementById('form-error-msg');
    var submitBtn = document.getElementById('form-submit');
    var resetBtn = document.getElementById('form-reset');
    if (!form) return;

    function setError(groupId, show) {
      var g = document.getElementById(groupId);
      if (g) g.classList.toggle('has-error', show);
    }
    function validate() {
      var pn = form.querySelector('[name="parent_name"]').value.trim();
      var sn = form.querySelector('[name="student_name"]').value.trim();
      var gr = form.querySelector('[name="grade"]').value;
      var em = form.querySelector('[name="email"]').value.trim();
      var co = form.querySelector('[name="concern"]').value;
      setError('fg-parent-name', !pn); setError('fg-student-name', !sn);
      setError('fg-grade', !gr); setError('fg-concern', !co);
      setError('fg-email', !em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em));
      return !!(pn && sn && gr && co && em && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;
      if (errMsg) errMsg.style.display = 'none';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      var parentName = form.querySelector('[name="parent_name"]').value.trim();
      var data = new FormData(form);
      data.append('action', 'medha_contact');
      data.append('nonce', (typeof medhaData !== 'undefined') ? medhaData.nonce : '');
      fetch((typeof medhaData !== 'undefined') ? medhaData.ajaxUrl : '/wp-admin/admin-ajax.php', { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.style.display = 'none';
            if (successTx) successTx.textContent = 'Thank you, ' + parentName + '! Swathi will review your message and contact you within one business day to schedule your free discovery call.';
            if (success) success.classList.add('is-visible');
          } else {
            if (errMsg) { errMsg.textContent = (res.data && res.data.message) ? res.data.message : 'Something went wrong. Please try again.'; errMsg.style.display = 'block'; }
          }
        })
        .catch(function () { if (errMsg) { errMsg.textContent = 'Network error. Please email us directly.'; errMsg.style.display = 'block'; } })
        .finally(function () { if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Request My Free Discovery Call with Swathi'; } });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset(); form.style.display = '';
        if (success) success.classList.remove('is-visible');
      });
    }
  }

  /* ─── Boot ────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    QUIZ.init();
    TESTI.init();
    initAccordion();
    initForm();
  });

})();
