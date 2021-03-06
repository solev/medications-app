import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {PillBoxService} from "~/app/services/pill-box.service";
import {NgShadowModule} from "nativescript-ngx-shadow";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {AppSession} from "~/app/services/appSession";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NgShadowModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        SearchBoxComponent
    ],
    providers: [
        PillBoxService,
        AppSession
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}
