import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RoutingModule } from './app/app-routing.module';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));
bootstrapApplication(AppComponent,{
  providers:[
    //AnalyticsService
    importProvidersFrom(RoutingModule)
  ]
})