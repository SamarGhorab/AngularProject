import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'}, //el default bta3 el pathmatch pre bya5od goz2 bs
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'networks',component:NetworksComponent,canActivate:[AuthGuard]},
  {path:'movies',component:MoviesComponent},
  {path:'people',component:PeopleComponent},
  {path:'tvshows',component:TvshowComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'details/:movieType/:id',component:DetailsComponent},
  {path:'**',component:NotfoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
