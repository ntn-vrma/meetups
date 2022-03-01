import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent, LoginComponent, MeetingComponent, MeetingsComponent } from './landing';
import { FavoritesComponent } from './landing/favorites/favorites.component';

const routes: Routes = [
  { path:'newMeetup', component:MeetingComponent },
  { path:'meetups', component:MeetingsComponent },
  { path:'login', component:LoginComponent },
  { path:'favorites', component:FavoritesComponent },
  { path:'loading', component:LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
