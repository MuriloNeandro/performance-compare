import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { ObservablesRoutingModule } from "./observables.routing";
import { ObservablesComponent } from "./observables.component";
import { ObservableErrorComponent } from "./observable-error/observable-error.component";
import { ObservableUnsubscribeComponent } from './observable-unsubscribe/observable-unsubscribe.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ObservablesRoutingModule,
        HttpClientModule
    ],
    declarations: [
        ObservablesComponent,
        ObservableErrorComponent,
        ObservableUnsubscribeComponent,
        PromiseComponent
    ],
    providers: []
})
export class ObservablesModule { }
