# accept-cookie-js

- Simple, small library to save your time for prompting users with accept cookie policy prompt

### Load library

    <!-- add script with src (cdn link) on head or body as: -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@3295dac99a7c877fd6567b505f0c639ecb7b0cc4/accept-cookie-min.js"
    >
    </script>
---
### Use 
- Load the library and initialize it on onload to use, eg:
- View index.html for an example

```javascript
    window.onload = () => {
      // initialize accept cookie prompt with defaults 
      // __AcceptCookie.initialize() or __AcceptCookie.init()
      __AcceptCookie.init();
    };
```
---
### Setters

###### Note: Use setters before initializing

```javascript
// set expiration in days for the cookie, default : 365 days
__AcceptCookie.setExpiration(365);

// set custom cookie value, default : current date
__AcceptCookie.setCookieVaue("custom cookie value to be set");

// set custom text to cookie prompt
__AcceptCookie.setText("custom text");

//set class name of cookie prompt
__AcceptCookie.setClassName(customClassName);

//set id of cookie prompt
__AcceptCookie.setId(customId);

// set bg color of cookie prompt
__AcceptCookie.setBgColor(color);

//set border radius of cookie prompt, default : 10px
__AcceptCookie.setBorderRadius(radiusValue);

//default prompt has readmore button, can set its url using
__AcceptCookie.setReadMoreURL("url");

// set custom html for prompt
//accepts html string or node else throws console error
__AcceptCookie.setHTML(htmlStringOrNode);
```

### Events

```javascript
//fires when accept btn clicked unless customHTML used
onAccepted();

//fires when cancel or cross btn clicked unless customHTML used
onCancel();
```

- events can be used before or after initialization unlike setters

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

- default values used unless setted using setters

## dependencies used

- https://github.com/js-cookie/js-cookie  used for cookie handling, multiple browser support
