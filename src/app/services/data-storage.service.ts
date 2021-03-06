import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../models/Game.model';
import { StoreInterface } from '../store/reducer.model';
import { GameService } from './game.service';
import * as gameDataActions from '../store/actions/gameData.actions';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private gameService: GameService,
    private store: Store<StoreInterface>
  ) {}

  fetchGames() {
    return this.http
      .get<Game[]>('http://localhost:8080/games')
      .subscribe((response) => {
        console.log(response);
        this.gameService.setGames(response);
        this.store.dispatch(new gameDataActions.SetGames(response));
      });
  }
}
