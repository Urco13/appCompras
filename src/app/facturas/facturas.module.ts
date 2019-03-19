import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { EditfraComponent } from './facturas/editfra/editfra.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';


const routes: Routes = [
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfra', component: AddfraComponent },
  { path: 'editfra/:id', component: EditfraComponent },
];

@NgModule({
  declarations: [AddfraComponent, EditfraComponent, FacturasComponent],
  providers: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FacturasModule { }
