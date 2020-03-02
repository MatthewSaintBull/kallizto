# KALLIZTO v0.1.0

another css library made only because I need a standard for my projects

## Menu

 - <a href="#html-setup">HTML5 setup</a>  
 - <a href="#layout">Layout</a>
 - <a href="#navbar">Navbar</a>
 - <a href="#input">Input</a>

  <section id="html-setup"></section>
  
## HTML5 setup :rocket:
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="stylesheet" href="./style/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
    ...
    </body>
    <script src="./src/index.js"></script>
    </html>
    
  <section id="layout"></section>
  
## Layout :heavy_exclamation_mark:

### Container
 - If you want to use Navbars, please use
	`<div class="container-nav"></div>`
- If you want to use Sidebars, please use 
	```<div class="container-side"></div>```
#### Inside the Container, there are Columns and Rows to handle your layout

### Col
|MD|LG  |
|--|--|
| `<div class="col-md"></div>` |` <div class="col-lg"></div>`|

### Row
```<div class="row"></div>```

  <section id="navbar"></section>

## Navbar :left_right_arrow:

Navbar allows responsivity for your web-apps.
There is a code for a responsive navbar. 

### Primary
````
<div class="navbar-primary">
    <h2 class="brand">Hello</h2>
    <a class="mobile"><i class="fa fa-bars"></i></a>
</div>
````
### Secondary
````
<div class="navbar-secondary">
	<h2 class="brand">Hello</h2>
	<a class="mobile"><i class="fa fa-bars"></i></a>
</div>
````

The `<a></a>` tag it's necessary for responsivity
The `<h2></h2>` tag it's only a logo tag. You can use whatever you want using the class 'brand' 

> **Warning** :warning: the logo has been tested only with `<h2></h2>` and `<p></p>`but it should work either with images

  <section id="input"></section>
  
## Input :black_nib:

### Primary
`<input type="text" class="input-primary">`

### Secondary
`<input type="text" class="input-secondary">`


