import { Component, OnInit } from '@angular/core';
import { FileItem } from '../subida/file.modal';
import { LoadfileService } from '../servicios/loadfile.service';

@Component({
  selector: 'app-subida',
  templateUrl: './subida.component.html',
  styles: []
})
export class SubidaComponent implements OnInit {

  archivos: FileItem[] = [];

  constructor( public cargaArchivos: LoadfileService ) { }

  ngOnInit() {
  }

  cargarArchi() {

    this.cargaArchivos.cargarArchivosFirebase( this.archivos );
  }
}
