import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  provURL = 'https://comprasapp-14baf.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-14baf.firebaseio.com/proveedores';

  constructor(private http: HttpClient) { }

  postProveedor(proveedor: any ) {

    const newpres = JSON.stringify(proveedor);
    const headers = new HttpHeaders({'ContentType': 'application/json'});

    return this.http.post(this.provURL, newpres, {headers});
  }

  getProveedores() {

    return this.http.get(this.provURL);
  }

  getProveedor(id$: string) {

    const url = `${this.proURL}/${id$}.json`;

    return this.http.get(url);
  }

  putProveedor(proveedor: any, id$: string) {

    const newpre = JSON.stringify(proveedor);
    const headers = new HttpHeaders({'ContentType': 'application/json'});

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers});
  }

  delProveedor(id$: string) {

    const url = `${this.proURL}/${id$}.json`;

    return this.http.delete( url );
  }

  getProveedoresSearch(busqueda: string) {

    const url = `${this.provURL}?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get(url);
  }
}
