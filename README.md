# accept-cookie-js

> simple, small library to save your time for accept cookie prompt to users

## cdn
<!-- cdn link -->
https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@3295dac99a7c877fd6567b505f0c639ecb7b0cc4/accept-cookie-min.js

<!-- add script with cdn link on head or body -->
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@3295dac99a7c877fd6567b505f0c639ecb7b0cc4/accept-cookie-min.js"
>
</script>

> just load the script and initialize it to use

### initialize

    window.onload = () => {
      <!-- initialize accept cookie prompt with defaults -->
      <!-- __AcceptCookie.initialize() -->
      __AcceptCookie.init();
    };

### setters

> Note: Use setters before initializing

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

```javascript
//fires when accept btn clicked unless customHTML used
onAccepted();

//fires when cancel or cross btn clicked unless customHTML used
onCancel();
```

> can use events before or after initialization

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

## dependencies used

> https://github.com/js-cookie/js-cookie is used for cookie handling, multiple browser support
