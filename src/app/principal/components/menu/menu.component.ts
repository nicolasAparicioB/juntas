import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'ORGANIGRAMA',
        items: [
          { label: 'Jacs' },
          { label: 'Junta directiva' },
        ],
      },
      {
        label: 'NORMATIVIDAD',
        items: [
          { label: 'Ley 2166 de 2021',  routerLink: '/meeting/ley-2166-del-2021' },
          { label: 'Ley 1989 de 2019',  routerLink: '/meeting/ley-1989-del-2019' },
          { label: 'Ley 1551 de 2012',  routerLink: '/meeting/ley-1551-del-2012' },
        ],
      },
      {
        label: 'MODELO ESTATUTOS' , routerLink: '/meeting/modelo-estatutos',
      },
      {
        label: 'CARGOS',
        items: [
          { label: 'Asamblea',
            items: [
              {label: 'Funciones'},
              {label: 'Libreo de actas Asamblea'}
            ]
          },
          { label: 'Junta Directiva',
          items: [
            {label: 'Funciones'},
            {label: 'Libreo de actas Junta Directiva'}
          ]
          },
          { label: 'Presidente',
          items: [
            {label: 'Funciones'},
          ]
          },
          { label: 'Vicepresidente',
          items: [
            {label: 'Funciones'},
          ]
          },
          { label: 'Secretario',
          items: [
            {label: 'Funciones'},
            {label: 'Libro de Afiliados' ,  routerLink: '/meeting/afiliados'},
            {label: 'Foto Carnet'},
            {label: 'Libreo de Asistencia'},
            {label: 'Depuración',
            items: [
              {label: 'Flujograma' , routerLink: '/meeting/flujograma'}
            ]
            },
            {label: 'Elecciones'},
            {label: 'Certificados',
            items: [
              {label: 'Solicitud de Afiliación'},
              {label: 'Dignatario'},
              {label: 'Historico'},
              {label: 'Censo Residentes'},
              {label: 'Constancia de Sana posesión'},
              {label: 'Horas Sociales'},
              {label: 'Pasantias Profesionales'},
              {label: 'Ejecuion de Obras y Proyectos'},
              {label: 'Buena Conducta'},
              {label: 'Sancion-CCC'},
              {label: 'Inhabilidad-CCC'},
              {label: 'No Asistencia'}
            ]},
          ]
          },
          { label: 'tesorero',
          items: [
            {label: 'Funciones'},
            {label: 'Libro Contable'},
            {label: 'Factura Electronica'},
            {label: 'Comprobante Egreso'},
            {label: 'Comprobante Ingreso'},
            {label: 'Recibo de Caja'},
            {label: 'Libro Inventarios'},
          ]
          },
          { label: 'Fiscal',
          items: [
            {label: 'Funciones'},
          ]},
          { label: 'Comite de Conciliación',
          items: [
            {label: 'Funciones'},
          ]},
          { label: 'Comision de trabajo',
          items: [
            {label: 'Educación',
            items: [
              {label: 'Funciones'},
            ]},
            {label: 'Salud',
            items: [
              {label: 'Funciones'},
            ]},
            {label: 'Ambiental',
            items: [
              {label: 'Funciones'},
            ]},
            {label: 'Empresarial',
            items: [
              {label: 'Funciones'},
            ]},
            {label: 'Obras',
            items: [
              {label: 'Funciones'},
            ]},
            {label: 'Deportes',
            items: [
              {label: 'Funciones'},
            ]},
          ]},
          { label: 'Delegado',
          items: [
            {label: 'Funciones'},
          ]},
        ],
      },
      {
        label: 'PLANEACIÓN',
        items: [
          { label: 'Plan estrategico'},
          { label: 'Plan de Acción'},
          { label: 'Proyectos'},
        ],
      },
    ];
  }
}
