import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { InvertirCadenaComponent } from './ejercicios/invertir-cadena/invertir-cadena.component';
import { PalabrasRepetidasComponent } from './ejercicios/palabras-repetidas/palabras-repetidas.component';

const routes: Routes = [
  {path: "componente", component: ComponentsComponent},
  {path: "", component: InvertirCadenaComponent},
  {path: "repetidas", component: PalabrasRepetidasComponent},
  {path: "invertir", component: InvertirCadenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
