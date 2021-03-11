## 1er paso

ejecuta estos comandos 

```
npm i ng-tailwindcss -g
npm i tailwindcss -D
npx tailwind init # use --full, if you want to see all the defaults in your tailwind.config.js
ngtw configure
touch src/tailwind.css
```

Agrega el siguiente contenido en el archivo `src/tailwind.css`

```
@tailwind base;
@tailwind utilities;

@screen sm {
  .sm\:grid { display: grid !important; }
}

@screen md {
  .md\:grid { display: grid !important; }
}

@screen lg {
  .lg\:grid { display: grid !important; }
}

@screen xl {
  .xl\:grid { display: grid !important; }
}
```

crea igualmente un archivo llamado `ng-tailwind.js` y dentro del el copia lo siguiente

```
module.exports = {
  // Tailwind Paths
  configJS: './tailwind.config.js',
  sourceCSS: './src/tailwind.css',
  outputCSS: './src/styles.css',
  watchRelatedFiles: [],
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: ['dynamically-generated-class'], // Problem solved
  whitelistPatterns: [], // overkill, but also works
  whitelistPatternsChildren: [],
  extensions: ['.ts', '.html', '.js'],
  content: []
} 
```

## 2do paso

Ingresa a la siguiente [pagina](https://tailwind.ink/) para generar rapidamente los colores que utilizaremos en la app


## 3er paso

modifica tu package.json agregando el comando `prestart` este comando se ejecuta antes del start, y nos ayudara para hacer un build de los estilos de tailwind
```
    "prestart": "ngtw build --purge",
    "start": "ng serve && ngtw watch",
```