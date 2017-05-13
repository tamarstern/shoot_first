import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty object
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    // this.postsService.getAllGames().subscribe(posts => {
    //   this.posts = posts;
    // });
    // this.postsService.createGame().subscribe(posts => {
    //   this.posts = posts;
    // })
  }
}
