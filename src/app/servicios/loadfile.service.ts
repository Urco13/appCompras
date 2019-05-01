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


  constructor( private db: AngularFirestore) {}


  cargarArchivosFirebase( archivos: FileItem[] ) {

    const storageRef = firebase.storage().ref();

    for ( const item of archivos ) {

      item.estaSubiendo = true;
      if ( item.progress >= 100 ) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPPETA_ARCHIVOS }/${ item.fileName}`).put( item.file );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
      ( snapshot: firebase.storage.UploadTaskSnapshot ) => item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
      ( error ) => console.error( 'Error al subir', error),
      () => {
        console.log('Imagen cargada correctamente');
        uploadTask.snapshot.ref.getDownloadURL().then( downloadUrl => {
          item.url = downloadUrl;
          item.estaSubiendo = false;
          this.guardarArchivo({ nombre: item.fileName, url: item.url });
        })
        .catch(error => console.log({error}));
            }

      )}
}

  private guardarArchivo( archivo: { nombre: String, url: String } ) {

    this.db.collection(`/${this.CARPPETA_ARCHIVOS}`).add( archivo );
  }

}
