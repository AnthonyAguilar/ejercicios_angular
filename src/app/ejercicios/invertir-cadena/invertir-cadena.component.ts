import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invertir-cadena',
  templateUrl: './invertir-cadena.component.html',
  styleUrls: ['./invertir-cadena.component.scss']
})
export class InvertirCadenaComponent implements OnInit {

  // Dada una cadena de texto darle la vuelta o sea invertir valores sin usar metodos propios del lenguaje.
  // Solo estructuras de control
  // ejemplo: invertir('Hola')    // Devuelve: 'aloH' 

  textForm!: FormGroup;
  texto!: string;
  textoInvertido!: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createform();
  }

  invertir(texto: string){

    let numLetras = texto.length;
    let arrayLetras = '';

    for (let index = numLetras-1; index >= 0; index--) {
      arrayLetras = arrayLetras + texto[index];
    }
    this.textoInvertido = arrayLetras;

  }

  invertir2(texto: string){

    let invirtiendo_letras = '';

    for (const letra of texto) {
      invirtiendo_letras = letra + invirtiendo_letras;
    }
    this.textoInvertido = invirtiendo_letras;

  }

  onSubmit(){

    this.invertir2(this.textForm.controls['text'].value)

  }

  createform() {
    this.textForm = this.fb.group({
      'text': [''],
    });
  }

}
