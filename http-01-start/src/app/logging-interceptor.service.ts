import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Logging out bound request');
        console.log('Logging outbound URL:'+req.url);
        console.log(req);
        return next.handle(req).pipe(tap(
            event=>{
                console.log("Logging: inbound response");
                if( event.type === HttpEventType.Response){
                    console.log(event.body);
                }
            }
        ));
    }
    
}