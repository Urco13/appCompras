import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-14baf.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-14baf.firebaseio.com/presupuestos';
  constructor(private http: HttpClient) { }

  postPresupuesto(presupuesto: any ){

    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({'ContentType': 'application/json'});

    return this.http.post(this.presURL, newpres, {headers});
  }

  getPresupuestos(){

    return this.http.get(this.presURL);
  }

  getPresupuesto(id$: string){

    const url= `${this.preURL}/${id$}.json`;

    return this.http.get(url);

  }

  putPresupuesto(presupuesto: any, id$: string){

    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({'ContentType': 'application/json'});

    const url= `${this.preURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers});
  }
}
