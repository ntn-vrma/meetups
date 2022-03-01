import { NgModule } from '@angular/core';
import { bootstrap, components, imports, providers } from './declarations';

@NgModule({
  declarations: components,
  imports: imports,
  providers: providers,
  bootstrap: bootstrap
})
export class AppModule { }
