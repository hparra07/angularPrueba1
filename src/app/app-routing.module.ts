import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home'}
]


@NgModule({
 imports: [
    RouterModule.forRoot( app_routes, { useHash:true } )
 ],
 exports:[
    RouterModule
 ]
})

export class AppRoutingModule {

}