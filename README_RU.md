<br>

[EN](https://github.com/reacton-js/qparallax/blob/main/README.md) / [RU](https://github.com/reacton-js/qparallax/blob/main/README_RU.md)

![qparallax](https://raw.githubusercontent.com/reacton-js/qparallax/main/logo.jpg)

[GitHub](https://github.com/reacton-js/qparallax) | [NpmJS](https://www.npmjs.com/package/qparallax) | [Пример](http://u92502bm.beget.tech/qparallax/)

## qparallax

Быстрый параллакс

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>qparallax</title>
  <link rel="stylesheet" href="qparallax.min.css">
  <style>
    /* стили для демонстрации */
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

Переменная **--indent** из файла *qparallax.css* определяет верхний и нижний отступ в элементе «qparallax__upper», как показано ниже:

```css
.qparallax {
  --indent: 200px;
  ...
}
```

<br>

Блок «qparallax» принимает единственный атрибут ***data-speed***, который изменяет скорость параллакса. Чем выше это значение, тем более выраженным окажется эффект.

По умолчанию это значение равно 3, но его всегда можно изменить:

```html
<div class="qparallax" data-speed="5">
```

<br>

По умолчанию, параллакс идёт к верху страницы. Чтобы задать направление к низу страницы, добавьте блоку «qparallax» класс "qparallax--b":

```html
<div class="qparallax qparallax--b">
```

<br>

Для создания горизонтального параллакса, добавьте блоку «qparallax» класс "qparallax--h":

```html
<div class="qparallax qparallax--h">
```

<br>

По умолчанию, горизонтальный параллакс идёт в левую сторону. Чтобы задать направление в правую сторону, добавьте блоку «qparallax» класс "qparallax--hr":

```html
<div class="qparallax qparallax--hr">
```