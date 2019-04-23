import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../subida/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  private CARPPETA_ARCHIVOS = 'img';
  //public archivo: File;


  constructor( private db: AngularFirestore) { }

  cargarArchivosFirebase( archivos: FileItem[] ) {

    console.log( archivos );
  }

  private guardarArchivo( archivo: { nombre: String, url: String } ) {

    this.db.collection(`/${this.CARPPETA_ARCHIVOS}`).add( archivo );
  }

}
