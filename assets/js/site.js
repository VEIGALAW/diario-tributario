/* Diário Tributário: movimento discreto (entrada, progresso de leitura, sumário, copiar link) */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Entrada suave dos blocos ao rolar */
  var blocks = document.querySelectorAll('.sec-head, .rows > li, .mf-pt, .video-card, .pub-book, .reveal-text, .entry, .cred, .choice');
  if (!reduced && 'IntersectionObserver' in window && blocks.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    blocks.forEach(function (el, i) {
      el.classList.add('rise');
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.06) + 's';
      io.observe(el);
    });
  }

  /* Barra de progresso de leitura (só em posts) */
  var bar = document.getElementById('progress');
  var article = document.querySelector('.post-content');
  if (bar && article) {
    var ticking = false;
    var update = function () {
      var start = article.getBoundingClientRect().top + window.scrollY - 120;
      var total = article.offsetHeight - window.innerHeight + 240;
      var done = Math.min(Math.max((window.scrollY - start) / Math.max(total, 1), 0), 1);
      bar.style.transform = 'scaleX(' + done + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* Sumário do post: montado a partir dos subtítulos (h2) */
  var toc = document.querySelector('.post-toc');
  if (toc && article) {
    var heads = article.querySelectorAll('h2[id]');
    if (heads.length >= 3) {
      var ol = toc.querySelector('ol');
      var links = [];
      heads.forEach(function (h) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a); ol.appendChild(li); links.push(a);
      });
      toc.hidden = false;
      if ('IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            links.forEach(function (l) { l.classList.toggle('on', l.hash === '#' + e.target.id); });
          });
        }, { rootMargin: '-15% 0px -70% 0px' });
        heads.forEach(function (h) { spy.observe(h); });
      }
    }
  }

  /* Copiar link do post */
  var copy = document.querySelector('.share-copy');
  if (copy && navigator.clipboard) {
    copy.addEventListener('click', function () {
      navigator.clipboard.writeText(copy.getAttribute('data-url')).then(function () {
        var old = copy.textContent;
        copy.textContent = 'Link copiado';
        setTimeout(function () { copy.textContent = old; }, 1800);
      });
    });
  } else if (copy) {
    copy.hidden = true;
  }
})();
