import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { map, Observable } from 'rxjs';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http: HttpClient;
  url:string = 'http://localhost:8080/categoria';

  constructor(handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }

  public getCategoria(){
    return this.http.get(this.url + '/listar').pipe(map(response=>response));
  }
  
  public getCategoriaById(id: number){
    return this.http.get(this.url + '/'+id).pipe(map(response=>response));
  }

  public salvar(categoria: Categoria): Observable<Categoria>  {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "Application/json");

    if(categoria.id !== null){
     return this.http.put<Categoria>(this.url+`/editar/${categoria.id}`, categoria, {headers})
    }
    return this.http.post<Categoria>(this.url+'/criar', categoria, {headers})
  }

  public remover(id: number){
    return this.http.delete<Categoria>(this.url + '/remover/'+id).pipe(map(response=>response));
  }
}
