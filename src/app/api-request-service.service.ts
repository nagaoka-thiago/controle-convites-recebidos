import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convite } from './modelos/convite';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestServiceService {
baseURL: string = 'http://localhost:3000/convites';
httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
  constructor(private httpClient: HttpClient) { }

  pegarConvites(): Promise<Convite[] | undefined> {
    return this.httpClient.get<Convite[]>(this.baseURL, this.httpOptions).toPromise();
  }

  pegarConvite(id: number) : Promise<Convite | undefined> {
    return this.httpClient.get<Convite>(`${this.baseURL}/${id}`, this.httpOptions).toPromise();
  }

  modificar(convite: Convite) : Promise<Convite | undefined> {
    return this.httpClient.put<Convite>(`${this.baseURL}/${convite.id}`, convite, this.httpOptions).toPromise();
  }

  cadastrar(convite: Convite) : Promise<Convite | undefined> {
    return this.httpClient.post<Convite>(`${this.baseURL}`, convite, this.httpOptions).toPromise();
  }

  deletar(id: number) : Promise<Convite | undefined> {
    return this.httpClient.delete<Convite>(`${this.baseURL}/${id}`, this.httpOptions).toPromise();
  }
}
