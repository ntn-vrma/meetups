import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, LoadingComponent, LoginComponent, MeetingComponent, MeetingsComponent } from './landing';
import { FavoritesComponent } from './landing/favorites/favorites.component';
import { ViewMeetupComponent } from './landing/meetups/viewMeetup/viewMeetup.component';

const routes: Routes = [
  { path:'', component:MeetingsComponent },
  { path:'newMeetup', component:MeetingComponent },
  { path:'meetups', component:MeetingsComponent },
  { path:'login', component:LoginComponent },
  { path:'favorites', component:FavoritesComponent },
  { path:'loading', component:LoadingComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path:'meetups/:id', component:ViewMeetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
