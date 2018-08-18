import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendererErrorComponent } from './renderer-error/renderer-error.component';
import { ListTrackbyComponent } from './list-trackby/list-trackby.component';
import { RendererComponent } from './renderer.component';
import { ListFunctionsComponent } from './list-functions/list-functions.component';

const routes: Routes = [
    {
        path: '',
        component: RendererComponent,
        children: [
            {
                path: 'dom',
                component: RendererErrorComponent
            },
            {
                path: 'trackby',
                component: ListTrackbyComponent
            },
            {
                path: 'list-function',
                component: ListFunctionsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RendererRoutingModule {}
