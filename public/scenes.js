/* Alle's animated scenes (the same ones as the app's tour), loaded from the app
   itself so they always match it. Put <div data-alle-scene="welcome|ready|sheets|ai|study|home">
   on the page and include this script. Decorative only: if loading fails, the
   beige panel simply stays empty. */
(function () {
  var els = document.querySelectorAll('[data-alle-scene]');
  if (!els.length) return;
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var ORIGIN = local ? 'http://localhost:4311' : 'https://my.allecards.app';
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = ORIGIN + '/embed/scenes.css';
  document.head.appendChild(link);
  fetch(ORIGIN + '/embed/scenes.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      if (!data || !data.scenes) return;
      els.forEach(function (el) {
        var html = data.scenes[el.getAttribute('data-alle-scene')];
        if (html) { el.innerHTML = html; el.classList.add('is-loaded'); }
      });
    })
    .catch(function () {});
})();
