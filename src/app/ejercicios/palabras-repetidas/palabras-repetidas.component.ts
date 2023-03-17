import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabras-repetidas',
  templateUrl: './palabras-repetidas.component.html',
  styleUrls: ['./palabras-repetidas.component.scss']
})
export class PalabrasRepetidasComponent implements OnInit {

  // Dada una palabra, buscar en una frase y devolver cuantas veces aparece en ella.
  // La frase y la palabra deben ser parametros de una funcion
  constructor() { }

  ngOnInit(): void {
    let frase = [
      'La primera vez, fue aquella vez, que cada vez que pasa repito una y otra vez.',
      'Si no encuentras la palabra entonces retorna 0'
    ];
    
    let palabra = 'vez';
    let palabras_encontradas = this.busquedaRepetidos(frase[1], palabra);
    console.log(palabras_encontradas);
  }

  busquedaRepetidos(frase: string, palabra: string) {

    let busqueda = 0;

    let frase_limpia = frase.toLocaleLowerCase().replace(/[¡!.,-]/gi, '');
    console.log(frase_limpia);

    let frase_array = frase_limpia.split(' ');

    frase_array.map(item => {
      if (item == palabra) {
        busqueda++;
      }
    })
    return busqueda

  }

}
