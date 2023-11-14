import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EpisodeComponent } from './episode/episode.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'search', component: TopBarComponent },
  { path: 'home/:nomeShow', component: HomeComponent },
  { path: 'show/:idShow', component: ShowComponent },
  // { path: 'detail/:idShow', component: DetailComponent },
  // { path: 'episode/:idShow', component: EpisodeComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }