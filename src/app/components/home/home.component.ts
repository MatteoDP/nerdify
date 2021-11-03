import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : user[] = [] as user[] ;

  // ci sei?ok
  // 1. passi l'array di utenti al componente "alphabet component"
  // 2. quando clicchi una lettera il componente emette un evento, il padre "home component", stara' in ascolto su questo evento
  // esattamente come se fosse un bottone con l'evento click solo che questo e' un evento custom che ti crei.
  // 3. quando il componente alphabet emette, emettera' un array di users, il padre deve prendere questi utenti e aggiornare la vista
  // con i nuovi utenti.
  // Quindi abbiamo bisogno di una variabile che inizialmente conterra' tutti gli utenti perche' inizialmente facciamo finta 
  // che sia selezionato 'ALL'. Questa variabile dovra' essere aggiornata ogni volta che il componente alphabet emette un nuovo array di user
  // Si potrebbe usare un semplice array, forse, ma usiamo un BehaviorSubject giusto per fare pratica.

  // quando hai un observable o behaviorsubject/subject di solito la variabile finisce con $, convenzione.
  // la differenza principale tra Subject e BehaviorSubject e' che il BehaviorSubject va inizializzato, non importa con cosa
  // basta che sia del tipo dichiarato
  users$: BehaviorSubject<user[]> = new BehaviorSubject<user[]>([] as user[]);

  constructor(private ls : LoginService) { }


  ngOnInit(): void {
    this.ls.getUser().subscribe(users =>  {
      this.users = users;
      // mettiamo l'array di utenti anche nel behavior subject perche' abbiamo detto che inizialmente facciamo vedere
      // tutti gli utenti
      this.users$.next(users);
    }); 
    // scusa stavo nel browser a cvedere, cosa hai scritto? se all'inizio metto tutto nel coso, cancella i vecchi?
    // si certo, il BehaviorSubject (BS lo chiamero') e' sia un observable che un observer (non c'entra niente con quello che hai chiesto xd)
    // pero' te lo volevo dire. Facendo .next() e' come se emettessi un nuovo valore, esattamente come farebbe un observable
    // se hai un web socket, e' il websocket che fa la next con il successivo messaggio e tu sei in ascolto facnendo .subscribe()
    // e ti arrivano sti messaggi. Ma se vuoi salvarli te li devi mettere in un array o in qualche altra struttura dati
    // lui emette, tu che sei ascolto lo ricevi ma se non lo salvi...chiamero
    // In questo caso non ci interessa salvare gli utenti. Tu prendi tutti gli utenti e li passi a alphabet component, questo li tiene
    // in un array. quando clicchi su qualche lettera' ti filtra l'array SENZA MODIFICARLO (ti restituisce un nuovo array con gli elementi)
    // che passano il predicato del filter
    // Il figlio ha un attributo/proprieta' @Input() data: user[]
    // cmq prova sul browser l'app
    // taaac, come ti avevo detto, non c'e' bisogno di creare un behavior subject ma vabbe
    // se hai un array non puoi aggiornarlo e basta perche' angular aggiorna la pagina (change detection si chiama il processo)
    // quando nota che una qualche variabile e' cambiata. Ma nel caso di un array
    // data = [];
    // ....
    // data.push(1) <-- questo angular non lo vede perche' l'array e' sempre quello, il puntatore non e' cambiato
    // la referenze all'array e' sempre la stessa, non controlla se il valore/valori dell'array sono cambiati
    // quindi e' piu' semplice con un bs ma si puo' tranquillamente fare con un array
    // Angular fa scattare l'algoritmo della change detection che si occupa di aggiornare la/le view quando cambia la reference
    //  e non il valore di un oggetto/array (l'array e' un oggetto in js, una funzione e' un oggetto... xd)
    // quindi se vuoi che la vista venga aggiornata devi creare un oggetto/array nuovo e non mutare quello che hai
    // senno' non vedrai mai i dati aggiornati nella vista
    // data = [1] <-- data adesso punta a una nuova locazione di memoria
    // e non 
    // data.push(1) <-- angular non lo vede, il puntatore (data) punta sempre a quella locazione di memoria
    // vabbe' io devo andare, fai altre prove se vuoi, gioca con gli observable piu' che altro.
    // di nada, se ti serve condividi il progetto e vedo. Ciao
  }
  

  // l'event rappresenta l'evento che il componente emette, event.value conterra' l'array di utenti
  // niente, ho detto na cazzata, event contiene direttamente l'array di utenti
  // se vai nel browser puoi provare, nella console dovresti vedere l'array di dati
  // c'e' un problema, bisogna mostrare il componente per il filtro dopo che arrivano i valori
  onUserChange(users: any): void {
    // ora bisogna solo aggiornare il valore del behavior subject pushando i nuovi dati
    this.users$.next(users);
  }

  changeLetter(letter : string){
    alert(letter);
  
    /*
    this.ls.getUser().pipe(
      map((u:user[])=> u.filter( 
        (us)=> us.name.toLocaleLowerCase().startsWith(letter.toLocaleLowerCase())
      )
      )
    ).subscribe((usr) => this.users=usr);
    */

    this.ls.getUser().subscribe((usr) => this.users=usr.filter( 
      (us)=> us.name.toLocaleLowerCase().startsWith(letter.toLocaleLowerCase())
    
    ));

  }


}
