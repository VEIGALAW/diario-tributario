/* Diário Tributário: movimento discreto (revelação, topbar, progresso) */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Revelação ao rolar, com escalonamento dentro de grades */
  var revealables = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window && revealables.length) {
    document.querySelectorAll('.post-grid, .video-grid, .cred-grid').forEach(function (grid) {
      var i = 0;
      grid.querySelectorAll(':scope > .reveal').forEach(function (el) {
        el.style.setProperty('--d', (Math.min(i, 7) * 0.07) + 's');
        i++;
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in'); });
  }

  /* Topbar flutuante depois do masthead */
  var topbar = document.querySelector('.topbar');
  var masthead = document.querySelector('.masthead');
  if (topbar && masthead) {
    var limit = 0;
    var measure = function () { limit = masthead.offsetTop + masthead.offsetHeight; };
    measure();
    window.addEventListener('resize', measure);
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        topbar.classList.toggle('show', window.scrollY > limit);
        ticking = false;
      });
    }, { passive: true });
  }

  /* Barra de progresso de leitura (só em posts) */
  var bar = document.querySelector('.progress');
  var article = document.querySelector('.post-content');
  if (bar && article) {
    var t2 = false;
    var update = function () {
      var start = article.offsetTop;
      var total = article.offsetHeight - window.innerHeight + 160;
      var done = Math.min(Math.max((window.scrollY - start + 160) / Math.max(total, 1), 0), 1);
      bar.style.transform = 'scaleX(' + done + ')';
    };
    window.addEventListener('scroll', function () {
      if (t2) return;
      t2 = true;
      requestAnimationFrame(function () { update(); t2 = false; });
    }, { passive: true });
    update();
  }
})();
