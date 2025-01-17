import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Post } from '../interfaces/post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-http-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './http-test.component.html',
  styleUrl: './http-test.component.css'
})
export class HttpTestComponent {
  //apiURL: string = "https://jsonplaceholder.typicode.com/posts";
  //posts: Post[] = [];
  posts: any[] = [];
  errorMessage!: string;
  newPost = {
    userId: 1,
    title: 'My New Post',
    body: 'This is the content of the new post'
  }

  //constructor(private http: HttpClient) {}
  constructor(private dataService: DataService) {}

  // fetchData() {
  //   this.http.get(this.apiURL).subscribe((data) => { console.log(data); });
  // }

  ngOnInit() {
    this.dataService.createPost(this.newPost);
    //this.fetchData();
    this.dataService.getAllPosts().subscribe({
      next: (posts) => {
        console.log(posts);
        this.posts = posts;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }
}
