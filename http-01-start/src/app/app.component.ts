import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Post } from './post.module';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  errorSub:Subscription;
  loadedPosts:Post[] = [];
  isFeatching=false;
  error:string=null;
  saveError:string=null;

  constructor(private postService:PostService) {}
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit() {
    this.errorSub=this.postService.error.subscribe(
      error=>{
        this.error=error;
      }
    )
    this.isFeatching=true;
    this.postService.featchPost().subscribe(
      posts=>{
        this.loadedPosts=posts;
        this.isFeatching=false;
      },
      error => {
        this.error=error.message;
        this.isFeatching=false;
      }
    )
  }

  onCreatePost(postData: Post) {
   this.postService.save(postData);
    
  }

  onFetchPosts() {
    // Send Http request
    this.isFeatching=true;
    this.postService.featchPost().subscribe(
      posts=>{
        this.loadedPosts=posts;
        this.isFeatching=false;
      },
      error => {
        this.error = error.message;
        this.isFeatching=false;
      }
    );
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(
      ()=>{
        this.loadedPosts=[];
      }
    );
  }

  errorOK(){
    this.error=null;
  }
  
}
