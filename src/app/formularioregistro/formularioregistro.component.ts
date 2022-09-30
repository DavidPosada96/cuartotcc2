import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!: FormGroup;


  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['david',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['empresa',[Validators.required]],
      identificacionremitente:['123456789',[Validators.required]],
      nombreremitente:['andercol',[Validators.required]],
      departamentoremitente:['Antioquia',[Validators.required]],
      municipioremitente:['medellin',[Validators.required]],
      direccionremitente:['calle falsa 123',[Validators.required]],
      tipodestinatario:['persona',[Validators.required]],
      iddestinatario:['12345678',[Validators.required]],
      nombredestinatario:['kevin gorra',[Validators.required]],
      departamentodestinatario:['Valle del Cauca',[Validators.required]],
      municipiodestinatario:['Santiago de Cali',[Validators.required]],
      direcciondestinatario:['Calle Falsa 123',[Validators.required]]
    })
  }

}
