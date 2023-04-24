import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    SelectButtonModule
  ]
})
export class PrimeNgModule { }
