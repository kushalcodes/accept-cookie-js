// accept-cookie-js by @kushalcodes
let __AcceptCookie = {
  timer: null,
  customHTML: '',
  cancelBtn: {
    color: 'red',
    fontSize: '21px',
    html: '&#128473;',
    padding: '0 0 0 0',
    allow: true
  },
  acceptBtn: {
    bgColor: 'aliceblue',
    color: '#000000',
    allow: true,
    html: 'Accept'
  },
  dependencies: ["https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"],
  defaults: {
    expireInDays: 365,
    cookie: '__accepted',
    cookieValue: JSON.stringify(new Date()),
    readMoreURL: '#',
    text: 'We use &#127850; cookies for our users to get the best experience.',
    className: '__AcceptCookie',
    elId: '__AcceptCookie',
    hidePx: '-150px',
    showPx: '10px',
    bgColor: '#000000',
    borderRadius: '10px',
    css: ".__AcceptCookie{position:fixed;bottom:10px;padding:20px;background-color:#000;color:#fff;width:60%;left:20%;margin:0;overflow:auto;box-sizing:border-box;border-radius:10px;margin-bottom:10px;font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.__AcceptCookie .__accept_text{padding:4px 0 0 0;float:left;text-align:justify}.__AcceptCookie>button,.__AcceptCookie .__accept_btn{float:right;padding:8px;box-sizing:border-box;background-color:aliceblue;color:#000;text-align:center;border-radius:4px;outline:none;border:none;cursor:pointer;font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;min-width:50px;z-index:100000}.__AcceptCookie>button:active{background-color:antiquewhite}.__AcceptCookie .__accept_btn{border-radius:0;background-color:rgb(0,0,0);padding:4px 2px 2px 2px}.__AcceptCookie a{outline:none;color:aqua!important;text-decoration:none}.__AcceptCookie a:hover{text-decoration:underline}@media screen and (max-width:768px){.__AcceptCookie{width:80%;left:10%}.__AcceptCookie>button,.__AcceptCookie .__accept_btn{display:block;width:100%;margin-top:8px;padding:10px;font-size:16px}}"
  },
  el: () => {
    return document.getElementById(__AcceptCookie.defaults.elId);
  },
  initialize: () => {
    // append default css to haed
    __AcceptCookie.loadCSS();

    // if no cookie found show prompt
    const cookieValue = __AcceptCookie.get();
    if (!cookieValue) __AcceptCookie.prompt();

    __AcceptCookie.freezeEm();
  },
  init: () => {
    __AcceptCookie.initialize();
  },
  loadCSS: () => {
    let cssLinkEl = document.createElement('link');
    cssLinkEl.setAttribute('rel', 'stylesheet');
    cssLinkEl.setAttribute('type', 'text/css');
    cssLinkEl.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(__AcceptCookie.defaults.css));
    document.head.appendChild(cssLinkEl);
  },
  prompt: () => {
    clearTimeout(__AcceptCookie.timer);
    // create prompt element 
    let promptEl = document.createElement('div');
    promptEl.className = __AcceptCookie.defaults.className;
    promptEl.id = __AcceptCookie.defaults.elId;
    promptEl.style.backgroundColor = __AcceptCookie.defaults.bgColor;
    if (__AcceptCookie.customHTML === null || __AcceptCookie.customHTML.trim() === "") {
      promptEl.innerHTML = '<div class="__accept_text">' + __AcceptCookie.defaults.text + ' <a href="' + __AcceptCookie.defaults.readMoreURL + '">Read More</a> </div>';
      if (__AcceptCookie.cancelBtn.allow) promptEl.innerHTML += '<span class="__accept_btn" style="background-color:' + __AcceptCookie.defaults.bgColor + ';color:' + __AcceptCookie.cancelBtn.color + ';font-size:' + __AcceptCookie.cancelBtn.fontSize + ';padding:' + __AcceptCookie.cancelBtn.padding + ';" onclick="__AcceptCookie.cancel()">' + __AcceptCookie.cancelBtn.html + '</span>';
      if (__AcceptCookie.acceptBtn.allow) promptEl.innerHTML += '<button onclick="__AcceptCookie.accept()" style="background-color:' + __AcceptCookie.acceptBtn.bgColor + ';color: ' + __AcceptCookie.acceptBtn.color + '";>' + __AcceptCookie.acceptBtn.html + "</button>";
    } else {
      if (typeof __AcceptCookie.customHTML === "string") {
        promptEl.innerHTML = __AcceptCookie.customHTML;
      } else if (__AcceptCookie.customHTML instanceof Node) {
        promptEl.appendChild(__AcceptCookie.customHTML);
      } else {
        console.error('Custom HTML expects it to be HTML element or a HTML string.');
        return;
      }
    }
    promptEl.style.bottom = __AcceptCookie.defaults.hidePx;
    promptEl.style.opacity = 0;
    promptEl.style.borderRadius = __AcceptCookie.defaults.borderRadius;
    document.body.appendChild(promptEl);
    // for animation
    __AcceptCookie.timer = setTimeout(() => {
      __AcceptCookie.el().style.visibility = 'visible';
      __AcceptCookie.el().style.opacity = '1';
      __AcceptCookie.el().style.bottom = __AcceptCookie.defaults.showPx;
    }, 500);
  },
  restart: () => {
    document.body.removeChild(document.getElementById(__AcceptCookie.defaults.elId));
    __AcceptCookie.init();
  },
  get: () => {
    return __AcceptCookie.getCookie(__AcceptCookie.defaults.cookie);
  },
  accept: () => {
    __AcceptCookie.setCookie(__AcceptCookie.defaults.cookie, __AcceptCookie.defaults.cookieValue, __AcceptCookie.defaults.expireInDays);
    __AcceptCookie.hide();
    __AcceptCookie.onAccepted();
  },
  cancel: () => {
    __AcceptCookie.hide();
    __AcceptCookie.onCancel();
  },
  hide: () => {
    __AcceptCookie.el().style.bottom = __AcceptCookie.defaults.hidePx;
    __AcceptCookie.el().style.opacity = 0;
    __AcceptCookie.el().style.visibility = 'hidden';
  },
  setCookie: (cookieName, value, expireInDays) => {
    Cookies.set(cookieName, value, { expires: expireInDays })
  },
  getCookie: (cookieName) => {
    return Cookies.get(cookieName);
  },

  freezeEm: () => {
    Object.freeze(__AcceptCookie.customHTML);
    Object.freeze(__AcceptCookie.defaults);
    Object.freeze(__AcceptCookie.dependencies);
    Object.freeze(__AcceptCookie.setExpiration);
    Object.freeze(__AcceptCookie.setCookieVaue);
    Object.freeze(__AcceptCookie.setText);
    Object.freeze(__AcceptCookie.setClassName);
    Object.freeze(__AcceptCookie.setId);
    Object.freeze(__AcceptCookie.setBgColor);
    Object.freeze(__AcceptCookie.setBorderRadius);
    Object.freeze(__AcceptCookie.setReadMoreURL);
    Object.freeze(__AcceptCookie.setHTML);
    Object.freeze(__AcceptCookie.setCookie);
    Object.freeze(__AcceptCookie.getCookie);
  },

  // setters
  setExpiration: (expireInDays) => {
    __AcceptCookie.defaults.expireInDays = expireInDays;
  },
  setCookieVaue: (value) => {
    __AcceptCookie.defaults.cookieValue = value;
  },
  setText: (text) => {
    __AcceptCookie.defaults.text = text;
  },
  setClassName: (className) => {
    __AcceptCookie.defaults.className = className;
  },
  setId: (id) => {
    id = id.replace(' ', '');
    __AcceptCookie.defaults.elId = id;
  },
  setBgColor: (color) => {
    __AcceptCookie.defaults.bgColor = color;
  },
  setBorderRadius: (radius) => {
    __AcceptCookie.defaults.borderRadius = radius;
  },
  setReadMoreURL: (url) => {
    __AcceptCookie.defaults.readMoreURL = url;
  },
  setHTML: (htmlOrNode) => {
    __AcceptCookie.customHTML = htmlOrNode;
  },
  hideCancelBtn: () => {
    __AcceptCookie.cancelBtn.allow = false;
  },
  setCancelBtnHTML: (htmlString) => {
    __AcceptCookie.cancelBtn.html = htmlString;
  },
  setCancelBtnColor: (color) => {
    __AcceptCookie.cancelBtn.color = color;
  },
  hideAcceptBtn: () => {
    __AcceptCookie.acceptBtn.allow = false;
  },
  setAcceptBtnHTML: (htmlString) => {
    __AcceptCookie.acceptBtn.html = htmlString;
  },
  setAcceptBtnColors: (color = null, bgColor = null) => {
    if (color) __AcceptCookie.acceptBtn.color = color;
    if (bgColor) __AcceptCookie.acceptBtn.bgColor = bgColor;
  },

  // events
  onAccepted: () => { },
  onCancel: () => { }
};

// load dependencies
__AcceptCookie.dependencies.forEach(src => {
  const script = document.createElement('script');
  script.setAttribute('src', src);
  document.head.appendChild(script);
});