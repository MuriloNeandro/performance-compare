import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables.component';
import { ObservableErrorComponent } from './observable-error/observable-error.component';
import { ObservableUnsubscribeComponent } from './observable-unsubscribe/observable-unsubscribe.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
    {
        path: '',
        component: ObservablesComponent,
        children: [
            {
                path: 'memory-leak',
                component: ObservableErrorComponent
            },
            {
                path: 'unsubscribe',
                component: ObservableUnsubscribeComponent
            },
            {
                path: 'promise',
                component: PromiseComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObservablesRoutingModule {}
