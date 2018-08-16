import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableErrorComponent } from './components/observables/observable-error/observable-error.component';
import { RendererErrorComponent } from './components/renderer/renderer-error/renderer-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableErrorComponent,
    RendererErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
