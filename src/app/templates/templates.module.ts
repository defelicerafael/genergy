import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { NumerosComponent } from './numeros/numeros.component';
import { FraseComponent } from './frase/frase.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { MisionComponent } from "./mision/mision.component";
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],  
  declarations: [
        TemplatesComponent,
        NumerosComponent,
        FraseComponent,
        TwoColumnsComponent,
        MisionComponent,
        TecnologiaComponent,
        ContactoComponent,
        FooterComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        TemplatesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
        
        
    ]
   
})
export class TemplatesModule { }
