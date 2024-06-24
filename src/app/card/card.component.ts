import { Component } from '@angular/core';
import { FilmService } from '../filmservice.service';

@Component({
  selector: 'app-card',
  template: `
    <div *ngIf = "films.length > 0; else nofilms">
      <div *ngFor = "let film of films"> 
          
        <div class = "card" [ngSwitch] = film>
          <h2> {{film}} </h2>
          <div *ngSwitchCase="'The Shawshank Redemption'">
            <p>Release Year: 1994 | IMDB Score: 9.3</p>
            <p>Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.</p>
          </div>
          <div *ngSwitchCase="'Interstellar'">
            <p>Release Year: 2014 | IMDB Score: 8.7</p>
            <p>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</p>
          </div>
          <div *ngSwitchCase="'The Matrix'">
            <p>Release Year: 1999 | IMDB Score: 8.7</p>
            <p>When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.</p>
          </div>
          <div *ngSwitchCase="'Forrest Gump'">
            <p>Release Year: 1994 | IMDB Score: 8.8</p>
            <p>The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.</p>
          </div>

        </div>
      </div>
    </div>

    <ng-template #nofilms>
      <h2>No Films Available</h2>
    </ng-template>

  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "List of Books"
  films;

  constructor(srv: FilmService){
      this.films = srv.getFilms();
  }
}
