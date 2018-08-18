import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }                 from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: 'renderer',
        loadChildren: './components/renderer/renderer.module#RendererModule'
    },
    {
        path: 'observables',
        loadChildren: './components/observables/observables.module#ObservablesModule'
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}