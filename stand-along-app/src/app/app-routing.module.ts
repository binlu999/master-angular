import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { WelcomeComponent } from "./welcome/welcome.component";
const routes:Routes=[
    {
        path:'',
        component:WelcomeComponent
    },
    {
        path: 'about',
        //component: AboutComponent,
        loadComponent:()=> import('./about/about.component').then(
            m=>m.AboutComponent
        )
      },
      {
        path: 'dashboard',
        loadChildren:()=> import('./dashboard/dashboard-routing.module').then(
            m=>m.routes
        )
      },
    
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class RoutingModule{}