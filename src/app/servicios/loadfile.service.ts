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

  constructor() { }
}
