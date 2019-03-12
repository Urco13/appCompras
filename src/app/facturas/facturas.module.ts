import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddfraComponent],
  providers: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FacturasModule { }
