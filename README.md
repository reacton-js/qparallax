<br>

[EN](https://github.com/reacton-js/qparallax/blob/main/README.md) / [RU](https://github.com/reacton-js/qparallax/blob/main/README_RU.md)

![qparallax](https://raw.githubusercontent.com/reacton-js/qparallax/main/logo.jpg)

[GitHub](https://github.com/reacton-js/qparallax) | [NpmJS](https://www.npmjs.com/package/qparallax) | [Example](http://u92502bm.beget.tech/qparallax/)

## qparallax

Quick Parallax

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>qparallax</title>
  <link rel="stylesheet" href="qparallax.min.css">
  <style>
    /* styles for demonstration */
    body {
      margin: 0;
      padding: 0;
      min-height: 1500px;
    }
    h2 {
      color: #fff;
    }
    button {
      padding: 5px 30px;
    }
  </style>
</head>
<body>

  <div class="qparallax">
    <div class="qparallax__upper">
      <h2>Lorem ipsum dolor amet consectetur adipisicing</h2>
      <button>More...</button>
    </div>
    <div class="qparallax__lower">
      <img src="img/gradient.jpg" alt="gradient">
    </div>
  </div>
  
  <script src="qparallax.min.js"></script>
</body>
</html>
```

<br>

The **--indent** variable from the *qparallax.css* file defines the top and bottom padding on the «qparallax__upper» element, as shown below:

```css
.qparallax {
  --indent: 200px;
  ...
}
```

<br>

The «qparallax» block accepts a single attribute ***data-speed*** which changes the parallax speed. The higher this value, the more pronounced the effect will be.

By default, this value is 3, but you can always change it:

```html
<div class="qparallax" data-speed="5">
```

<br>

By default, parallax goes to the top of the page. To set the direction to the bottom of the page, add the class "qparallax--b" to the «qparallax» block:

```html
<div class="qparallax qparallax--b">
```

<br>

To create horizontal parallax, add the class "qparallax--h" to the «qparallax» block:

```html
<div class="qparallax qparallax--h">
```

<br>

By default, the horizontal parallax goes to the left. To set the direction to the right, add the class "qparallax--hr" to the «qparallax» block:

```html
<div class="qparallax qparallax--hr">
```