# ArquetipoWeb

## INDICE

- PREREQUSITOS
- ARRANQUE DEL SERVIDOR DE DESARROLLO
- GENERACIÓN DE ELEMENTOS
- LAZY LOADING
- CONTRUCCIÓN DEL PROYECTO PARA SU DESPLIEGUE EN PRODUCCIÓN
- EJECUTAR TEST UNITARIOS
- EJECUTAR TEST E2E
- MÁS AYUDA

### PREREQUISITOS

- npm >=6.13.4
- node >=12.15.0
- Angular 10.0.5

## ARRANQUE DEL SERVIDOR DE DESARROLLO

Para arrancar el proyecto ejecutar el comando:
```sh
ng serve
```
Se levantará la aplicación en `http://localhost:4200/`, una vez arrancada la apliación se refrescará automáticamente cuando se realicen cambios.

Este proyecto se ha generado con Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## GENERACIÓN DE ELEMENTOS

Angular permite la generación de diferentes elementos dentro del propio framework, para ello hay que ejecutar el comando:

```sh
ng generate component* component-name
```

Pudiendo cambiar el elemento con * por:

* directive
* pipe
* service
* class
* guard
* interface
* enum
* module

## LAZY LOADING

La siguiente sección pretende explicar como estructurar y mantener el lazy loading dentro de la aplicación, para ello se explicará y se mostrará mediante un ejemplo como mantener dicha funcionalidad dentro del proyecto.

### ¿Que es el Lazy Loading?
El lazy loading o carga en diferido en español, es un patrón de diseño de programación cuyo proposito es demorar la carga del contenido multimedia hasta el momento de su uso.

Los beneficios que este patrón provee, es que las páginas diseñadas respetando esta buena práctica, se cargarán y renderizarán más rapido que otra que no lo respete, este no es el único beneficio ya que este factor de carga también repercute en el posicionamiento SEO y usabilidad de la web.

### ¿Cómo aplico el Lazy Loading en mi nueva aplicación?
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

## CONTRUCCIÓN DEL PROYECTO PARA SU DESPLIEGUE EN PRODUCCIÓN

Para ejecutar el empaquetado del proyecto y contruir los artefactos distribuibles `dist/` ejecute el comando:

```sh
ng build --prod
```

En caso de querer la version para otro entorno, indquelo después de los guiones y recuerde dar de alta dicho entorno en las variables de **enviroment**.

## EJECUTAR TEST UNITARIOS

Para ejecutar los tesde la aplicación ejecute el comando:

```sh
ng test
``` 

En caso de querer ver el coverage de código obtenido ejecute:

```sh
ng test --code--coverage
``` 
Los test son ejecutados via [Karma](https://karma-runner.github.io).

## EJECUTAR TEST E2E

Para ejecutar test end to end ejecute el comando:

```sh
ng e2e
``` 
Los test son ejecutados via [Protractor](http://www.protractortest.org/).

## MÁS AYUDA

Para obtener más ayuda acerca del uso de Angular CLI utilice el comando
```sh
ng help
```
O visite [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
