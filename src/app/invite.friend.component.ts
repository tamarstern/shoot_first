import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private postsService: PostsService){}
  title = 'Welcome!';
  posts = {};
  startGame(): void {
    this.postsService.createGame().subscribe(posts => {
      this.posts = posts;
    })
  }
}
