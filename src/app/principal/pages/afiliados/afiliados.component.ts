import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AfiliadosService } from '../../services/afiliados.service';
@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AfiliadosComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private afiliadosService: AfiliadosService
  ) {}

  productDialog: boolean = false;
  editForm: boolean = false;
  product: any;
  products: any[] = [];

  ngOnInit(): void {
    this.afiliadosService
      .listarAfiliados()
      .subscribe((resp) => (this.products = resp));
  }

  formError: boolean = false;
  genero: any[] = [
    { name: 'Masculino', code: 'MASCULINO' },
    { name: 'Femenino', code: 'FEMENINO' },
    { name: 'LGBTIQ+', code: 'LGBTIQ+' },
  ];

  estado: any[] = [
    { name: 'Activo', code: 1 },
    { name: 'inactivo', code: 0 },
  ];

  documentos: any[] = [
    { name: 'Cedula de ciudadania', code: 'CC' },
    { name: 'Tarjeta de identidad', code: 'TI' },
    { name: 'Pasaporte', code: 'PA' },
  ];

  miFormulario: FormGroup = this.fb.group({
    idAfiliado: [, [Validators.required]],
    nombre: ['', [Validators.required]],
    telefono: [, [Validators.required, Validators.pattern('[0-9]{10}')]],
    edad: [, [Validators.required, Validators.max(100)]],
    email: ['', [Validators.required, Validators.email]],
    tipoIdentificacion: ['', [Validators.required]],
    numIdentificacion: [, [Validators.required]],
    ciudad: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    ocupacion: ['', [Validators.required]],
    fecNacimiento: ['', [Validators.required]],
    comisionTrabajo: ['', [Validators.required]],
    huella: ['', [Validators.required]],
    fecAfiliacion: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  openNew() {
    this.miFormulario.get('idAfiliado')?.disable();
    this.editForm =false;
    this.miFormulario.reset();
    this.productDialog = true;
  }

  editProduct(product: any) {
    this.miFormulario.get('idAfiliado')?.enable();
    this.editForm =true;
    const datos = {
      ...product,
      tipoIdentificacion: this.documentos.find(
        (element) => element.code === product.tipoIdentificacion
      ),
      genero: this.genero.find(
        (element) => element.code === product.genero.toUpperCase()
      ),
      estado: this.estado.find((element) => element.code == product.estado),
      fecNacimiento: new Date(
        `${product.fecNacimiento.substring(5,7 )}-${product.fecNacimiento.substring(8,10)}-${product.fecNacimiento.substring(0, 4)}`
      ),
      fecAfiliacion: new Date(
        `${product.fecAfiliacion.substring(
          5,
          7
        )}-${product.fecAfiliacion.substring(
          8,
          10
        )}-${product.fecAfiliacion.substring(0, 4)}`
      ),
    };
    this.miFormulario.reset({ ...datos });
    this.productDialog = true;
  }

  deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Esta seguro que desea eliminar a ' + product.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        product.estado = 0;
        this.afiliadosService
          .eliminarAfiliado(product)
          .subscribe((resp) => console.log(resp));
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
  }

  guardar() {
    console.log('xxx',this.miFormulario);
    
    if (this.miFormulario.status === 'INVALID') {
      this.formError = true;
    } else {
      this.formError = false;
      this.productDialog = false;
      let data = this.getPayload(this.miFormulario.controls);
      !this.editForm && delete data.idAfiliado;
      this.afiliadosService.actualizarAfiliado(data)
      .subscribe(resp=> console.log(resp)
     )       
    }
  }

  getPayload(data: any) {
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaNacimiento = data.fecNacimiento.value.toLocaleDateString("es-ES", options).split('/');
    fechaNacimiento[0] = fechaNacimiento[0].padStart(2,'0');
    fechaNacimiento[1] =fechaNacimiento[1] .padStart(2,'0');
   
    const fechaAfiliacion = data.fecAfiliacion.value.toLocaleDateString("es-ES", options).split('/');
    fechaAfiliacion[0] =  fechaAfiliacion[0].padStart(2,'0');
    fechaAfiliacion[1]=  fechaAfiliacion[0].padStart(2,'0');
    return {
      idAfiliado: data.idAfiliado.value,
      nombre: data.nombre.value,
      telefono: data.telefono.value,
      edad: data.edad.value,
      email: data.email.value,
      tipoIdentificacion: data.tipoIdentificacion.value.code,
      numIdentificacion: data.numIdentificacion.value,
      ciudad: data.ciudad.value,
      departamento: data.departamento.value,
      direccion: data.direccion.value,
      genero: data.genero.value.code,
      ocupacion: data.ocupacion.value,
      fecNacimiento: fechaNacimiento.reverse().join('-'), 
      comisionTrabajo: data.comisionTrabajo.value,
      huella: data.huella.value,
      fecAfiliacion: fechaAfiliacion.reverse().join('-'),
      estado: data.estado.value.code,
    };
  }
}
