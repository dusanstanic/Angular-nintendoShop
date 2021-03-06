import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/Game.model';
import { GameService } from '../../services/game.service';
import { StoreInterface } from '../../store/reducer.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
    private store: Store<StoreInterface>
  ) {}

  ngOnInit(): void {
    this.store.select('gameData').subscribe((gameData) => {
      this.games = gameData.games;
    });

    /*this.gameService.gamesChanged.subscribe((games) => {
      this.games = games;
    });*/
    //this.games = this.gameService.games;
  }

  // showGame(id: number) {
  //   this.router.navigate(['/gameMain/games', id, this.games[id - 1].name], {
  //     relativeTo: this.route,
  //   });
  // }
}
