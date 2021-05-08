const dependency = "https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js";
const dependencyScript = document.createElement('script');
dependencyScript.setAttribute('src', dependency);
document.head.appendChild(dependencyScript);

const lastCommit = "d7c0116a55b9bcf4277964873d4f73710306b624";
const acceptCookieMinJs = document.createElement('script');
acceptCookieMinJs.setAttribute('src', "https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@" + lastCommit + "/accept-cookie-min.js");
document.body.appendChild(acceptCookieMinJs);