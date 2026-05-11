// Mehr dropdown — click-to-toggle for touch and keyboard; CSS handles hover.
(function () {
  function init() {
    var trigger = document.querySelector('.dropdown-trigger');
    if (!trigger) return;
    var li = trigger.closest('.has-dropdown');
    if (!li) return;

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      li.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!li.contains(e.target)) {
        trigger.setAttribute('aria-expanded', 'false');
        li.classList.remove('open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        trigger.setAttribute('aria-expanded', 'false');
        li.classList.remove('open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
