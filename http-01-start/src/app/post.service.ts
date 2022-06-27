import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from './post.module';
import { map,catchError, tap } from 'rxjs/operators';
import { Observable, Subject , throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    error=new Subject<string>();

    constructor(private http: HttpClient) { }

    save(post: Post) {
        console.log(post);
        this.http.post<{ name: string }>(
            'https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json',
            post,
            {
                observe: 'response' //'body',
                
            }
            ).subscribe(
                response => {
                    console.log(response);
                    console.log(response.body);
                },

                error =>{
                    this.error.next("Save Service:"+error.message);
                }
            )
    }

    featchPost():Observable<Post[]> {
        let params=new HttpParams().set('print','pretty');
        //params=params.set('format','text');
        return this.http.get<{ [key: string]: Post }>(
            'https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json',
            {
                headers:new HttpHeaders({
                    'customer-header':'hello'
                }),
                params:params,
                responseType: 'json' //'text' //'arraybuffer'
            }
            ).pipe(map(
                response => {
                    console.log(response);
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
            'https://clcc-myopenboard-default-rtdb.firebaseio.com/posts.json',
            {
                observe:'events'
            }
            ).pipe(tap(
                event=>{
                    console.log(event);
                    if(event.type === HttpEventType.Sent){
                        console.log('received sent event:'+ JSON.stringify( event));
                    }

                    if(event.type===HttpEventType.Response){
                        console.log('Received response event'+ JSON.stringify(event));
                    }
                }
            ))
        
    }
}