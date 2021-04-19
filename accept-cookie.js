// @kushalcodes
// completely free no copyright
let __AcceptCookie = {
  timer: null,
  customHTML: '',
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
    css: ".__AcceptCookie{position:fixed;bottom:10px;padding:20px;background-color:#000;color:#fff;width:60%;left:20%;margin:0;overflow:auto;box-sizing:border-box;border-radius:10px;margin-bottom:10px;font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.__AcceptCookie .__accept_text{padding:4px 0 0 0;float:left;text-align:justify}.__AcceptCookie .__accept_btn,.__AcceptCookie>button{float:right;padding:8px;box-sizing:border-box;background-color:#f0f8ff;color:#000;text-align:center;border-radius:4px;outline:0;border:none;cursor:pointer;font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;min-width:50px;z-index:100000}.__AcceptCookie>button:active{background-color:#faebd7}.__AcceptCookie .__accept_btn{border-radius:0;background-color:#000;padding:4px 2px 2px 2px}@media screen and (max-width:768px){.__AcceptCookie{width:80%;left:10%}.__AcceptCookie .__accept_btn,.__AcceptCookie>button{display:block;width:100%;margin-top:8px;padding:10px;font-size:16px}}"
  },
  el: () => {
    return document.getElementById(__AcceptCookie.defaults.elId);
  },
  initialize: () => {
    // append default css to haed
    // __AcceptCookie.appendCSS();

    // if no cookie found show prompt
    const cookieValue = __AcceptCookie.get();
    if (cookieValue === "") __AcceptCookie.prompt();

    __AcceptCookie.freezeEm();
  },
  appendCSS: () => {
    let cssLinkEle = document.createElement('link');
    cssLinkEle.setAttribute('rel', 'stylesheet');
    cssLinkEle.setAttribute('type', 'text/css');
    cssLinkEle.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(__AcceptCookie.defaults.css));
    document.head.appendChild(cssLinkEle);
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
      promptEl.innerHTML += '<span class="__accept_btn" onclick="__AcceptCookie.cancel()">&#10060;</span>';
      promptEl.innerHTML += '<button onclick="__AcceptCookie.accept()">Accept</button>';
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
  },
  setCookie: (cookieName, value, expireInDays) => {
    let d = new Date();
    d.setTime(d.getTime() + (expireInDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
  },
  getCookie: (cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  freezeEm: () => {
    Object.freeze(__AcceptCookie.customHTML);
    Object.freeze(__AcceptCookie.defaults);
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

  // events
  onAccepted: () => { },
  onCancel: () => { }
};