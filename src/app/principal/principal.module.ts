import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ley2166Component } from './pages/ley2166/ley2166.component';
import { Ley1989Component } from './pages/ley1989/ley1989.component';
import { Ley1551Component } from './pages/ley1551/ley1551.component';
import { ModeloEstatutosComponent } from './pages/modelo-estatutos/modelo-estatutos.component';
import { FlujogramaComponent } from './pages/flujograma/flujograma.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AfiliadosComponent,
    PrincipalComponent,
    Ley2166Component,
    Ley1989Component,
    Ley1551Component,
    ModeloEstatutosComponent,
    FlujogramaComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class PrincipalModule { }
