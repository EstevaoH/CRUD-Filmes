import { Injectable } from '@angular/core';
import { Filme } from '../models/filme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  filme: Filme[];
  private url = 'http://localhost:3000/filme'
  //private url2 = 'http://localhost:3000/filmes'
  constructor(private http: HttpClient) { }

  listarfilme(): Observable<Filme>{
    return this.http.get<Filme>(this.url);
  };

  buscarfilme(id: string):Observable<Filme>{
    return this.http.get<Filme>(this.url + '/' + id)
  };

  buscarID(id: number):Observable<Filme>{
    return this.http.get<Filme>(this.url + '/' + id)
  };

  cadastrafilme(filme: Filme):Observable<Filme>{
    return this.http.post<Filme>(this.url, filme)
  };

  excluirfilme(id: number):Observable<Filme>{
    return this.http.delete<Filme>(this.url + '/' + id)
  };

  atualizarfilme(filme: Filme):Observable<Filme>{
    return this.http.put<Filme>(this.url, filme)
  };

}
