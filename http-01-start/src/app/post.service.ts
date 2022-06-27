import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from './post.module';
import { map,catchError } from 'rxjs/operators';
import { Observable, Subject , throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    error=new Subject<string>();

    constructor(private http: HttpClient) { }

    save(post: Post) {
        console.log(post);
        this.http.post<{ name: string }>('https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json',
            post).subscribe(
                response => {
                    console.log(response);
                    console.log(response.name);
                },

                error =>{
                    this.error.next("Save Service:"+error.message);
                }
            )
    }

    featchPost():Observable<Post[]> {
        let params=new HttpParams().set('print','pretty');
        params=params.set('format','text');
        return this.http.get<{ [key: string]: Post }>(
            'https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json',
            {
                headers:new HttpHeaders({
                    'customer-header':'hello'
                }),
                params:params
            }
            ).pipe(map(
                response => {
                    const posts: Post[] = [];
                    for (let key in response) {
                        if (response.hasOwnProperty(key)) {
                            posts.push(
                                {
                                    ...response[key],
                                    id: key
                                }
                            )
                        }
                    }
                    return posts;
                }
            ),
            catchError(
                error=>{
                    return throwError(error);
                }
            )
            );
    }

    deletePosts() :Observable<any>{
        return this.http.delete(
            'https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json')
        
    }
}