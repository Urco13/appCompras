import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/upload/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  private basePath: string = '/uploads';
  uploads: FirebaseListObservable<Archivo[]>;

  constructor(public angularFireDatabase: AngularFireDatabase) {}

  pushUpload(upload: Archivo) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshop) => {
       upload.progress = (snapshot.byteTransferred /)
      })
    }
}
