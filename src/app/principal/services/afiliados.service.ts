import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, of } from 'rxjs';
import { Afiliados } from '../interfaces/afiliados';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://servicosjac-v0.herokuapp.com';

  listarAfiliados() {
    const url = `${this.url}/v0/listar-afiliados`;
    const token = `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders()
			.set('Authorization',token);
    return this.http.get<Afiliados[]>(url,{headers})
    .pipe(
      catchError(resp => of([]))
    )
  }

  eliminarAfiliado(afiliado: Afiliados) {
    const url = `${this.url}/v0/afiliado`;
    const token = `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders()
			.set('Authorization',token);
    return this.http.post(url,afiliado,{headers});
  }

  actualizarAfiliado(afiliado:any) {
    const url = `${this.url}/v0/afiliado`;
    const token = `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders()
			.set('Authorization',token); 
      return this.http.post(url,afiliado,{headers});
  }
}
