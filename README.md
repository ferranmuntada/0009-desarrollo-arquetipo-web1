<h1 align="center">Bienvenido a Banco Mediolanum Lerna-archetype 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.13.4-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.15.0-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Proyectos generados usando Lerna, ambos proyectos están usando Angular v10

## Prerequisitos

- npm >=6.13.4
- node >=12.15.0

## Instalación

Para la correcta instalación de BMED - Archetype el desarrollador debe seguir los siguientes pasos.

Clonar, instalar y construir el proyecto, para ello debe realizar los siguientes pasos.

```sh
git clone https://git.atsistemas.com/scm/bmed/0009-desarrollo-arquetipo-web.git
cd 0009-desarrollo-arquetipo-web\
npm run build-bmed
```
Con la aplicación instalada y construida solo habrá que levantar las aplicaciones, para ello se deberán ejecutar los siguientes comandos:

Storybook

```sh
npm run storybook 
```

Angular

```sh
npm run angular-start
```

### IMPORTANTE: Instalación del arquetipo en una APP de angular.
En angular.json es de ogligada implementación los assets del arquetipo.
"projects.[name_project].architect.build.options.assets"
```json
{
    "assets": [
        "src/favicon.ico",
        "src/assets",
        {
            "glob": "**/*",
            "input": "./node_modules/arquetipo-storybook/dist/assets",
            "output": "./assets/"
        }
    ]
}
```
Además es necesario incorporar los estilos del arquetipo en "styles.scss".
```scss
@import './node_modules/arquetipo-storybook/dist/assets/styles.scss';
```

#### Creación de componentes y modulos
Para la creación de un módulo se ha de ejecutar el siguiente comando:
```sh
ng g m components/[name_module] --project arquetipo-storybook
```
Para la creación de un componente se ha de ejecutar el siguiente comando:
```sh
ng g c components/[name_component] --project arquetipo-storybook
```
- Aparte de lo anterior, es necesario la creación de una carpeta y un archivo [nombre].stories.mdx para poder visualizar el componente en el storybook.

# Lazy Loading

La siguiente sección pretende explicar como estructurar y mantener el lazy loading dentro de la aplicación, para ello se explicará y se mostrará mediante un ejemplo como mantener dicha funcionalidad dentro del proyecto.

## ¿Que es el Lazy Loading?
El lazy loading o carga en diferido en español, es un patrón de diseño de programación cuyo proposito es demorar la carga del contenido multimedia hasta el momento de su uso.

Los beneficios que este patrón provee, es que las páginas diseñadas respetando esta buena práctica, se cargarán y renderizarán más rapido que otra que no lo respete, este no es el único beneficio ya que este factor de carga también repercute en el posicionamiento SEO y usabilidad de la web.

## ¿Cómo aplico el Lazy Loading en mi nueva aplicación?
Primero que nada, debemos interiorizar que a partir de ahora, cada vez que se genere un componente que acabará siendo una vista en la aplicación angular, se deberá añadir para dicho componente un módulo y un routing module. 

Lo usual (y una mala práctica muy frecuente) es que cuando se añade un componente nuevo, se añade dicho componente al **app.module.ts** y al **app-routing.module.ts**, si bien en aplicaciones pequeñas puede que el rendimiento no se vea lastrado, en cuanto nuestro proyecto comience a crecer, se empezará a notar una degradación en el rendimiento, esto se debe a que la aplicación cargará en esta modalidad todo el contenido en cuanto se arranque.

Para evitar esta práctica y como se ha indicado previamente deberemos adoptar el siguiente método que se explica a continuación. Para la inclusión y mantenimiento del Lazy Loading deberemos ejecutar las siguientes acciones en caso de estar generando una vista:

Generamos un módulo, para este ejemplo usaremos una aplicación de administración:

```sh
ng generate module admin
```
Esto genera una carpeta con el fichero **admin.module.ts** en su interior.

```sh
src
|__app
   |__admin
   |   |__admin.module.ts
   |__app-routing.module.ts
   |__app.component.html
   |__app.component.scss
   |__app.component.spec.ts
   |__app.component.ts
   |__app.module.ts
```

Tras esto generamos dos componentes, login y dashboard

```sh
ng generate component admin/login
ng generate component admin/dashboard
```

Quedando nuestro árbol de directorio del siguiente modo:

```sh
src
|__app
   |__admin
   |  |__dashboard
   |  |  |__dashboard.component.html
   |  |  |__dashboard.component.scss
   |  |  |__dashboard.component.spec.ts
   |  |  |__dashboard.component.ts
   |  |__admin
   |  |  |__admin.component.html
   |  |  |__admin.component.scss
   |  |  |__admin.component.spec.ts
   |  |  |__admin.component.ts
   |  |__admin.module.ts
   |__app-routing.module.ts
   |__app.component.html
   |__app.component.scss
   |__app.component.spec.ts
   |__app.component.ts
   |__app.module.ts
```

Añadimos al routing de nuestra aplicación el path para llegar hasta los componentes generados, y es aqui donde entra la configuración del lazy loading.

Para configurar esta funcionalidad, Angular provee de una propiedad de routing llamada loadChildren, que especifica la ruta al módulo que necesita ser cargado de manera diferida.

En nuestro ejemplo lo que tenemos que hacer es añadir la siguiente ruta a nuestro **app-routing.module.ts**:

```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

En este loadChildren se está usando la sintaxis de importación dinámica para el lazy load del módulo de admin.

El siguiente paso es configurar el routing dentro de nuestro nuevo módulo, para ello nos situaremos en la carpeta src/app/admin y crearemos el fichero **admin-routing.module.ts**, al cual le añadieremos el siguiente código:

```js
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
```

En este fichero de router incluimos las rutas de nuestros componentes de admin, para no entrar en conflictos con el fichero de router general, en vez del método **forRoot()** utilizamos el método **forChild()**.

Importamos el **admin-routing.module.ts** quedando dicho módulo como sigue:

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [ LoginComponent, DashboardComponent],
})
export class AdminModule { }
```

Esto se debe repetir para cada componente o página que realicemos para preservar el lazy loading de cualquiera de las aplicaciones realizadas bajo este arquetipo.

## Author

👤 **ATSISTEMAS**
