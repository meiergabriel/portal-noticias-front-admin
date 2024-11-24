import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private http: HttpClient;
  url: string = 'http://localhost:8080/noticia';

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  // Método listar ajustado com a tipagem correta
  public listar(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.url + '/listar').pipe(
      map(response => response) // Caso necessário, pode-se aplicar mais transformações aqui
    );
  }

    // Método para buscar uma notícia específica pelo ID
    public getNoticia(id: number): Observable<Noticia> {
      return this.http.get<Noticia>(`${this.url}/${id}`).pipe(
        map(response => response) // O retorno será tipado como Noticia
      );
    }

  // Método listarById ajustado para garantir tipagem
  public listarById(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.url}/${id}`).pipe(
      map(response => response) // Garantindo que o retorno seja tipado como Noticia
    );
  }

  // Método salvar já tipado corretamente
  public salvar(noticia: Noticia): Observable<Noticia> {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "Application/json");

    if (noticia.id !== null) {
      return this.http.put<Noticia>(`${this.url}/atualizar/${noticia.id}`, noticia, { headers });
    }
    return this.http.post<Noticia>(`${this.url}/criar`, noticia, { headers });
  }

  // Método remover ajustado com a tipagem correta
  public remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/remover/${id}`).pipe(
      map(response => response) // O retorno é vazio (void) após a remoção
    );
  }
}
