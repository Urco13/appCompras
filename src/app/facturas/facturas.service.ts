import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  factURL = 'https://comprasapp-14baf.firebaseio.com/facturas.json';
  facURL = 'https://comprasapp-14baf.firebaseio.com/facturas';

  constructor(private http: HttpClient) { }

  postFactura(factura: any ){

    const newfact = JSON.stringify(factura);
    const headers = new HttpHeaders({'ContenType': 'application/json'});

    return this.http.post(this.factURL, newfact, {headers});
  }

  getFacturas() {

    return this.http.get(this.factURL);
  }

  getFactura(id$: string) {

    const url = `${this.facURL}/${id$}.json`;

    return this.http.get(url);
  }

  putFactura(factura: any, id$: string) {

    const newfact = JSON.stringify(factura);
    const headers = new HttpHeaders({'ContenType': 'application/json'});

    const url = `${this.facURL}/${id$}.json`;

    return this.http.put(url, newfact, {headers});
  }

  delFactura(id$: string) {

    const url = `${this.facURL}/${id$}.json`;

    return this.http.delete( url );
  }
}
