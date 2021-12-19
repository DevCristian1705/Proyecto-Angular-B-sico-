import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarPaisesComponent } from "./listar-paises/paises/listar-paises.component";

const routes : Routes = [
    {
        path: '',
        component : ListarPaisesComponent
    },
    {
        path : '**',
        redirectTo : ''
    }
]


@NgModule({ 
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
  