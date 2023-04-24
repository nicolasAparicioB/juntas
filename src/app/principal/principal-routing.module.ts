import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { Ley2166Component } from './pages/ley2166/ley2166.component';
import { Ley1989Component } from './pages/ley1989/ley1989.component';
import { Ley1551Component } from './pages/ley1551/ley1551.component';
import { ModeloEstatutosComponent } from './pages/modelo-estatutos/modelo-estatutos.component';
import { FlujogramaComponent } from './pages/flujograma/flujograma.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalComponent,
      },
      {
        path: 'ley-2166-del-2021',
        component: Ley2166Component,
      },
      {
        path: 'ley-1989-del-2019' ,
        component: Ley1989Component,
      },
      {
        path: 'ley-1551-del-2012' ,
        component: Ley1551Component,
      },
      {
        path: 'modelo-estatutos' ,
        component: ModeloEstatutosComponent,
      },
      {
        path: 'flujograma' ,
        component: FlujogramaComponent,
      },
      {
        path: 'afiliados',
        component: AfiliadosComponent,
      },
      {
        path: '**',
        redirectTo: 'principal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
