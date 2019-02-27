import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

getConfig() {
  return this.http.get(this.configUrl);
}
}
