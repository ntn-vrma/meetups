import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent, MeetingComponent, Meetup,LoadingComponent,
        MeetingsComponent, FavoriteComponent, FavoritesComponent,
        AboutComponent, ContactComponent } from "./landing";
import { ButtonComponent, LinksComponent, TextboxComponent } from "./UI";
import { ValidationService, MeetingsService } from "./services";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";



export const components=[
    HeaderComponent,
    LoginComponent,
    MeetingComponent,
    MeetingsComponent,
    Meetup,
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    LinksComponent,
    FavoritesComponent,
    FavoriteComponent,
    LoadingComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
]
export const providers=[
    ValidationService,
    MeetingsService
]
export const bootstrap=[
    AppComponent
]
export const imports=[
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ]