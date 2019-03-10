import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'appCompras';

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyCHMQe6PsU4gAat6yb7V1m0gFL_iqLmjPc",
      authDomain: "comprasapp-14baf.firebaseapp.com"
    });
  }

}
