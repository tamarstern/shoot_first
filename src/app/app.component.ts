import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private postsService: PostsService, private router: Router){}
  title = 'Welcome!';
  posts = {};
  startGame(): void {
    this.postsService.createGame().subscribe(posts => {
      this.posts = posts;
    });
    this.router.navigate(['/invite-friend']); 
  }
}
