import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { RendererErrorComponent } from "./renderer-error/renderer-error.component";
import { RendererRoutingModule } from "./renderer.routing";
import { ListTrackbyComponent } from './list-trackby/list-trackby.component';
import { RendererComponent } from "./renderer.component";
import { RendererService } from "./renderer.service";
import { ListFunctionsComponent } from './list-functions/list-functions.component';
import { ListFunctionsPerformComponent } from './list-functions-perform/list-functions-perform.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RendererRoutingModule,
        HttpClientModule
    ],
    declarations: [
        RendererComponent,
        RendererErrorComponent,
        ListTrackbyComponent,
        ListFunctionsComponent,
        ListFunctionsPerformComponent
    ],
    providers: [RendererService]
})
export class RendererModule { }
