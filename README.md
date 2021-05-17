# accept-cookie-js

Simple, small library to save your time for prompting users with accept cookie policy prompt

### Example 
Codepen demo: https://codepen.io/kushalcodes/pen/KKWgmBy

---

### Load library

    <!-- add script on head or body: -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/kushalcodes/accept-cookie-js@master/accept-cookie-min.js"
    >
    </script>
---
### Use 
- View index.html for an example use
- Load the library and initialize it on onload to use:

    ```javascript
        window.onload = () => {
        // initialize accept cookie prompt with defaults 
        // __AcceptCookie.initialize() or __AcceptCookie.init()
        __AcceptCookie.init();
        };
    ```
---
### Setters

##### Note: Use setters before initializing

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
//fires when accept btn clicked 
__AcceptCookie.onAccepted = () => { 
    // do your stuff
    // alert('Accepted'); 
};

//fires when cancel or cross btn clicked
__AcceptCookie.onCancel = () => { 
    // do your stuff 
    // alert('Cancled');
};
```

### More Setters
```javascript
    // set cancel button html
    __AcceptCookie.setCancelBtnHTML(htmlString);

    // hide cancel btn
    __AcceptCookie.hideCancelBtn();

    // set cancel button color
    __AcceptCookie.setCancelBtnColor(color);

    // set accept btn html
    __AcceptCookie.setAcceptBtnHTML(htmlString);

    // hide accept btn
    __AcceptCookie.hideAcceptBtn();

    // set text color or background color of accept btn
    __AcceptCookie.setAcceptBtnColors(textColor, backgroundColor);
```

events can be used before or after initialization unlike setters

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

default values used unless setted using setters

## dependencies used

- https://github.com/js-cookie/js-cookie  used for cookie handling, multiple browser support
