import { GAMMEUR } from './mock-computer-list';
import { Component,OnInit } from '@angular/core';
import { Gammeur } from './gammeur';
// import { GAMMEUR, Gammeur } from './gammeur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  computersList : Gammeur[]= GAMMEUR;
  title=" Super ordinateur";

  ngOnInit(): void{

    console.table(this.computersList)
    this.selectGammeur(this.computersList[1]);


  }

  selectGammeur(gammeur : Gammeur) {
    // console.log(`les pc gammeur disponible : ${}`)
    console.log(`Vous avez cliqué  sur le pc Gammeur ${gammeur.nom}`)
  }
}
