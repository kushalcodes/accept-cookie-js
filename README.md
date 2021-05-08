# accept-cookie-js

> simple, small library to save your time for accept cookie prompt to users

## cdn

> https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@fd9f3cd6ec5bc46beff426a75075184d7c9cf24e/accept-cookie-min.js

## dependency

> https://github.com/js-cookie/js-cookie is used for cookie handling, multiple browser support

### initialize

    window.onload = () => {
      // initialize accept cookie prompt with defaults
      // __AcceptCookie.initialize()
      __AcceptCookie.init();
    };

> initialize accept cookie js with default values
> just load the library (use accept-cookie-main.js) and initialize it to use

### setters

> Note: Use setters before initializing

---

```javascript
// set expiration in days for the cookie, default : 365 days
__AcceptCookie.setExpiration(365);

// set custom cookie value, default : current date
__AcceptCookie.setCookieVaue("custom cookie value to be set");

// set custom text to cookie prompt
setText("custom text");

//set class name of cookie prompt
setClassName(customClassName);

//set id of cookie prompt
setId(customId);

// set bg color of cookie prompt
setBgColor(color);

//set border radius of cookie prompt, default : 10px
setBorderRadius(radiusValue);

//default prompt has readmore button, can set its url using
setReadMoreURL("url");

// set custom html for prompt
//accepts html string or node else throws console error
setHTML(htmlStringOrNode);
```

> Note: Use setters then \_\_AcceptCookie.initialize();

### events

---

> can use events before or after initialization

```javascript
//fires when accept btn clicked unless customHTML used
onAccepted();

//fires when cancel or cross btn clicked unless customHTML used
onCancel();
```

## defaults

#### UI

[![Default UI](https://i.imgur.com/a4e8E8a.png "Default UI")](http://i.imgur.com/a4e8E8a.png "Default UI")

#### Values

```json
    expirationDays : 365
    cookieName : '__accepted'
    cookieValue : JSON.stringify(new Date())
    readMoreURL : '#'
    className : '__AcceptCookie'
    id : '__AcceptCookie'
    bgColor : '#000000'
    borderRadius : '10px'
   text : 'We use &#127850; cookies for our users to get the best experience.'
```

> default values used unless setted using setters
