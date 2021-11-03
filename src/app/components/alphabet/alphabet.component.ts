import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';import { user } from 'src/app/user';
;

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  
  alphabet: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u','v','z', 'ALL'  
  ];
  // questo componente dovrebbe essere generico ma lo facciamo solo per filtrare gli utenti
  @Input() data: user[] = [];

  // questo va bene
  @Output() onSelectLetter: EventEmitter<user[]> = new EventEmitter();

  constructor() { }


  selectLetter(letter: string) {


    if(letter === 'ALL') {
      // se premi all ti restituisco tutto l'array di utenti senza nessun filtro
      this.onSelectLetter.emit(this.data);

    } else {
      const filteredData = this.data.filter(el => el.name.toLowerCase().startsWith(letter.toLowerCase()));
      this.onSelectLetter.emit(filteredData);
    }

  }

  ngOnInit(): void {
  }

}
