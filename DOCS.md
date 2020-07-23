# Emerix docs

Para tomar los estilos, debe estar todo contenido bajo la clase **```"emerix-page"```**

```html
<body class="emerix-page">`</body>
```
o
```html
<div class="emerix-page"></div>
```

---
## Overlays/popups
Cada elemento que tenga overlays deberá esta contenido dentro de algún elemento con clase **```"overlay"```**:

```html
<html>
.
.
.
<div class="overlay"></div>
```

Para activarlo, agregarle la clase **```"active"```** y al elemento **``html``** añadirle también la clase **``no-scroll``** para que quede en modal y no se pueda scrollear la página mientras esté abierto.

```html
<html class="no-scroll">
.
.
.
<div class="overlay active"></div>
```
---
## Forms (login_[x].html)

Para mostrar los popups de error se tiene que añadir la clase **```"error"```** al elemento contenedor **```"input-wrapper"```**

```html
<div class="input-wrapper text">
	<input type="text"/>
	<div class="input-error-icon" role="alert"></div>
	<div class="input-error-popup" role="alert">Mensaje de error</div>
</div>
```
Con popup:

```html
<div class="input-wrapper text error">
	.
	.
	.
</div>
```

---
## Sidebar (navigation.html)

La estuctura de la navegación es la siguiente:

```html
<nav class="main-navigation">
	<ul>
		<li class="navigation-item">
			<a class="item" href="#">Inicio</a>
		</li>
		
		<li class="navigation-item">
			<hr><!-- separador -->
		</li>
```
Para marcar como activa una página debemos colocar la clase **``"active"``** al elemento **``"navigation-item"``** de la siguiente forma:

```html
<nav class="main-navigation">
	<ul>
		<li class="navigation-item active">
			<a class="item" href="#">Inicio</a>
		</li>
		
		<li class="navigation-item">
			<hr>
		</li>
```

El dropdown de la navegación se compone de la siguiente forma y no necesita javascript para su funcionamiento:

```html
<nav class="main-navigation">
	<ul>
		<li class="navigation-item">
			<input aria-hidden="true" type="checkbox" class="dropdown-trigger" id="dropdown-trigger-pagos">
            <label class="dropdown-title item" for="dropdown-trigger-pagos">Pagos</label>
            <div class="dropdown-target">
				<ul>
					<li class="item"><a href="#">Pagar</a></li>	
					<li class="item"><a href="#">Registrar Pago</a></li>
				</ul>
			</div>
        </li>
	</ul>
</nav>
```

Para que inicialmente aparezca desplegado solo debemos marcar el checkbox oculto (**``"dropdown-trigger"``**) como marcado con el atributo **``"checked"``**:

También existe un estado seleccionado dentro de cada dropdown, igualmente se añade la clase **``"active"``** al elemento interno **``"item"``**:

```html
    <div class="dropdown-target">
		<ul>
			<li class="item"><a href="#">Pagar</a></li>	
			<li class="item active"><a href="#">Registrar Pago</a></li>
		</ul>
    </div>
```

```html
<nav class="main-navigation">
	<ul>
		<li class="navigation-item">
			<input aria-hidden="true" type="checkbox" checked class="dropdown-trigger" id="dropdown-trigger-pagos">
            <label class="dropdown-title item" for="dropdown-trigger-pagos">Pagos</label>
            <div class="dropdown-target">
				<ul>
					<li class="item"><a href="#">Pagar</a></li>	
					<li class="item"><a href="#">Registrar Pago</a></li>
				</ul>
			</div>
        </li>
	</ul>
</nav>
```

---
## Mis pagos (invoice.html) / Promesas (deals.html)

La página invoice y deals continen un panel derecho que se abre al hacer click en alguno de los productos:

```html
<div id="invoice-sidebar" class="overlay">
    <div class="dialog-container" role="dialog">
        <a class="close-btn">
            <img src="/assets/images/ui/close-btn.svg" alt="Close">
        </a>
        <div class="dialog-content sidebar">
            CONTENIDO DE LA SIDEBAR
        </div>
    </div>
</div>
<section class="page-invoice">
	<div class="table-container">
        <table class="table" width="100%" border="0">
            <tr class="table-header">
                <td>Producto</td>
            </tr>
        </table>
	</div>
</section>
```

Para activar este panel, como es parte del componente overlay, solo se necesita agregar la clase **``"active"``** en el **``"overlay"``** como se muestra a continuación:

```html
<div id="invoice-sidebar" class="overlay active">
    <div class="dialog-container" role="dialog">
        <a class="close-btn">
            <img src="/assets/images/ui/close-btn.svg" alt="Close">
        </a>
        <div class="dialog-content sidebar">
            CONTENIDO DE LA SIDEBAR
        </div>
    </div>
</div>
```
El ejemplo es igual en la página deals.html

Como el contenido del panel es dinámico y se debe rellenar los datos, estos deben ser modificados de alguna manera (rellenar con javascript) y añadirle un listener al botón cerrar que elimine la clase **``"active"``** al propio **``"overlay"``**, que podría ser algún delegate de click en el document o en cada botón, por ejemplo:

```javascript
const closeBtn = document.querySelector('.overlay .close-btn')
closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    closeBtn.closest('.overlay').classList.remove('active')
})
```

---
## Breadcrumbs
Los breadcrumbs se arman con el siguiente HTML:

```html

<div class="breadcrumb-container flex-row flex-center" id="">
    <ul class="flex-row">
        <li class="active breadcrumb">
            item1
        </li>
        <li class="active breadcrumb">
            item2
        </li>
        <li class="active breadcrumb">
            item3
        </li>
        <li class="breadcrumb">
            item4
        </li>
    </ul>
</div>
```

Al poner la clase **``active``** se podrá activar la serie de dots que esten remarcados en sucesión. Los textos _item1_, _item2_, etc solo están por accesibilidad, el texto tiene `color: transparent` y ``font-size: 0``
