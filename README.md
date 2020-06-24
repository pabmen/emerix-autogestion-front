# EMERIX-AUTOGESTION FRONT END

## Inicialización
`rm -fr node_modules`
`npm install`
`npm run start`

## Deployment

`npm build`

Use build folder /build

## Stack

* Package Manager: npm
* CSS Pre processor: SASS with include-media plugin for media queries
* Template Engine: Twig.
* Task Manager: gulp v3
* Module Bundler: webpack 4
* Dev server: gulp-connect
* browserslist in packages.json will be used by autoprefixer and babel-polyfill: https://babeljs.io/docs/en/babel-preset-env#browserslist-integration


Modo debug: en URL agregar ?debug=1, se agrega una clase .debug en el HTML


IMPORTANT: All polyfills are added automatically with Babel using browserslist targets.
For this, we need to install these modules:
`npm install --save core-js regenerator-runtime`

We are not using `.babelrc` as configuration file. Babel configuration is setup inside `webpack.config` files.
We do this so we can specify different Babel parameters for dev and production environments.



## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build
```

To create a stage build:

```sh
npm run stage
```

To create a development build:

```sh
npm run start
```

