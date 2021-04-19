[
  "https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"
].forEach(src => {
  const script = document.createElement('script');
  script.setAttribute('src', src);
  document.head.appendChild(script);
});

[
  "https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js/accept-cookie-min.js"
].forEach(src => {
  const script = document.createElement('script');
  script.setAttribute('src', src);
  document.body.appendChild(script);
});