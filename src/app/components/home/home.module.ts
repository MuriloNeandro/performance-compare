import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        HttpClientModule
    ],
    declarations: [
       HomeComponent
    ],
    providers: []
})
export class HomeModule { }
