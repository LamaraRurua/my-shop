import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { forkJoin, map, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //apiURL: string = "https://jsonplaceholder.typicode.com/posts";
  //apiURL: string = "https://jsonplaceholder.typicode.com";
  apiURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any[]> {
    return forkJoin({
      posts: this.http.get<Post[]>(this.apiURL + "/posts"),
      users: this.http.get<User[]>(this.apiURL + "/users")
    }).pipe(
      map(({ posts, users }) => {
        return posts.map((post) => {
          const user = users.find((user) => user.id == post.userId);
          return {
            ...post,
            userName: user ? user.name : 'Unknown'
          };
        })
      })
    );
  }

  createPost(postData: any): void {
    this.http.post(this.apiURL + '/posts', postData).subscribe((response) => {
      console.log('Post created: ', response);
    });
  }
}
