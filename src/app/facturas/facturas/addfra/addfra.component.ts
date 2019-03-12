import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addfra',
  templateUrl: './addfra.component.html',
  styleUrls: ['./addfra.component.css']
})
export class AddfraComponent implements OnInit {

  facturaForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
