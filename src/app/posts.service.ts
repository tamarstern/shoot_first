import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllGames() {
    return this.http.get('/api/games')
      .map(res => res.json());
  }
  createGame(){
    return this.http.post('/api/games', {})
      .map(res => res.json());
  }
}
